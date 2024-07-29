import { PiMinus, PiPlus, PiShoppingCart } from 'react-icons/pi'

import { Button } from './Button'

export function AmountControl({ amount, onIncrease, onDescrease }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex w-full flex-row justify-center gap-2 border-y p-3 lg:relative lg:justify-start lg:border-none lg:p-0">
      <div className="flex items-center justify-center gap-3">
        <Button onClick={onDescrease} className="px-3 py-2" variant="ghost">
          <PiMinus size={16} className="text-muted-foreground" />
        </Button>
        <span className="w-4 text-center text-sm lg:text-base">{amount}</span>
        <Button onClick={onIncrease} className="px-3 py-2" variant="ghost">
          <PiPlus size={16} className="text-muted-foreground" />
        </Button>
      </div>
      <Button className="flex w-max justify-center">
        <PiShoppingCart size={20} />
      </Button>
    </div>
  )
}
