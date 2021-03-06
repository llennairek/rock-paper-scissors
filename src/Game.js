import React from 'react'
import paper from './assets/icon-paper.svg'
import rock from './assets/icon-rock.svg'
import scissors from './assets/icon-scissors.svg'

function Game({setPlaying, playing, setPlayerChoice}){

  const handleClick = (e) => {
    setPlayerChoice(e.target.className); 
    setPlaying(!playing)   
  }

  return(
        <main>
          <div className="paper" onClick={handleClick}>
            <img src={paper} alt="Paper" />
          </div>
          <div className="scissors" onClick={handleClick}>
            <img src={scissors} alt="Scissors" />
          </div>
          <div className="rock" onClick={handleClick}>
            <img src={rock} alt="Rock" />
          </div>
        </main>
    )  
}

export default Game