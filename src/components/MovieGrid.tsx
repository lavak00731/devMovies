import { useState } from "react";
import { useSelector } from "react-redux";

export const MovieGrid = () => {
    const [searchTerm, setSearchTerm] = useState('456');
  const [data, setData] = useState([
    { id: 1, name: 'Apple', category: 'Fruit' },
    { id: 2, name: 'Banana', category: 'Fruit' },
    { id: 3, name: 'Carrot', category: 'Vegetable' },
    // ... more data
  ]);
    if(!searchTerm) {
        return 
    }

  return (
    <div className="">
      {data.map((movie) => <p key={movie.id}>{movie.name}</p>)}
    </div>
  );
}

