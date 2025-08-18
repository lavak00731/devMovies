import { useId } from "react"

export const InputSearch = ({label, setmovieToSearch}:{label:string, setmovieToSearch: (value: string) => void}) => {
    const id = useId();
  return (
    <>
        <label htmlFor="id">{label}</label>
        <input
        type="text"
        className=""
        placeholder="Search..."
        id={id}
        list={id+'_movies'}
        onChange={(e)=>setmovieToSearch(e.target.value)}
        required
      />
        <datalist id={id+'_movies'}>        
        </datalist>
    </>      
  )
}
