import { useState } from 'react'
import { PiEye, PiEyeClosed } from 'react-icons/pi'
import { toast } from 'sonner'

import * as Form from '../components/Form'
import * as Input from '../components/Input'

import { Button } from '../components/Button'
import { ButtonText } from '../components/ButtonText'
import { Logo } from '../components/Logo'
import { ThemeToggler } from '../components/ThemeToggler'
import { useAuth } from '../hooks/auth'

export function SignIn() {
  const { signIn } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isVisible, setIsVisible] = useState(false)
  const [isRunning, setIsRunning] = useState(false)

  function handleSignIn() {
    setIsRunning(true)

    if (!email || !password) {
      setIsRunning(false)
      return toast.error('Preencha todos os campos!')
    }

    signIn({ email, password })

    setIsRunning(false)
  }

  function handlePasswordView() {
    setIsVisible(!isVisible)
  }
  return (
    <div className="md:grid-cols-auth h-screen md:grid">
      <div className="flex h-full flex-col items-center justify-center gap-12 p-12">
        <Logo />

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-center text-4xl font-bold text-foreground">
            Seja bem-vindo!
          </h1>
          <p className="text-center text-sm text-muted-foreground">
            Por favor, faça login para continuar.
          </p>
        </div>

        <Form.Root>
          <Form.Field>
            <Form.Label htmlFor="email">Endereço de e-mail</Form.Label>
            <Input.Root>
              <Input.Control
                id="email"
                type="text"
                placeholder="Insira seu e-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Input.Root>
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="password">Senha</Form.Label>
            <Input.Root>
              <Input.Control
                id="password"
                type={isVisible ? 'text' : 'password'}
                placeholder="Insira sua senha"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input.Prefix className="cursor-pointer">
                {password ? (
                  isVisible ? (
                    <PiEye size={18} onClick={handlePasswordView} />
                  ) : (
                    <PiEyeClosed size={18} onClick={handlePasswordView} />
                  )
                ) : (
                  ''
                )}
              </Input.Prefix>
            </Input.Root>
          </Form.Field>

          <ButtonText>Esqueci minha senha</ButtonText>

          <Button disabled={isRunning} form="signup" onClick={handleSignIn}>
            Continuar
          </Button>

          <span className="flex flex-wrap items-center justify-center gap-1 text-sm text-card-foreground">
            Ainda não tem uma conta?{' '}
            <ButtonText to="/signup">Crie agora!</ButtonText>
          </span>
        </Form.Root>
      </div>

      <div className="bg-auth-banner hidden h-screen bg-cover bg-center md:block" />

      <ThemeToggler />
    </div>
  )
}
