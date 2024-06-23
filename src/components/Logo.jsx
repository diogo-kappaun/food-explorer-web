import LogoImage from '../assets/logo.svg'

export function Logo({ withText = false, className }) {
  return (
    <div className="flex items-center gap-2">
      <img src={LogoImage} alt="logo" className={className} />
      {withText ? (
        <span className="text-lg font-bold text-foreground">Food Explorer</span>
      ) : (
        ''
      )}
    </div>
  )
}
