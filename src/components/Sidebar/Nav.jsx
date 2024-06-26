import { PiCaretDown } from 'react-icons/pi'

export function Root({ ...props }) {
  return (
    <a
      className="group/item flex cursor-pointer items-center gap-3 rounded-md transition-colors hover:bg-muted/20"
      {...props}
    />
  )
}

export function Prefix(props) {
  return (
    <span
      className="flex h-10 w-10 items-center justify-center text-muted-foreground transition-colors"
      {...props}
    />
  )
}

export function Name({ state, ...props }) {
  return (
    <span
      className={`flex flex-1 items-center justify-between font-normal transition-colors ${state ? 'inline' : 'hidden'}`}
    >
      {props.name}
      <PiCaretDown className="mx-3 text-muted-foreground" />
    </span>
  )
}
