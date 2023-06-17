import React from "react";

// Write your Character component here
const Character = (props) => {

    console.log('The Characters', props.character);

    for (let i = 0; i < props.character.length; i++){
    return (
        <div className = "character-section-wrapper">
            <h2>{props.character[i].name}</h2>
            <p>{props.character[i].birth_year}</p>
        </div>
    )
  }
}

export default Character;