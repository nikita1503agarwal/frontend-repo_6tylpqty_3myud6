import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Colorful gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/30 to-slate-950"></div>
        <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-gradient-to-tr from-pink-500/30 via-violet-500/30 to-cyan-400/30 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Full‑service landing page készítés magánszemélyeknek és cégeknek
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
          >
            Látványos, gyors és konvertáló landing page-ek
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="mt-4 text-lg text-slate-200"
          >
            Tervezés, szövegírás, fejlesztés és analitika – mindent egyben, hogy a látogatóidból ügyfelek legyenek.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center rounded-xl bg-white px-6 py-3 text-slate-900 font-semibold shadow-xl shadow-white/20"
            >
              Kérek árajánlatot
            </motion.a>
            <a href="#showcase" className="text-white/80 hover:text-white">Referenciák megtekintése</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
