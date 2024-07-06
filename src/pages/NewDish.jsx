import { useState } from 'react'
import { PiCamera } from 'react-icons/pi'
import { toast } from 'sonner'

import { BackButton } from '../components/BackButton'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Section } from '../components/Section'
import { Sidebar } from '../components/Sidebar'
import { Title } from '../components/Title'

import * as Form from '../components/Form'
import * as Input from '../components/Input'
import { Separator } from '../components/Separator'

export function NewDish() {
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [ingredients, setIngredients] = useState([])

  function handleChangeImage(e) {
    const file = e.target.files[0]
    const maxSize = 2 * 1024 * 1024

    if (file.size > maxSize) {
      return toast.error('A imagem excede o limite de 2 MB.', {
        description:
          '👉🏻 Escolha uma imagem menor ou comprima-a antes de enviar',
      })
    }

    if (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        setImagePreview(e.target.result)
      }

      reader.readAsDataURL(file)
      setImageFile(file)
    }
  }

  return (
    <Container>
      <Header noInput />
      <Sidebar />

      <Section>
        <BackButton />

        <Title>Novo prato</Title>

        <Separator />

        <Form.Root className="mt-6 space-y-6">
          <div className="flex gap-4">
            {imagePreview ? (
              <img
                className="aspect-auto h-20 w-20 rounded-full bg-background lg:h-28 lg:w-28"
                src={imagePreview}
                alt="Imagem de um produto"
              />
            ) : (
              <div className="aspect-auto h-20 w-20 rounded-full border bg-muted shadow-sm lg:h-28 lg:w-28"></div>
            )}
            <label
              htmlFor="avatarFile"
              className="flex h-28 flex-1 cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-input p-4 text-sm text-muted-foreground shadow-sm"
            >
              <PiCamera size={20} />
              <span>Clique e carregue</span>
              <span className="text-xs">JPG, PNG e WEBP</span>
            </label>
            <input
              id="avatarFile"
              type="file"
              className="sr-only"
              onChange={handleChangeImage}
              accept="image/jpeg, image/png, image/webp"
            />
          </div>

          <Form.Field>
            <Form.Label htmlFor="dishName">Nome do prato</Form.Label>
            <Input.Root>
              <Input.Control
                id="dishName"
                type="text"
                value={name}
                placeholder="Insira o nome do prato"
                onChange={(e) => setName(e.target.value)}
              />
            </Input.Root>
          </Form.Field>
        </Form.Root>
      </Section>
    </Container>
  )
}
