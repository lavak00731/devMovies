import { useEffect } from "react"

const useChangeTitle = (title: string) => {
    useEffect(() => {
      document.title = title;
    
      return () => {
        document.title = ""
      }
    }, [title])
    
}
export default useChangeTitle