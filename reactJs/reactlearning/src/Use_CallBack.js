import React, { useEffect, useMemo, useState } from 'react'

const Use_CallBack = () => {
  const [name , setName] = useState("");
  const names =["dinesh","ganesh","suresh"];
  function changer(){
    let rand = Math.floor(Math.random()*names.length);
    setName(names[rand]);
  }
  useMemo(()=>{
    console.log("Memo rendered")
  },[name]);

  useEffect(()=>{
    console.log("effect rendered")
    
  },[name])
  return (
    <div>
      <button onClick={changer}>change</button>
      <p>the name is {name} </p>
      <DisplayName name={name} />
    </div>
  )
}
const DisplayName =({name}) =>{
    return <p>{`the mem name is : ${name}`}</p>
}

export default Use_CallBack

