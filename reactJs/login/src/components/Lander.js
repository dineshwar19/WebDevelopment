import React, { useEffect, useState } from 'react'

const Lander = ({data}) => {
    const [ info ,setInfo] = useState([]);
    useEffect(() =>{
        setInfo(data)
    },[data])
    
  return (
    <div className=''>
        <ul>
            {info.map((entry)=>(
                <li key={entry.id}>
                    <p>{entry.name}</p>
                    <p>{entry.email}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Lander