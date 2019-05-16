import React, { Component } from "react";

const Buttons = (props) =>{

  const buttonPressed = (e) =>{

    props.buttonPressed(e.target.value);
  }

  return(
    <div className="calculator">
            <input type="text" className="calculator-screen" value={props.valueInput} disabled />
      <div className="calculator-keys">
       
        <button onClick={buttonPressed} type="button" className="operator" value="+">+</button>
        <button onClick={buttonPressed} type="button" className="operator" value="-">-</button>
        <button onClick={buttonPressed} type="button" className="operator" value="*">&times;</button>
        <button onClick={buttonPressed} type="button" className="operator" value="/">&divide;</button>
  
        <button onClick={buttonPressed} type="button" value="7">7</button>
        <button onClick={buttonPressed} type="button" value="8">8</button>
        <button onClick={buttonPressed} type="button" value="9">9</button>


        <button onClick={buttonPressed} type="button" value="4">4</button>
        <button onClick={buttonPressed} type="button" value="5">5</button>
        <button onClick={buttonPressed} type="button" value="6">6</button>


        <button onClick={buttonPressed} type="button" value="1">1</button>
        <button onClick={buttonPressed} type="button" value="2">2</button>
        <button onClick={buttonPressed} type="button" value="3">3</button>

        <button onClick={buttonPressed} type="button" value="0">0</button>
        <button onClick={buttonPressed} type="button" value=".">.</button>
        <button onClick={buttonPressed} type="button" className="all-clear" value="all-clear">AC</button>

        <button onClick={buttonPressed} type="button" className="equal-sign" value="=">=</button>

      </div>
    </div>
  )
}

export default Buttons;