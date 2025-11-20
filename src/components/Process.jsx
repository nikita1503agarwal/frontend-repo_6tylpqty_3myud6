import { motion } from 'framer-motion'

const steps = [
  { title: 'Feltérképezés', desc: 'Célok, célcsoport, üzenetek és pozicionálás.' },
  { title: 'Wireframe', desc: 'Szerkezet és tartalom validálása.' },
  { title: 'Design', desc: 'Vizualitás, animációk és arculat.' },
  { title: 'Fejlesztés', desc: 'Reszponzív, gyors és SEO-barát kód.' },
  { title: 'Mérés', desc: 'Analitika, A/B tesztek, optimalizálás.' }
]

function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(400px_200px_at_80%_80%,rgba(34,197,94,0.15),transparent)]"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl sm:text-5xl font-bold text-white"
        >
          Így dolgozom
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/90 text-slate-900 font-bold shadow">{i+1}</div>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-3 text-slate-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
