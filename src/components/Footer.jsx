import { Linkedin } from 'lucide-react'

function CTA() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-slate-900/10 rounded-2xl p-8 md:p-10 text-center shadow-[0_10px_40px_rgba(2,6,23,0.06)]">
      <h4 className="text-xl md:text-2xl font-medium text-slate-900 mb-4">Compliance is evolving. Don’t be the company still doing it by hand.</h4>
      <button className="px-5 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_10px_30px_rgba(99,102,241,0.25)]">Request demo</button>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#0b1435] text-white pt-16">
      <div className="max-w-6xl mx-auto px-6">
        <CTA />

        <div className="my-12 h-px bg-white/10" />

        <div className="grid md:grid-cols-[auto_1fr_auto] gap-8 items-start pb-12">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-blue-500 to-indigo-600"></div>
            <span className="font-semibold">Backbone</span>
          </div>
          <p className="text-white/70 max-w-2xl">
            While others are still chasing spreadsheets, Backbone is already powering the next generation of proactive, intelligent compliance.
          </p>
          <a href="#" className="text-white/80 hover:text-white inline-flex items-center gap-2"><Linkedin size={18}/> LinkedIn</a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-sm text-white/60 pb-12">
          <div>123 Example Street, Suite 400, City, Country</div>
          <div className="md:text-center">© {new Date().getFullYear()} Backbone Inc.</div>
          <div className="md:text-right space-x-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
