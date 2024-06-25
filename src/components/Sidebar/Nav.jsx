import { PiCaretDown } from 'react-icons/pi'

export function Root(props) {
  return (
    <a
      className="group/item flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-muted/20"
      {...props}
    />
  )
}

export function Prefix(props) {
  return <span className="text-muted-foreground transition-colors" {...props} />
}

export function Name(props) {
  return (
    <span
      className="flex flex-1 items-center justify-between font-normal transition-colors"
      {...props}
    >
      {props.name}
      <PiCaretDown className="text-muted-foreground" />
    </span>
  )
}
