import autoAnimate from '@formkit/auto-animate'
import { useEffect, useRef, useState } from 'react'
import {
  PiGear,
  PiHouse,
  PiLifebuoy,
  PiMagnifyingGlass,
  PiPlusCircle,
  PiStar,
} from 'react-icons/pi'

import * as Collapsible from '@radix-ui/react-collapsible'
import * as Form from '../Form'
import * as Input from '../Input'
import * as Nav from './Nav'

import { Button } from '../Button'
import { Logo } from '../Logo'
import { Menu } from './Menu'
import { Profile } from './Profile'

export function Sidebar() {
  const [open, setOpen] = useState(false)

  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  return (
    <Collapsible.Root
      className="fixed left-0 right-0 top-0 z-10 flex flex-col border-b p-4 data-[state=open]:bottom-0 md:right-auto md:border-r md:data-[state=closed]:bottom-0"
      ref={parent}
    >
      <div className="flex items-center justify-between">
        <Logo className="w-6" />
        <Collapsible.Trigger asChild className="md:hidden">
          <Button variant="ghost">
            <Menu state={open} onClick={(e) => setOpen(!open)} />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="mt-6 flex flex-1 flex-col data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <div className="flex h-full flex-col gap-1">
          <div className="mb-4">
            <Form.Root>
              <Input.Root>
                <Input.Prefix>
                  <PiMagnifyingGlass size={20} />
                </Input.Prefix>
                <Input.Control type="text" placeholder="Busque por pratos" />
              </Input.Root>
            </Form.Root>
          </div>

          <Nav.Root>
            <Nav.Prefix>
              <PiHouse size={20} />
            </Nav.Prefix>
            <Nav.Name name="Início" />
          </Nav.Root>

          <Nav.Root>
            <Nav.Prefix>
              <PiStar size={20} />
            </Nav.Prefix>
            <Nav.Name name="Favoritos" />
          </Nav.Root>

          <Nav.Root>
            <Nav.Prefix>
              <PiPlusCircle size={20} />
            </Nav.Prefix>
            <Nav.Name name="Novo Prato" />
          </Nav.Root>
        </div>

        <div className="flex flex-col gap-1">
          <Nav.Root>
            <Nav.Prefix>
              <PiLifebuoy size={20} />
            </Nav.Prefix>
            <Nav.Name name="Suporte" />
          </Nav.Root>
          <Nav.Root>
            <Nav.Prefix>
              <PiGear size={20} />
            </Nav.Prefix>
            <Nav.Name name="Configurações" />
          </Nav.Root>
        </div>

        <div className="my-2 border-t"></div>

        <Profile />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
