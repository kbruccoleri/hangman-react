import React from "react";
import './IncorrectGuesses.scss';

const IncorrectGuesses = props => {
    return props.incorrectLetters.length > 0 ? (
        <div className="incorrect-guesses--container">
            <span className="incorrect-guesses--description">Incorrectly Guessed Letters:</span>
            <div>
                {props.incorrectLetters.join(',')}
            </div>
        </div>
    ) : (null);
};

export default IncorrectGuesses;