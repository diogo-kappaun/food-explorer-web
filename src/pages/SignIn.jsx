import { PiEnvelopeSimple, PiEye, PiLockKey } from 'react-icons/pi'

import * as Form from '../components/Form'
import * as Input from '../components/Input'

import { Button } from '../components/Button'
import { ButtonText } from '../components/ButtonText'
import { Logo } from '../components/Logo'
import { ThemeToggler } from '../components/ThemeToggler'

export function SignIn() {
  return (
    <div className="h-screen">
      <img src="" alt="" />
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
              <Input.Prefix>
                <PiEnvelopeSimple size={16} />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="text"
                placeholder="Insira seu e-mail"
              />
            </Input.Root>
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="password">Senha</Form.Label>
            <Input.Root>
              <Input.Prefix>
                <PiLockKey size={16} />
              </Input.Prefix>
              <Input.Control
                id="password"
                type="password"
                placeholder="Insira sua senha"
              />
              <Input.Prefix>
                <PiEye size={16} />
              </Input.Prefix>
            </Input.Root>
          </Form.Field>

          <ButtonText>Esqueci minha senha</ButtonText>

          <Button>Continuar</Button>

          <span className="flex flex-wrap items-center justify-center gap-1 text-sm text-card-foreground">
            Ainda não tem uma conta?{' '}
            <ButtonText to="/signup">Crie agora!</ButtonText>
          </span>
        </Form.Root>
      </div>

      <ThemeToggler />
    </div>
  )
}
