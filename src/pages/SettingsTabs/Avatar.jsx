import { useState } from 'react'
import { PiCamera } from 'react-icons/pi'
import { toast } from 'sonner'

import placeholder from '../../assets/placeholder.png'

import { Button } from '../../components/Button'

import { useAuth } from '../../hooks/auth'

export function Avatar() {
  const { updateAvatar, user } = useAuth()

  const [avatarFile, setAvatarFile] = useState(null)
  const [isUpdating, setIsUpdating] = useState(false)

  const avatarUrl = user.avatar_id
    ? `https://res.cloudinary.com/diogofoodexplorer/image/upload/${user.avatar_id}`
    : `${placeholder}`

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    const maxSize = 2 * 1024 * 1024

    if (file.size > maxSize) {
      return toast.error('A imagem excede o limite de 2 MB.', {
        description:
          '👉🏻 Escolha uma imagem menor ou comprima-a antes de enviar',
      })
    }

    setAvatarFile(file)
  }

  async function handleSaveAvatar() {
    setIsUpdating(true)

    try {
      await updateAvatar({ avatarFile })
    } finally {
      toast.success('Imagem de perfil alterada com sucesso!')
      setAvatarFile(null)
      setIsUpdating(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-medium">Avatar de usuário</h2>
          <p className="text-sm text-muted-foreground">
            Atualize sua foto de perfil aqui.
          </p>
        </div>

        <div className="flex gap-3">
          <Button
            disabled={avatarFile ? isUpdating : true}
            form="update"
            type="button"
            onClick={handleSaveAvatar}
          >
            Salvar
          </Button>
        </div>
      </div>

      <div className="flex gap-4">
        <img
          className="aspect-auto h-20 w-20 rounded-full bg-background"
          src={avatarUrl}
          alt="Imagem de perfil"
        />

        <label
          htmlFor="avatarFile"
          className="flex h-max flex-1 cursor-pointer flex-col items-center gap-2 rounded-md border border-input p-4 text-sm text-muted-foreground shadow-sm"
        >
          <PiCamera size={20} />
          <span>Clique e carregue</span>
          <span className="text-xs">JPG, PNG e WEBP</span>
        </label>
        <input
          id="avatarFile"
          type="file"
          className="sr-only"
          onChange={handleChangeAvatar}
          accept="image/jpeg, image/png, image/webp"
        />
      </div>
    </div>
  )
}
