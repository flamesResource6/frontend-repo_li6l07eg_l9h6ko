import Header from './components/Header'
import Hero from './components/Hero'
import Trust from './components/Trust'
import Value from './components/Value'
import SocialProof from './components/SocialProof'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header over hero gradient */}
      <div className="relative">
        <Hero />
        <div className="absolute top-0 left-0 right-0">
          <Header />
        </div>
      </div>

      <Trust />
      <Value />
      <SocialProof />
      <Team />
      <Footer />
    </div>
  )
}

export default App
