import { motion } from 'framer-motion'

function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(400px_200px_at_20%_80%,rgba(59,130,246,0.15),transparent)]"></div>
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="mx-auto max-w-xl text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              Kezdjük el a projekted!
            </motion.h3>
            <p className="mt-3 text-slate-300">Írj pár mondatot a céljaidról és pár napon belül kapsz egy kézzelfogható koncepciót.</p>

            <form className="mt-8 grid grid-cols-1 gap-4">
              <input className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/30" placeholder="Név" />
              <input className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/30" placeholder="Email" />
              <textarea rows="4" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/30" placeholder="Miben segíthetek?" />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-xl shadow-white/20"
              >
                Küldés
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
