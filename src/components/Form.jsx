export function Label(props) {
  return <label {...props} className="text-sm font-medium" />
}

export function Field(props) {
  return <div {...props} className="flex flex-col gap-1" />
}

export function Root(props) {
  return (
    <form
      {...props}
      className="flex w-full flex-col gap-3 text-card-foreground"
    />
  )
}
