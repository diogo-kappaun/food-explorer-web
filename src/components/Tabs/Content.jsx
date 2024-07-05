import * as Tabs from '@radix-ui/react-tabs'

export function TabContent({ value, children }) {
  return (
    <Tabs.Content value={value} className="h-full py-6 outline-none">
      {children}
    </Tabs.Content>
  )
}
