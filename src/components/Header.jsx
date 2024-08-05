import { PiMagnifyingGlass } from 'react-icons/pi'

import * as Form from './Form'
import * as Input from './Input'

import { Logo } from './Logo'

export function Header({ inputOn = false, setSearch, value }) {
  return (
    <div className="relative col-span-2 hidden h-16 w-full items-center border-y lg:flex">
      <Logo className="lg:absolute lg:left-[72px]" />

      <Form.Root
        className={`mx-auto hidden w-[30rem] lg:flex ${inputOn ? '' : 'lg:hidden'}`}
      >
        <Input.Root>
          <Input.Prefix>
            <PiMagnifyingGlass size={20} />
          </Input.Prefix>
          <Input.Control
            type="text"
            placeholder="Busque por pratos e ingredientes"
            onChange={(e) => setSearch(e.target.value)}
            value={value}
          />
        </Input.Root>
      </Form.Root>
    </div>
  )
}
