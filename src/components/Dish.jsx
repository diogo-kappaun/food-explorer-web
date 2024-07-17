export function Root({ children }) {
  return <div className="space-y-6">{children}</div>
}

export function Title({ title }) {
  return <h2 className="text-xl font-semibold">{title}</h2>
}

export function Content({ children }) {
  return <div className="flex gap-4 overflow-auto">{children}</div>
}
