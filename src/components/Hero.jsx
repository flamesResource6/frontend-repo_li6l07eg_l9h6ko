import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Dark blue gradient background with subtle noise */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(59,130,246,0.35),transparent),linear-gradient(180deg,#0a1437, #0b1a3f_60%,#0c1534)]"></div>
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />

      {/* Spline Cover (full width / full height of hero) */}
      <div className="relative h-[70vh] md:h-[78vh]">
        <Spline scene="https://prod.spline.design/xW-uaUprkPUPPfRw/scene.splinecode" style={{ width: '100%', height: '100%' }} />

        {/* Header sits above spline via separate component in App */}

        {/* Centered Headline */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="px-6 text-center">
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight max-w-4xl mx-auto leading-[1.05]">
              Something smarter is coming to compliance.
            </h1>
            <div className="mt-8 flex items-center justify-center">
              <div id="waitlist" className="w-full max-w-xl">
                <form className="flex gap-3">
                  <input
                    type="email"
                    placeholder="your email"
                    className="flex-1 px-4 md:px-5 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/60 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                  />
                  <button
                    type="submit"
                    className="px-5 md:px-6 py-3 rounded-full text-white backdrop-blur-xl bg-white/10 border border-white/15 hover:bg-white/15 transition-colors shadow-[0_0_24px_rgba(99,102,241,0.35)]"
                  >
                    Join the waitlist
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Soft glow behind headline */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-blue-500/20 blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}
