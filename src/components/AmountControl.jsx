import { PiMinus, PiPlus, PiShoppingCart } from 'react-icons/pi'

import { Button } from './Button'

export function AmountControl({ amount, onIncrease, onDescrease }) {
  return (
    <div className="flex w-full flex-col gap-2 lg:flex-row">
      <div className="flex items-center justify-center gap-3">
        <Button onClick={onDescrease} className="px-3 py-2" variant="ghost">
          <PiMinus size={16} className="text-muted-foreground" />
        </Button>
        <span className="w-4 text-center text-sm lg:text-base">{amount}</span>
        <Button onClick={onIncrease} className="px-3 py-2" variant="ghost">
          <PiPlus size={16} className="text-muted-foreground" />
        </Button>
      </div>
      <Button className="flex justify-center">
        <PiShoppingCart size={18} />
      </Button>
    </div>
  )
}
