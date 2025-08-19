export const FallbackImage = ({ src, alt }:{src:string, alt?:string}) => {
  const placeholder =
    '/logo.png'

  const handleError = (e) => {
    e.target.src = placeholder
  }

  return <img src={src || placeholder} alt={alt} onError={handleError} />
}
