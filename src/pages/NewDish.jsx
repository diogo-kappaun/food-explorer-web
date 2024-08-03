import { useState } from 'react'
import { PiCamera, PiPlus } from 'react-icons/pi'
import { toast } from 'sonner'
import { api } from '../services/api'

import { BackButton } from '../components/BackButton'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { NewIngredient } from '../components/NewIngredient'
import { Section } from '../components/Section'
import { Select } from '../components/Select'
import { SelectItem } from '../components/Select/Item'
import { Separator } from '../components/Separator'
import { Sidebar } from '../components/Sidebar'
import { Title } from '../components/Title'

import * as Form from '../components/Form'
import * as Input from '../components/Input'

export function NewDish() {
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [isCreating, setIsCreating] = useState(false)

  const regexPrice =
    /^\d{1,3}(?:\.\d{3})*(?:,\d{2})?$|^\d{1,3}(?:,\d{3})*(?:\.\d{2})?$/

  function convertPriceToBack(priceToConvert) {
    priceToConvert = priceToConvert.replace(/\./g, '')
    priceToConvert = priceToConvert.replace(',', '.')
    return priceToConvert
  }

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

  function handleAddIngredient() {
    if (newIngredient === '') {
      return toast.error('Nenhum novo ingrediente informado!')
    }

    if (ingredients.includes(newIngredient)) {
      setNewIngredient('')
      return toast.error('Ingrediente já adicionado!')
    }

    setIngredients((prevState) => [...prevState, newIngredient])
    setNewIngredient('')
  }

  function handleRemoveIngredient(ingredientDeleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => {
        return ingredient !== ingredientDeleted
      }),
    )
  }

  async function handleCreateDish() {
    setIsCreating(true)

    if (
      !name ||
      !description ||
      !price ||
      !category ||
      ingredients.length === 0 ||
      !imageFile
    ) {
      setIsCreating(false)
      return toast.error('Preencha todos os campos!')
    }

    if (newIngredient) {
      setIsCreating(true)
      return toast.error(
        'Ingrediente a ser adicionado. Se não for adicionar, apague-o!',
      )
    }

    if (!regexPrice.test(price)) {
      setIsCreating(false)
      return toast.error('Formato de preço não válido!', {
        duration: 5000,
        description: '👉🏻 Exemplo: 59,07 ou 1.590,70',
      })
    }

    const formattedPrice = convertPriceToBack(price)

    const fileUploadForm = new FormData()
    fileUploadForm.append('image', imageFile)

    api
      .post('/dishes', {
        name,
        description,
        price: formattedPrice,
        category,
        ingredients,
      })
      .then((response) => {
        api
          .patch(`/dishes/image?id=${response.data}`, fileUploadForm)
          .then(() => {
            setIsCreating(false)
            handleCancel()
            return toast.success('Prato criado com sucesso!')
          })
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message)
          setIsCreating(false)
        } else {
          toast.error('Não foi possível adicionar o prato!')
          setIsCreating(false)
        }
      })
  }

  function handleCancel() {
    setName('')
    setDescription('')
    setPrice('')
    setCategory('')
    setIngredients([])
    setImageFile(null)
    setImagePreview(null)
  }

  return (
    <Container>
      <Header />
      <Sidebar />

      <Section>
        <BackButton />

        <Title>Novo prato</Title>

        <Separator />

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-medium">Criar o {name || 'prato'}</h2>
            <p className="text-sm text-muted-foreground">
              Crie um novo prato aqui.
            </p>
          </div>

          <div className="flex gap-3">
            <Button variant="secondary" type="button" onClick={handleCancel}>
              Cancelar
            </Button>
            <Button
              disabled={isCreating}
              form="newDish"
              type="button"
              onClick={handleCreateDish}
            >
              Criar
            </Button>
          </div>
        </div>

        <Separator />

        <Form.Root id="newDish" className="mt-6 space-y-6">
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
            <Form.Label htmlFor="dishName">Nome</Form.Label>
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

          <div className="flex flex-col gap-6 lg:flex-row">
            <Form.Field>
              <Form.Label htmlFor="dishCategory">Categoria</Form.Label>
              <Select
                id="dishCategory"
                className="w-full"
                placeholder="Selecione uma categoria"
                value={category || ''}
                onValueChange={(e) => setCategory(e)}
              >
                <SelectItem value="combo" text="Combo" />
                <SelectItem value="burger" text="Hambúrguer" />
                <SelectItem value="dessert" text="Sobremesa" />
                <SelectItem value="drink" text="Bebida" />
              </Select>
            </Form.Field>

            <Form.Field>
              <Form.Label htmlFor="dishPrice">Preço</Form.Label>
              <Input.Root>
                <Input.Control
                  id="dishPrice"
                  type="text"
                  value={price}
                  placeholder="Insira o preço do prato"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Input.Root>
            </Form.Field>
          </div>

          <Form.Field>
            <Form.Label htmlFor="dishDescription">Descrição</Form.Label>
            <textarea
              id="dishDescription"
              value={description}
              placeholder="Insira uma descrição do prato"
              onChange={(e) => setDescription(e.target.value)}
              className="h-28 w-full resize-none rounded-md border border-input bg-transparent px-3 py-1 text-sm placeholder-muted-foreground shadow-sm outline-none focus-within:ring-1 focus-within:ring-ring"
            />
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="dishIngredients">Ingredientes</Form.Label>
            <div className="flex flex-wrap items-center justify-start gap-1 rounded-md border border-input px-1 py-1 shadow-sm">
              {ingredients &&
                ingredients.map((ingredient, index) => (
                  <NewIngredient
                    key={String(index)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />
                ))}
              <Input.Root className="w-max">
                <Input.Control
                  style={{
                    width:
                      Math.min(Math.max(newIngredient.length, 8), 55) + 'ch',
                  }}
                  id="dishIngredients"
                  type="text"
                  value={newIngredient}
                  placeholder="Adicionar"
                  className="w-7"
                  onChange={(e) => setNewIngredient(e.target.value)}
                />
                <Input.Prefix>
                  <PiPlus
                    size={16}
                    className="cursor-pointer"
                    onClick={handleAddIngredient}
                  />
                </Input.Prefix>
              </Input.Root>
            </div>
          </Form.Field>
        </Form.Root>
      </Section>
    </Container>
  )
}
