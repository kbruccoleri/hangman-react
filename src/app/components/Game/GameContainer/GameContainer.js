import React from 'react';
import RemainingTries from "./RemainingTries/RemainingTries";
import IncorrectGuesses from "./IncorrectGuesses/IncorrectGuesses";
import SecretPhrase from "../Phrase/SecretPhrase/SecretPhrase";
import './GameContainer.scss';

class GameContainer extends React.Component {

    constructor(props) {
        super(props);
        this.makeGuess = this.makeGuess.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.makeGuess, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.makeGuess, false);
    }

    makeGuess(e) {
        const guess = e.key;
        this.props.makeGuess(guess);
    }

    render() {
        return (
            <div className="game--container">
                <div className="game--info">
                    <RemainingTries remainingTries={this.props.remainingTries} />
                    <SecretPhrase phrase={this.props.phrase} hiddenChars={this.props.hiddenChars}/>
                    <IncorrectGuesses incorrectLetters={this.props.incorrectLetters} />
                </div>
            </div>
        );
    }
}

export default GameContainer;