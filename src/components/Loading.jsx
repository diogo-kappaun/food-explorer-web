import { motion } from 'framer-motion'

export function Loading({ isLoading = false }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-center justify-center bg-glass shadow-glass backdrop-blur-sm"
    >
      <motion.svg
        width="88"
        height="50"
        viewBox="0 0 22 25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M10.2304 0.57735C10.8492 0.220084 11.6116 0.220085 12.2304 0.57735L20.8881 5.57592C21.5069 5.93318 21.8881 6.59344 21.8881 7.30797V17.3051C21.8881 18.0196 21.5069 18.6799 20.8881 19.0372L12.2304 24.0357C11.6116 24.393 10.8492 24.393 10.2304 24.0357L1.57259 19.0372C0.953789 18.6799 0.572592 18.0196 0.572592 17.3051V7.30797C0.572592 6.59344 0.95379 5.93318 1.57259 5.57592L10.2304 0.57735Z"
          fill="#ff7f0f"
          animate={{
            opacity: [0, 1, 0],
            rotate: [180, 360, 180],
          }}
          transition={{
            duration: 4,
            ease: 'easeInOut',
            repeat: Infinity,
            times: [0, 0.8, 1],
            repeatDelay: 1,
          }}
        />
      </motion.svg>

      <motion.p
        className="mt-2"
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 4,
          ease: 'easeInOut',
          repeat: Infinity,
          times: [0, 0.8, 1],
          repeatDelay: 1,
        }}
      >
        {isLoading ? 'Processando...' : 'Carregando...'}
      </motion.p>
    </motion.div>
  )
}
