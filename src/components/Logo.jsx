import LogoImage from '../assets/logo.svg'

export function Logo({ withText = false }) {
  return (
    <div className="flex gap-2">
      <img src={LogoImage} alt="logo" className="w-8" />
      {withText ? (
        <span className="font-bold text-foreground">Food Explorer</span>
      ) : (
        ''
      )}
    </div>
  )
}
