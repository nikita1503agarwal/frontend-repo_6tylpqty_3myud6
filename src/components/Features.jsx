import { motion } from 'framer-motion'
import { Rocket, Zap, Palette, LineChart } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Gyors indulás',
    desc: 'Hetek helyett napok alatt készre fejlesztett landing page.'
  },
  {
    icon: Zap,
    title: 'Villámgyors betöltés',
    desc: 'Vite + React + Tailwind, optimalizált képek és kód.'
  },
  {
    icon: Palette,
    title: 'Prémium design',
    desc: 'Modern tipográfia, 3D háttér és mikorészletek.'
  },
  {
    icon: LineChart,
    title: 'Konverzió fókusz',
    desc: 'A/B tesztelhető szekciók és mérhető eredmények.'
  }
]

function Features() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_10%,rgba(147,51,234,0.15),transparent),radial-gradient(600px_300px_at_80%_20%,rgba(56,189,248,0.12),transparent)]"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl sm:text-5xl font-bold text-white"
        >
          Miért velem dolgozz?
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gradient-to-br from-pink-500/30 via-violet-500/30 to-cyan-400/30 p-2">
                  <f.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              </div>
              <p className="mt-3 text-slate-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
