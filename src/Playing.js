import React, {useEffect, useState} from "react";
import paper from "./assets/icon-paper.svg"
import scissors from './assets/icon-scissors.svg'
import rock from './assets/icon-rock.svg'

function Playing({playerChoice, setScore, score, setPlaying, playing}) {
  const srcImg = 
    playerChoice === "paper" ?
      paper :
      playerChoice === "scissors" ?
        scissors :
        rock;  

  const [house, setHouse] = useState("");
  const [houseImg, setHouseImg] = useState();
  const [winnerText, setwinnerText] = useState("")

  const newHousePick = () => {
    const choices = ["paper", "scissors", "rock"];
    setHouse(choices[Math.floor(Math.random() * 3)]);
  }

  const newHouseImg = () => {
    setHouseImg(
      house === "paper" ?
        paper :
        house === "scissors" ?
          scissors :
          rock)  
  }

  useEffect(() => {
    newHouseImg();
  }, [house])

  useEffect(() => {
    newHousePick();    
  }, []);

  const result = () => {
    if(playerChoice === house){
    setwinnerText("DRAW")
  } else if(playerChoice === "paper" && house === "rock"){
    setwinnerText("YOU WIN")
    setScore(score + 1)
  } else if(playerChoice === "paper" && house === "scissors"){
    setwinnerText("YOU LOSE")
    setScore(score - 1)
  } else if(playerChoice === "rock" && house === "paper"){
    setwinnerText("YOU LOSE")
    setScore(score - 1)
  } else if(playerChoice === "rock" && house === "scissors"){
    setwinnerText("YOU WIN")
    setScore(score + 1)
  } else if(playerChoice === "scissors" && house === "rock"){
    setwinnerText("YOU LOSE")
    setScore(score - 1)
  } else if(playerChoice === "scissors" && house === "paper"){
    setwinnerText("YOU WIN")
    setScore(score + 1)
  }}

  useEffect(() => {
    result()    
  }, [house])

  return(
    <div className="playing">
      <div className="battle">

        <div className={`${playerChoice}`}>
          <img src={srcImg} alt={`${playerChoice}`} />
        </div>        
        
        <div className={`${house}`}>
          <img src={`${houseImg}`} alt={`${house}`} />          
        </div>        
        <p>YOU PICKED</p>
        <p>THE HOUSE PICKED</p>
      </div>

      <div className="result">
        <p>{winnerText}</p>
        <button onClick={() => {
          setHouse()
          setPlaying(false)
          }}>PLAY AGAIN</button>
      </div>
    </div>
  )
  
}

export default Playing