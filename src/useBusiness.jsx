import React from 'react'

function useBusiness(){

const [textData, setTextData] = React.useState('')
const [timeRemaining, setTimeRemaining] = React.useState(5)
const [gameRunning, setGameRunning] = React.useState(false)
const [wordCounter, setWordCounter] = React.useState(0)
const textRef = React.useRef(null)


function handleChange(e){
  setTextData(e.target.value)
}

function WordCount(str){
 return(str
  .split(' ')
  .filter(function(n) { return n != '' })
  .length) 

}
function startControl(){
  setGameRunning(true)
  if(gameRunning == false){
    setTimeRemaining(5)
  }
  setTextData('')
  textRef.current.disabled = false
  textRef.current.focus()
}
React.useEffect(()=>{
    if(gameRunning == true && timeRemaining > 0 ){
      setTimeout(()=>{
        setTimeRemaining(function(prevState){
          return prevState = prevState -1
        })
      }, 1000)
    }else if(timeRemaining == 0){
      setGameRunning(false)
     setWordCounter(WordCount(textData))
    }
     
  },[timeRemaining, gameRunning])
return {textData,timeRemaining,gameRunning,wordCounter,textRef, handleChange, WordCount, startControl}
  
}
export default useBusiness