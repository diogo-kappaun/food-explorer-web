import { motion } from 'framer-motion'

export function Loading() {
  return (
    <div className="absolute left-2/4 top-2/4 flex h-20 w-20 -translate-x-2/4 -translate-y-2/4 items-center justify-center">
      <motion.svg
        width="44"
        height="50"
        viewBox="0 0 22 25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M10.2304 0.57735C10.8492 0.220084 11.6116 0.220085 12.2304 0.57735L20.8881 5.57592C21.5069 5.93318 21.8881 6.59344 21.8881 7.30797V17.3051C21.8881 18.0196 21.5069 18.6799 20.8881 19.0372L12.2304 24.0357C11.6116 24.393 10.8492 24.393 10.2304 24.0357L1.57259 19.0372C0.953789 18.6799 0.572592 18.0196 0.572592 17.3051V7.30797C0.572592 6.59344 0.95379 5.93318 1.57259 5.57592L10.2304 0.57735Z"
          fill="#ff7f0f"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: 180 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 4,
          }}
        />
      </motion.svg>
    </div>
  )
}
