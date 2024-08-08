import { useState } from 'react'
import { PiEye, PiEyeClosed } from 'react-icons/pi'
import { toast } from 'sonner'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import * as Form from '../../components/Form'
import * as Input from '../../components/Input'

import { Button } from '../../components/Button'
import { Separator } from '../../components/Separator'

export function Person() {
  const { user } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const [newIsVisible, setNewIsVisible] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const regexName = /^[a-zA-ZÀ-ÿ' -]+$/
  const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  async function handleUpdate() {
    try {
      setIsLoading(true)
      if (name) {
        if (name.length < 2 || name.length > 50) {
          return toast.error('O nome deve ter entre 2 a 50 caracteres!')
        }

        if (!regexName.test(name)) {
          return toast.error(
            'O nome deve conter apenas letras, espaços, hífens e apósotolos!',
            {
              duration: 5000,
              description: '👉🏻 Exemplo: Food Explorer',
            },
          )
        }
      }

      if (email) {
        if (!regexMail.test(email)) {
          return toast.error('O e-mail digitado possui um formato inválido!', {
            duration: 5000,
            description: '👉🏻 Exemplo: user@foodexplorer.com',
          })
        }
      }

      if (currentPassword && !newPassword) {
        return toast.error('Nova senha não informada!', {
          description: '👉🏻 Infome sua nova senha',
        })
      }

      if (!currentPassword && newPassword) {
        return toast.error('Senha atual não informada!', {
          description: '👉🏻 Infome sua senha atual',
        })
      }

      if (currentPassword && newPassword) {
        if (newPassword.length < 8) {
          return toast.error('A senha deve conter no mínimo 8+ caracteres!')
        }

        if (!regexPassword.test(newPassword)) {
          return toast.error(
            'A senha deve conter pelo menos uma letra minúscula, maiúscula, um dígito (0-9) e caracteres especiais (@$!%*?&).',
            {
              duration: 5000,
              description: '👉🏻 Exemplo: FoodExeplorer123!',
            },
          )
        }
      }
      const update = {
        name,
        email,
        currentPassword,
        newPassword,
      }

      const userUpdate = Object.assign(user, update)

      if (name || email || (newPassword && currentPassword)) {
        await api.put('/users', userUpdate)

        return toast.success('Usuário atualizado com sucesso!')
      } else {
        return toast.error('Preencha ao menos um campo!')
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message)
      } else {
        toast.error('Não foi possível atualizar o perfil!')
      }
    } finally {
      setIsLoading(false)
    }
  }

  function onCancel() {
    setName(user.name)
    setEmail(user.email)
    setCurrentPassword('')
    setNewPassword('')
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-medium">Dados pessoais</h2>
          <p className="text-sm text-muted-foreground">
            Atualize seus dados aqui.
          </p>
        </div>

        <div className="flex gap-3">
          <Button variant="secondary" type="button" onClick={onCancel}>
            Cancelar
          </Button>
          <Button
            disabled={isLoading}
            form="update"
            type="button"
            onClick={handleUpdate}
          >
            Salvar
          </Button>
        </div>
      </div>

      <Separator />

      <Form.Root id="update">
        <Form.Field>
          <Form.Label htmlFor="name">Nome completo</Form.Label>
          <Input.Root>
            <Input.Control
              id="name"
              type="text"
              value={name}
              placeholder="Insira seu nome completo"
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
              value={email}
              placeholder="Insira seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Input.Root>
        </Form.Field>

        <Form.Field>
          <Form.Label htmlFor="currentPassword">Senha atual</Form.Label>
          <Input.Root>
            <Input.Control
              id="currentPassword"
              type={isVisible ? 'text' : 'password'}
              value={currentPassword}
              placeholder="Insira sua senha atual"
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <Input.Prefix className="cursor-pointer">
              {currentPassword ? (
                isVisible ? (
                  <PiEye size={18} onClick={(e) => setIsVisible(!isVisible)} />
                ) : (
                  <PiEyeClosed
                    size={18}
                    onClick={(e) => setIsVisible(!isVisible)}
                  />
                )
              ) : (
                ''
              )}
            </Input.Prefix>
          </Input.Root>
        </Form.Field>

        <Form.Field>
          <Form.Label htmlFor="newPassword">Nova senha</Form.Label>
          <Input.Root>
            <Input.Control
              id="newPassword"
              type={newIsVisible ? 'text' : 'password'}
              value={newPassword}
              placeholder="Insira sua nova senha"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <Input.Prefix className="cursor-pointer">
              {newPassword ? (
                newIsVisible ? (
                  <PiEye
                    size={18}
                    onClick={(e) => setNewIsVisible(!newIsVisible)}
                  />
                ) : (
                  <PiEyeClosed
                    size={18}
                    onClick={(e) => setNewIsVisible(!newIsVisible)}
                  />
                )
              ) : (
                ''
              )}
            </Input.Prefix>
          </Input.Root>
        </Form.Field>
      </Form.Root>
    </div>
  )
}
