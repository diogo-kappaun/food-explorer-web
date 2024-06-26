import { motion } from 'framer-motion'

import * as Tabs from '@radix-ui/react-tabs'

export function TabItem({ title, value, isActive = false }) {
  return (
    <Tabs.Trigger value={value} className="relative px-1 pb-3 font-medium">
      <span>{title}</span>

      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-primary"
        />
      )}
    </Tabs.Trigger>
  )
}
