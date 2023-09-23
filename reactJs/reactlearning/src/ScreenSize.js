import React from 'react'
import useScreenSize from './useScreenSize'
function ScreenSize() {
    const[screenSize,screenSize2]=useScreenSize();
  return (
    <>
    <div>ScreenSize is {screenSize}</div>
    <div>Screen width is {screenSize2}</div>
    </>
  )
}

export default ScreenSize