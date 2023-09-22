import React,{useState,useRef, useEffect} from 'react'

function Use_Ref() {
    const [name ,setName] = useState("");
    const [counter,setCounter] = useState(0);
    const prevCounter = useRef("");

    const inputEl = useRef(0);
    
    function names(e){
        setName(e.target.value);
    }
    useEffect(()=>{
      inputEl.current= counter
    },[counter]);
    
  return (
    <div>
        <input type="text" 
        value={name}
        onChange={names}/>
        <button onClick={()=>setName("")}>Reset</button>
        <p>{name}</p>

        <h1>Counter : {counter}</h1>
        <h2 ref={inputEl}>previous counter :{inputEl.current} </h2>
        <button onClick={()=>setCounter(Math.floor(Math.random()*50))}>change</button>
    </div>
  )
}

export default Use_Ref