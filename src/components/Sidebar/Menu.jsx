export function Menu({ state, ...props }) {
  return (
    <div
      {...props}
      className={`flex h-max w-4 cursor-pointer flex-col items-center justify-center space-y-1 ${state ? 'rotate-[180deg]' : 'rotate-[180deg'}`}
    >
      <div
        className={`h-0.5 w-full rounded-lg bg-muted-foreground transition-all duration-300 ${state ? 'translate-y-[6px] rotate-[-45deg]' : ''}`}
      ></div>
      <div
        className={`h-0.5 w-full origin-center rounded-lg bg-muted-foreground transition-all duration-300 ${state ? 'scale-x-0' : ''}`}
      ></div>
      <div
        className={`h-0.5 w-full rounded-lg bg-muted-foreground transition-all duration-300 ${state ? 'translate-y-[-6px] rotate-[45deg]' : ''}`}
      ></div>
    </div>
  )
}
