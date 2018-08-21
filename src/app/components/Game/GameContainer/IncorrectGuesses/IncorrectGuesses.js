import React from "react";
import './IncorrectGuesses.scss';

const IncorrectGuesses = props => {
    return props.incorrectLetters.length > 0 ? (
        <div className="incorrect-guesses--container">
            <h4>Incorrectly Guessed Letters:</h4>
            <div>
                {props.incorrectLetters.join(',')}
            </div>
        </div>
    ) : (null);
};

export default IncorrectGuesses;