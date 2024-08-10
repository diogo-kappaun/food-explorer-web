import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { Logo } from '../components/Logo'

export function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-6 px-8">
      <Logo />
      <span className="text-6xl font-bold">404</span>
      <h2 className="text-lg">Página não encontrada!</h2>
      <Button className="w-max" onClick={() => navigate('/')}>
        Voltar para o Início
      </Button>
    </div>
  )
}
