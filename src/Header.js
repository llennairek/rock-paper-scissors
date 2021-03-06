import React from 'react'

function Header({score}){
  return(
    <header>
      <h1>Rock Paper Scissors</h1>
      <div className="score">
        <h2>SCORE</h2>
        <p className="score-count">{`${score}`}</p>
      </div>
    </header>
  )
}

export default Header
