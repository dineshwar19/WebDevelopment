import React from 'react'
import useFetch from "./useFetch"
function Api_Data() {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <div>
        {data && data.map((item)=>{
            return <p key={item.id}>{item.title}</p>
        })}
    </div>
  )
}

export default Api_Data