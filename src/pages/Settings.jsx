import { BackButton } from '../components/BackButton'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Section } from '../components/Section'
import { Sidebar } from '../components/Sidebar'
import { SettingsTabs } from '../components/Tabs'
import { Title } from '../components/Title'

export function Settings() {
  return (
    <Container>
      <Header noInput />
      <Sidebar />

      <Section>
        <BackButton />

        <Title>Configurações</Title>

        <SettingsTabs />
      </Section>
    </Container>
  )
}
