import { PiMinus, PiPlus } from 'react-icons/pi'

import { Button } from './Button'

export function AmountControl({ amount, onIncrease, onDescrease }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <Button onClick={onDescrease} variant="ghost">
        <PiMinus size={16} className="text-muted-foreground" />
      </Button>
      <span className="w-4 text-center text-sm lg:text-base">{amount}</span>
      <Button onClick={onIncrease} variant="ghost">
        <PiPlus size={16} className="text-muted-foreground" />
      </Button>
    </div>
  )
}
