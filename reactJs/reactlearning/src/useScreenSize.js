import React,{useEffect, useState} from "react";

function useScreenSize(){
    const[screenSize , setScreenSize] = useState();
    const[screenSize2 , setScreenSize2] = useState();
    
    useEffect(()=>{
        window.addEventListener("resize",()=>{
            screen();
            setScreenSize2(window.innerWidth);
        });
        return () => {
            window.removeEventListener("resize", () => {
              screen();
              setScreenSize2(window.innerWidth);
            });
          };
    },[])
    
    const screen = () =>{
        if(window.innerWidth > 990){
            return setScreenSize("large ")
        }
        else if(window.innerWidth < 660){
            return setScreenSize("small")
        }
        else{
            return setScreenSize("medium")
        }
    }
    return [screenSize,screenSize2];
}
export default useScreenSize;