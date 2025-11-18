import { useEffect, useState } from 'react'

const photos = [
  'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1527980966808-86b9c657d7de?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
]

export default function Team() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % photos.length), 3500)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden border border-slate-900/10 shadow-[0_10px_40px_rgba(2,6,23,0.06)]">
          {photos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="team"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">We’re builders. And compliance needed building.</h3>
          <p className="text-slate-600 leading-relaxed">
            Not ex-auditors. Not consultants. Just a team obsessed with solving real, painful problems.
          </p>
        </div>
      </div>
    </section>
  )
}
