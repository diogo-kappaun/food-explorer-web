import { useState } from 'react'
import {
  PiGear,
  PiHouse,
  PiLifebuoy,
  PiMagnifyingGlass,
  PiNewspaperClipping,
  PiPlus,
  PiStar,
} from 'react-icons/pi'

import * as Collapsible from '@radix-ui/react-collapsible'
import * as Form from '../Form'
import * as Input from '../Input'
import * as Nav from './Nav'

import { Button } from '../Button'
import { Logo } from '../Logo'
import { Separator } from '../Separator'
import { Menu } from './Menu'
import { Profile } from './Profile'

import { useAuth } from '../../hooks/auth'
import { USER_ROLE } from '../../utils/roles'

export function Sidebar({ inputOn = false, setSearch, value }) {
  const { role } = useAuth()

  const [open, setOpen] = useState(false)

  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-10 flex flex-col border-b bg-background p-4 px-8 data-[state=open]:bottom-0 lg:relative lg:right-auto lg:h-full lg:border-r lg:px-4 lg:data-[state=closed]:bottom-0">
      <div className="flex h-8 items-center justify-between rounded-md lg:fixed lg:top-3 lg:h-10 lg:border">
        <Logo className="w-6 lg:hidden" />
        <Collapsible.Trigger asChild>
          <Button
            variant="ghost"
            className="items-center lg:flex lg:h-10 lg:w-10 lg:justify-center lg:hover:bg-muted/40"
            onClick={(e) => setOpen(!open)}
          >
            <Menu state={open} />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="mt-6 flex flex-1 flex-col data-[state=closed]:hidden lg:mt-2 lg:data-[state=closed]:flex"
      >
        <div className="flex h-full flex-col gap-1">
          <Form.Root className={`mb-4 lg:hidden ${inputOn ? '' : 'hidden'}`}>
            <Input.Root>
              <Input.Prefix>
                <PiMagnifyingGlass size={20} />
              </Input.Prefix>
              <Input.Control
                type="text"
                placeholder="Busque por pratos"
                onChange={(e) => setSearch(e.target.value)}
                value={value}
              />
            </Input.Root>
          </Form.Root>

          <Nav.Root to="/">
            <Nav.Prefix>
              <PiHouse size={20} />
            </Nav.Prefix>
            <Nav.Name state={open} name="Início" />
          </Nav.Root>

          {role === USER_ROLE.CUSTOMER && (
            <Nav.Root to="/favorites">
              <Nav.Prefix>
                <PiStar size={20} />
              </Nav.Prefix>
              <Nav.Name state={open} name="Favoritos" />
            </Nav.Root>
          )}

          {role === USER_ROLE.CUSTOMER && (
            <Nav.Root>
              <Nav.Prefix>
                <PiNewspaperClipping size={20} />
              </Nav.Prefix>
              <Nav.Name state={open} name="Pedidos" />
            </Nav.Root>
          )}

          {role === USER_ROLE.ADMIN && (
            <Nav.Root to="/dish/new">
              <Nav.Prefix>
                <PiPlus size={20} />
              </Nav.Prefix>
              <Nav.Name state={open} name="Novo Prato" />
            </Nav.Root>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Nav.Root>
            <Nav.Prefix>
              <PiLifebuoy size={20} />
            </Nav.Prefix>
            <Nav.Name state={open} name="Suporte" />
          </Nav.Root>
          <Nav.Root to="/settings">
            <Nav.Prefix>
              <PiGear size={20} />
            </Nav.Prefix>
            <Nav.Name state={open} name="Configurações" />
          </Nav.Root>
        </div>

        <Separator className="my-2" />

        <Profile state={open} />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
