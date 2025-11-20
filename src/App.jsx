import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Process from './components/Process'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Decorative global background */}
      <div className="fixed inset-0 -z-0 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_0%,rgba(99,102,241,0.12),transparent),radial-gradient(800px_400px_at_90%_10%,rgba(236,72,153,0.12),transparent)]" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <Process />
      <Showcase />
      <CTA />

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-pink-500 via-violet-500 to-cyan-400"></div>
            <p className="text-sm text-white/70">© {new Date().getFullYear()} Landing Factory – Minden jog fenntartva.</p>
          </div>
          <div className="text-sm text-white/60">
            Készen állsz egy ütős landingre? <a href="#contact" className="text-white hover:underline">Beszéljünk</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
