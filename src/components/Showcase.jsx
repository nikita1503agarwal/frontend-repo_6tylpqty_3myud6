import { motion } from 'framer-motion'

const works = [
  { title: 'Tech Startup', tags: ['SaaS', 'Signup', 'Pricing'] },
  { title: 'Local Service', tags: ['Foglalás', 'Kapcsolat', 'Gyakori kérdések'] },
  { title: 'E-kereskedelem', tags: ['Termék', 'Kosár', 'Fizetés'] }
]

function Showcase() {
  return (
    <section id="showcase" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl sm:text-5xl font-bold text-white"
        >
          Referenciák
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {works.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(300px_150px_at_center,rgba(59,130,246,0.25),transparent)]"></div>
              <div className="relative">
                <div className="text-2xl font-bold text-white">{w.title}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {w.tags.map((t, idx) => (
                    <span key={idx} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">{t}</span>
                  ))}
                </div>
                <p className="mt-4 text-slate-300">Mutatok példákat, hogyan fordítottam a látogatókat ügyfelekké.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase
