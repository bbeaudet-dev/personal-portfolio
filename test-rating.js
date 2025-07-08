const fs = require('fs');
const path = require('path');

function parseFrontmatter(fileContent) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let frontmatterMatch = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = frontmatterMatch[1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let metadata = {}

  let frontMatterLines = frontMatterBlock.trim().split('\n')
  frontMatterLines.forEach((line) => {
    if (line.trim()) {
      let [key, ...valueArr] = line.split(': ')
      let value = valueArr.join(': ').trim()
      value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
      
      if (key.trim() === 'rating') {
        // Parse rating object
        try {
          console.log('Raw rating value:', value);
          metadata.rating = JSON.parse(value);
          console.log('Parsed rating:', metadata.rating);
        } catch (error) {
          console.log('Error parsing rating:', error.message);
          metadata.rating = {
            emotionalResonance: 0,
            engagement: 0,
            orchestration: 0,
            choreography: 0,
            wowFactor: 0
          }
        }
      } else {
        metadata[key.trim()] = value
      }
    }
  })

  return { metadata, content }
}

// Test with Hadestown file
const hadestownPath = path.join(process.cwd(), 'app', 'broadway', 'reviews', 'hadestown.mdx');
const hadestownContent = fs.readFileSync(hadestownPath, 'utf-8');
console.log('=== Testing Hadestown ===');
const hadestownResult = parseFrontmatter(hadestownContent);
console.log('Final metadata:', hadestownResult.metadata);

// Test with Hamilton file
const hamiltonPath = path.join(process.cwd(), 'app', 'broadway', 'reviews', 'hamilton.mdx');
const hamiltonContent = fs.readFileSync(hamiltonPath, 'utf-8');
console.log('\n=== Testing Hamilton ===');
const hamiltonResult = parseFrontmatter(hamiltonContent);
console.log('Final metadata:', hamiltonResult.metadata); 