export function Section({ children }) {
  return (
    <div className="h-full overflow-auto px-8 pt-24 lg:pt-8">
      <div className="mx-auto w-page space-y-6 pb-12">{children}</div>
    </div>
  )
}
