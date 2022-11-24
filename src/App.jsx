import { useState, useRef } from 'react'
import React from 'react'
import './style.css'
import useBusiness from './useBusiness'
function App() {
  

// const [textData, setTextData] = React.useState('')
// const [timeRemaining, setTimeRemaining] = React.useState(5)
// const [gameRunning, setGameRunning] = React.useState(false)
// const [wordCounter, setWordCounter] = React.useState(0)
// const textRef = useRef(null)
const {textData,timeRemaining,gameRunning,wordCounter,textRef, handleChange, WordCount, startControl} = useBusiness()

// function handleChange(e){
//   setTextData(e.target.value)
// }

// function WordCount(str){
//  return(str
//   .split(' ')
//   .filter(function(n) { return n != '' })
//   .length) 

// }
// function startControl(){
//   setGameRunning(true)
//   if(gameRunning == false){
//     setTimeRemaining(5)
//   }
//   setTextData('')
//   textRef.current.disabled = false
//   textRef.current.focus()
// }
// React.useEffect(()=>{
//   if(gameRunning == true && timeRemaining > 0 ){
//     setTimeout(()=>{
//       setTimeRemaining(function(prevState){
//         return prevState = prevState -1
//       })
//     }, 1000)
//   }else if(timeRemaining == 0){
//     setGameRunning(false)
//    setWordCounter(WordCount(textData))
//   }
   
// },[timeRemaining, gameRunning])

  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea
              ref={textRef} 
              onChange={handleChange}
              value={textData}
              disabled={!gameRunning}/>
      <h4>Time Remaining:{timeRemaining}</h4>
      <button onClick={startControl} disabled={gameRunning}>Start</button>
    
      <h1>Word count:{wordCounter}</h1>
    </div>
  )
}

export default App
