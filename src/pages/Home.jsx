import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

export function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground lg:grid lg:grid-cols-page lg:grid-rows-page">
      <Header />
      <Sidebar />

      <div>
        <h1>Home!</h1>
      </div>
    </div>
  )
}
