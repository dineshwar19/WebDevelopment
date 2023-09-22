import React,{useState,useMemo} from 'react'

const Use_Memo = () => {
    const[num,setNum] = useState(0);
    const factorial = useMemo(()=>{
        return result(num)
    },[num])
    const [name,setName] = useState("");
    function result(num){
        let i = 0;
        while (i < 100000000) i++;
        if(num < 2){
            return num; 
        }
        return num * result(num - 1);
    }
  return (
    <div>
        <input type="text" 
        value={num}
        onChange={(e)=>setNum(e.target.value)} />
        <button onClick={()=>{setNum(num + 1)}}>+</button>
        <button onClick={() =>{setNum(num - 1)}}>-</button>
        <h1>The factorial of {num} is {factorial} </h1>
        <hr />
        <input type="text"
        onChange={(e)=>{setName(e.target.value)}}
        value={name} />
        <DisplayName name = {name}></DisplayName>
    </div>
  )
}
const DisplayName = React.memo(({name})=>{
    console.log("rendered")
    return <p> the name is : 
        {name}</p>
})
export default Use_Memo