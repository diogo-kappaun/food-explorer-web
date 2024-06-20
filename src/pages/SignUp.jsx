import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { api } from '../services/api'

import { PiEye, PiEyeClosed } from 'react-icons/pi'

import * as Form from '../components/Form'
import * as Input from '../components/Input'

import { Button } from '../components/Button'
import { ButtonText } from '../components/ButtonText'
import { Logo } from '../components/Logo'
import { ThemeToggler } from '../components/ThemeToggler'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isVisible, setIsVisible] = useState(false)
  const [isCreating, setIsCreating] = useState(false)

  const navigate = useNavigate()

  const regexName = /^[a-zA-ZÀ-ÿ' -]+$/
  const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  function handleSignUp() {
    setIsCreating(true)
    if (!name || !email || !password) {
      setIsCreating(false)
      return toast.error('Preencha todos os campos!')
    }

    if (name.length < 2 || name.length > 50) {
      setIsCreating(false)
      return toast.error('O nome deve ter entre 2 a 50 caracteres!')
    }

    if (!regexName.test(name)) {
      setIsCreating(false)
      return toast.error(
        'O nome deve conter apenas letras, espaços, hífens e apósotolos!',
        {
          duration: 5000,
          description: '👉🏻 Exemplo: Food Explorer',
        },
      )
    }

    if (!regexMail.test(email)) {
      setIsCreating(false)
      return toast.error('O e-mail digitado possui um formato inválido!', {
        duration: 5000,
        description: '👉🏻 Exemplo: user@foodexplorer.com',
      })
    }

    if (password.length < 8) {
      setIsCreating(false)
      return toast.error('A senha deve conter no mínimo 8+ caracteres!')
    }

    if (!regexPassword.test(password)) {
      setIsCreating(false)
      return toast.error(
        'A senha deve conter pelo menos uma letra minúscula, maiúscula, um dígito (0-9) e caracteres especiais (@$!%*?&).',
        {
          duration: 5000,
          description: '👉🏻 Exemplo: FoodExeplorer123!',
        },
      )
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        toast.success('Usuário cadastrado com sucesso!')
        navigate('/')
        setIsCreating(false)
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message)
          setIsCreating(false)
        } else {
          toast.error('Não foi possível realizar o cadastro!')
          setIsCreating(false)
        }
      })
  }

  function handlePasswordView() {
    setIsVisible(!isVisible)
  }

  return (
    <div className="h-screen">
      <img src="" alt="" />
      <div className="flex h-full flex-col items-center justify-center gap-12 p-12">
        <Logo />

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-center text-4xl font-bold text-foreground">
            Crie sua conta
          </h1>
          <p className="max-w-60 text-center text-sm text-muted-foreground">
            Descubra um mundo de sabores e experiências culinárias!
          </p>
        </div>

        <Form.Root id="signup">
          <Form.Field>
            <Form.Label htmlFor="name">Nome completo</Form.Label>
            <Input.Root>
              <Input.Control
                id="name"
                type="text"
                placeholder="Insira seu nome"
                onChange={(e) => setName(e.target.value)}
              />
            </Input.Root>
          </Form.Field>

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

          <Button
            disabled={isCreating}
            className="mt-4"
            form="signup"
            type="button"
            onClick={handleSignUp}
          >
            Cadastrar
          </Button>

          <span className="flex flex-wrap items-center justify-center gap-1 text-sm text-card-foreground">
            Já tem uma conta? <ButtonText to="/">Entre agora!</ButtonText>
          </span>
        </Form.Root>
      </div>

      <ThemeToggler />
    </div>
  )
}
