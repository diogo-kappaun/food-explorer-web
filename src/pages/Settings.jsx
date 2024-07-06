import { BackButton } from '../components/BackButton'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { SettingsTabs } from '../components/Tabs'

export function Settings() {
  return (
    <div className="min-h-screen bg-background text-foreground lg:grid lg:grid-cols-page lg:grid-rows-page">
      <Header noInput />
      <Sidebar />

      <div className="px-8 pb-12 pt-24 lg:pt-8">
        <BackButton />

        <h1 className="mt-3 text-3xl font-medium">Configurações</h1>

        <SettingsTabs />
      </div>
    </div>
  )
}
