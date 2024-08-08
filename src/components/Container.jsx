export function Container({ children, isLoading }) {
  return (
    <div
      className={`h-screen bg-background text-foreground lg:grid lg:grid-cols-page lg:grid-rows-page ${isLoading ? 'pointer-events-none' : ''}`}
    >
      {children}
    </div>
  )
}
