import React from 'react'
import imgRules from './assets/image-rules.svg'

function Rules(){  
  
  const handleClick =(event) => {
    event.stopPropagation();
    const rulesPage = document.querySelector(".rules-page");
    const beatsElement = document.querySelector(".beats");
    rulesPage.classList.toggle("show");
    beatsElement.classList.toggle("show");
  }

  return(
    <footer onClick={handleClick}>
      <h1>RULES</h1>
      <div className="rules-page">
        <h2>RULES</h2>
        <p>If you win +1 point</p>
        <p>If you lose -1 point</p>

        <div className="beats">
          <img src={imgRules} alt="Rules" />
        </div>
        <p className="close" onClick={handleClick}>&#10005;</p>
      </div>
    </footer>
  )
}

export default Rules