import React, { useCallback, useEffect, useState } from 'react'
import { PiArrowLeft, PiArrowRight } from 'react-icons/pi'
import { Button } from '../Button'

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  }
}

export function PrevButton({ ...props }) {
  return (
    <Button
      className="h-max w-max p-2 disabled:opacity-70"
      type="button"
      variant="secondary"
      {...props}
    >
      <PiArrowLeft size={16} />
    </Button>
  )
}

export function NextButton({ ...props }) {
  return (
    <Button
      className="h-max w-max p-2 disabled:opacity-60"
      type="button"
      variant="secondary"
      {...props}
    >
      <PiArrowRight size={16} />
    </Button>
  )
}
