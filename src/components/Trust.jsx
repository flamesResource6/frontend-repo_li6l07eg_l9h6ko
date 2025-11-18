export default function Trust() {
  const logos = [
    'https://dummyimage.com/140x40/ffffff/000000&text=ACME',
    'https://dummyimage.com/140x40/ffffff/000000&text=NOVA',
    'https://dummyimage.com/140x40/ffffff/000000&text=PRIME'
  ]

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-14 md:py-16">
        <p className="text-center text-slate-600 mb-8">Trusted by pioneering QA teams at:</p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-80">
          {logos.map((src, i) => (
            <img key={i} src={src} alt="logo" className="h-8 object-contain" />
          ))}
        </div>
      </div>
    </section>
  )
}
