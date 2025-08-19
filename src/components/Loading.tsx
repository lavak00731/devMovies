import { LoaderCircle } from 'lucide-react';
export const Loading = () => {
  return (
   <div className="flex items-center justify-center h-screen">
        <div className="" role="status">            
            <p>
                <LoaderCircle className="animate-spin text-blue-500 mr-2" size={48} />
                Loading...
            </p>
        </div>      
    </div>
  )
}
