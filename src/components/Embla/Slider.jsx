import useEmblaCarousel from 'embla-carousel-react'
import { NextButton, PrevButton, usePrevNextButtons } from './Buttons'

export function Slider({ children }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true })

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  return (
    <>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-4 flex">{children}</div>
      </div>

      <div className="flex items-center gap-2">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </>
  )
}
