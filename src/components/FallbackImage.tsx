export const FallbackImage = ({ src, alt }:{src:string, alt?:string}) => {
  const placeholder =
    '/logo.png'

  interface FallbackImageProps {
    src: string;
    alt?: string;
  }

  const handleError = (e: React.SyntheticEvent<FallbackImageProps>) => {
    (e.target as HTMLImageElement).src = placeholder;
  }

  return <img src={src || placeholder} alt={alt} onError={handleError} />
}
