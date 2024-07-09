export function Container({ children }) {
  return (
    <div className="h-screen bg-background text-foreground lg:grid lg:grid-cols-page lg:grid-rows-page">
      {children}
    </div>
  )
}
