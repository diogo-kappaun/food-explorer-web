import {
  PiCheckCircleBold,
  PiInfoBold,
  PiWarningBold,
  PiXCircleBold,
} from 'react-icons/pi'
import { Toaster } from 'sonner'

export function Toast() {
  return (
    <Toaster
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            'bg-background border border-border flex items-center p-4 w-full gap-4 shadow-sm rounded-md',
          title: 'text-foreground',
          description: 'text-muted-foreground',
          actionButton: 'bg-zinc-400',
          cancelButton: 'bg-orange-400',
          closeButton: 'bg-lime-400',
          icon: 'text-foreground text-xl',
        },
      }}
      icons={{
        success: <PiCheckCircleBold />,
        error: <PiXCircleBold />,
        info: <PiInfoBold />,
        warning: <PiWarningBold />,
      }}
      position="top-center"
    />
  )
}
