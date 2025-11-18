function QuoteCard({ quote, author }) {
  return (
    <div className="rounded-2xl bg-white shadow-[0_10px_40px_rgba(2,6,23,0.06)] border border-slate-900/10 p-6 md:p-8">
      <p className="text-slate-800 text-lg leading-relaxed">“{quote}”</p>
      <p className="mt-4 text-sm text-slate-500">— {author}</p>
    </div>
  )
}

export default function SocialProof() {
  const quotes = [
    {
      quote: "If Backbone really shows me what’s missing or changing instead of making me dig for it… honestly, that would change my whole week.",
      author: "QA Manager, leading plant-based protein manufacturer",
    },
    {
      quote: "So I can literally ask whether we’re ready for a new market… and get a straight answer? That’s a next-level upgrade.",
      author: "CEO, leading European baked goods manufacturer",
    },
    {
      quote: "Honestly, if this prevents even one surprise at customer level, I’ll push this through tomorrow.",
      author: "COO, poultry processing company",
    },
    {
      quote: "If this is real, it’s too good to be true.",
      author: "Site Director, major beverages manufacturer",
    },
  ]

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-10 text-center max-w-3xl mx-auto">
          Honest, unfiltered reactions. We couldn’t script it if we tried.
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {quotes.map((q, i) => (
            <QuoteCard key={i} quote={q.quote} author={q.author} />
          ))}
        </div>
      </div>
    </section>
  )
}
