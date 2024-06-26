import { PiMagnifyingGlass } from 'react-icons/pi'

import * as Form from './Form'
import * as Input from './Input'

import { Logo } from './Logo'

export function Header() {
  return (
    <div className="relative col-span-2 hidden w-full items-center border-y lg:flex">
      <Logo className="absolute left-[72px] w-6" />

      <Form.Root className="mx-auto hidden w-[30rem] lg:flex">
        <Input.Root>
          <Input.Prefix>
            <PiMagnifyingGlass size={20} />
          </Input.Prefix>
          <Input.Control
            type="text"
            placeholder="Busque por pratos e ingredientes"
          />
        </Input.Root>
      </Form.Root>
    </div>
  )
}
