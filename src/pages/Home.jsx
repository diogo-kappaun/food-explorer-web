import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Section } from '../components/Section'
import { Sidebar } from '../components/Sidebar'

export function Home() {
  return (
    <Container>
      <Header />
      <Sidebar />

      <Section>
        <h1>Home!</h1>
      </Section>
    </Container>
  )
}
