/**
 * Reassign chronologicalId by global date order (tie-break: slug, visitId).
 * Run from repo root: node scripts/patch-theatre-chronological-ids.mjs
 */
import fs from 'fs'

const path = new URL('../app/for-fun/theatre/data/shows-ben.ts', import.meta.url)
let lines = fs.readFileSync(path, 'utf8').split('\n')

let slug = null
const entries = []

for (let i = 0; i < lines.length; i++) {
  const line = lines[i]
  const sm = line.match(/slug: "([^"]+)"/)
  if (sm) slug = sm[1]

  const vm = line.match(
    /chronologicalId: (\d+), visitId: (\d+), theatre: "([^"]*)", date: "(\d{4}-\d{2}-\d{2})"/,
  )
  if (vm && slug) {
    entries.push({
      lineIndex: i,
      slug,
      visitId: Number(vm[2]),
      date: vm[4],
      oldChrono: Number(vm[1]),
    })
  }
}

entries.sort((a, b) => {
  const d = a.date.localeCompare(b.date)
  if (d !== 0) return d
  const s = a.slug.localeCompare(b.slug)
  if (s !== 0) return s
  return a.visitId - b.visitId
})

const byLine = new Map()
entries.forEach((e, idx) => {
  byLine.set(e.lineIndex, idx)
})

for (let i = 0; i < lines.length; i++) {
  const newId = byLine.get(i)
  if (newId === undefined) continue
  lines[i] = lines[i].replace(/chronologicalId: \d+/, `chronologicalId: ${newId}`)
}

fs.writeFileSync(path, lines.join('\n'))
console.log(`Updated chronologicalId for ${entries.length} visits`)
