import { motion } from 'framer-motion'

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#hero" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-pink-500 via-violet-500 to-cyan-400 shadow-lg"></div>
              <span className="text-white font-semibold tracking-tight">Landing Factory</span>
            </a>
            <div className="hidden sm:flex items-center gap-6 text-sm">
              <a href="#features" className="text-slate-300 hover:text-white transition">Előnyök</a>
              <a href="#process" className="text-slate-300 hover:text-white transition">Folyamat</a>
              <a href="#showcase" className="text-slate-300 hover:text-white transition">Referenciák</a>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center rounded-xl bg-white/90 px-4 py-2 text-slate-900 font-semibold shadow-lg shadow-white/10 hover:bg-white"
            >
              Kapcsolat
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
