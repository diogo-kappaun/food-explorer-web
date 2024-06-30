import { useState } from 'react'

import { Avatar } from '../../pages/Avatar'
import { Person } from '../../pages/Person'

import * as Tabs from '@radix-ui/react-tabs'

import { TabContent } from './Content'
import { TabItem } from './Item'

export function SettingsTabs() {
  const [activeTab, setActiveTab] = useState('tab1')

  return (
    <Tabs.Root
      value={activeTab}
      onValueChange={setActiveTab}
      className="flex h-full flex-col"
    >
      <Tabs.List className="mt-6 flex w-full items-center gap-3 border-b text-sm">
        <TabItem
          value="tab1"
          title="Dados Pessoais"
          isActive={activeTab === 'tab1'}
        />
        <TabItem value="tab2" title="Avatar" isActive={activeTab === 'tab2'} />
      </Tabs.List>

      <TabContent value="tab1">
        <Person />
      </TabContent>
      <TabContent value="tab2">
        <Avatar />
      </TabContent>
    </Tabs.Root>
  )
}
