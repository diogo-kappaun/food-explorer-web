export function ButtonText(props) {
  return (
    <a
      {...props}
      className="text-sm font-medium text-primary transition-colors hover:text-primary/90 hover:underline"
    />
  )
}
