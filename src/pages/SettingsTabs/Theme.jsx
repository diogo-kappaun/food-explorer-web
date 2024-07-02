import { ThemeToggler } from '../../components/ThemeToggler'

export function Theme() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-medium">Tema</h2>
        <p className="text-sm text-muted-foreground">Altere seu tema aqui.</p>
      </div>

      <ThemeToggler />
    </div>
  )
}
