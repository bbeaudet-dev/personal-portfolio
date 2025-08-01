import { ForFunOverview } from '../components/ForFunOverview'

export default function ForFunPage() {
  return (
    <section>
      <h1 className="font-bold tracking-tighter text-3xl mb-4">
        For Fun
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p className="text-neutral-600 dark:text-neutral-400 mb-8">
          Beyond my professional work, I have a variety of hobbies and interests that bring me joy and help me stay creative. 
          Here you'll find my thoughts on theatre, gaming adventures, and musical discoveries.
        </p>
      </div>
      
      <ForFunOverview />
    </section>
  )
} 