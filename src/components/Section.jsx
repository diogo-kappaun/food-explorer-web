export function Section({ children }) {
  return (
    <div className="h-full overflow-auto px-8 pb-12 pt-24 lg:pt-8">
      <div className="mx-auto h-full w-page space-y-6">{children}</div>
    </div>
  )
}
