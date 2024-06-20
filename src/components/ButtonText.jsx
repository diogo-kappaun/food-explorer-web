import { Link } from 'react-router-dom'

export function ButtonText(props) {
  return (
    <Link
      {...props}
      className="text-sm font-medium text-primary transition-colors hover:text-primary/90 hover:underline"
    />
  )
}
