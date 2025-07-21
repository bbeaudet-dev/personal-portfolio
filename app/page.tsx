import { RecentContent } from 'app/components/recent-content'

export default function Page() {
  return (
    <>
      <section className="max-w-2xl mx-auto px-4">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          hey, I'm ben
        </h1>
        <p className="mb-4">
          {`I'm pivoting from mechanical to software engineering. 
          Writing helps me understand myself and the world better.`}
        </p>
        <p className="mb-4">
          {`welcome, thanks for being here`}
        </p>
      </section>
      {/* Full-bleed RecentContent, centered and very wide */}
      <section className="w-full max-w-screen-xl mx-auto px-4">
        <RecentContent />
      </section>
    </>
  )
}
