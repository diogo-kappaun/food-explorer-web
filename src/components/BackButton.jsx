import { PiArrowLeft } from 'react-icons/pi'

import { ButtonText } from './ButtonText'

export function BackButton() {
  return (
    <ButtonText to={-1} className="flex h-max items-center gap-2">
      <PiArrowLeft size={14} />
      <span>Voltar</span>
    </ButtonText>
  )
}
