import React from "react";

// Write your Character component here
const Character = (props) => {

    // console.log('The Characters', props.character);

    
    return (
       
        <div className = "character-section-wrapper">
            <h2>{props.name}</h2>
            <p>{props.birthYear}</p>
        </div>
    )
}

export default Character;