import React,{ useState} from 'react'

const SearchImage = ({searchImage}) => {
    const[text , setText] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        searchImage(text)
    }
  return (
    <div className= "p-4">
        <form onSubmit={handleSubmit} className= "flex flex-col gap-4 items-center">
            <input type="text" className= "bg-white p-2 rounded-lg outline-none w-60 "
            placeholder='Enter the term' onChange={(e)=>setText(e.target.value)}/>
            <button type='submit' className=" text-white cursor-pointer bg-slate-500 w-20 rounded-lg">Submit</button>
        </form>
    </div>
  )
}

export default SearchImage