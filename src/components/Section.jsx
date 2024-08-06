import { motion } from 'framer-motion'

export function Section({ children }) {
  return (
    <div className="h-full overflow-auto px-8 pt-24 lg:pt-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0, ease: [0, 0.71, 0.2, 1.01] }}
        className="mx-auto w-page space-y-6 pb-12"
      >
        {children}
      </motion.div>
    </div>
  )
}
