function GlassCard({ children, className = '' }) {
  return (
    <div className={`relative rounded-2xl border border-slate-900/10 bg-white/60 backdrop-blur-xl shadow-[0_10px_40px_rgba(2,6,23,0.06)] ${className}`}>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/50 to-white/30 pointer-events-none" />
      <div className="relative p-6 md:p-8">{children}</div>
    </div>
  )
}

export default function Value() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Finally a backbone for compliance.</h2>
          <p className="text-slate-600 leading-relaxed">
            Sure, every tool out there says they’ll save you time. We do too, but here’s the difference: once you’ve got that time back, Backbone helps you do something smarter with it. We let you ask the big questions and get straight answers, so you can move your business forward instead of just keeping it running.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {/* Variation 1: Prompt → Result */}
          <GlassCard>
            <div className="space-y-4">
              <div className="text-sm text-slate-500">Prompt</div>
              <div className="flex items-center gap-3">
                <div className="px-3 py-2 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-700">Are we ready for India?</div>
              </div>
              <div className="pt-2">
                <div className="text-sm text-slate-500">Answer</div>
                <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1.5 text-sm shadow-[0_8px_30px_rgba(99,102,241,0.25)]">
                  <span>2 standards met</span>
                  <span className="opacity-70">•</span>
                  <span>1 gap to close</span>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Variation 2: Command Center */}
          <GlassCard className="bg-white/70">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <div className="text-slate-700 font-medium">Command Center</div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.6)]"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2 rounded-xl p-4 bg-white border border-slate-900/10 shadow-sm">
                  <div className="text-xs text-slate-500 mb-2">Live Readiness</div>
                  <div className="h-24 rounded-lg bg-gradient-to-br from-indigo-50 to-blue-50"></div>
                </div>
                <div className="rounded-xl p-4 bg-white border border-slate-900/10 shadow-sm">
                  <div className="text-xs text-slate-500 mb-2">Alerts</div>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Labeling update required</li>
                    <li>• Supplier certificate expiring</li>
                  </ul>
                </div>
                <div className="rounded-xl p-4 bg-white border border-slate-900/10 shadow-sm">
                  <div className="text-xs text-slate-500 mb-2">Markets</div>
                  <div className="h-14 rounded-lg bg-gradient-to-r from-blue-100 to-indigo-100"></div>
                </div>
                <div className="col-span-2 rounded-xl p-4 bg-white border border-slate-900/10 shadow-sm">
                  <div className="text-xs text-slate-500 mb-2">Actions</div>
                  <div className="h-14 rounded-lg bg-white"></div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
