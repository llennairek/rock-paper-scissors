import React, {useState} from 'react'
import Header from "./Header"
import Game from "./Game"
import Rules from "./Rules"
import Playing from "./Playing"

function App() {
  const [score, setScore] = useState(0) 
  const [playing, setPlaying] = useState(false)
  const [playerChoice, setPlayerChoice] = useState("") 


  return (
    <div className="app">
      <Header score={score}/>  

      {
      !playing ? 
      <Game playing={playing} setPlaying={setPlaying} setPlayerChoice={setPlayerChoice}/> 
      : 
      <Playing setPlaying={setPlaying} playing={playing} score={score} setScore={setScore} playerChoice={playerChoice}/>
      }   
      
      <Rules />
    </div>
  );
}

export default App;
