import React from "react";
import PhraseInput from "./Phrase/PhraseInput/PhraseInput";
import GameOver from "./GameOver/GameOver";
import GameContainer from "./GameContainer/GameContainer";
import Utils from "../../../utils/Utils.js";

const initialState = {
    phrase: '',
    hiddenChars: [],
    incorrectLetters: [],
    remainingTries: 5,
};

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = Utils.deepCopy(initialState);
    }

    hasPhrase() {
        return this.state.phrase != null && this.state.phrase.length > 0;
    }

    phraseCompleted() {
        return this.state.hiddenChars.indexOf(true) === -1;
    }

    hasRemainingTries() {
        return this.state.remainingTries > 0;
    }

    setPhrase(phrase) {
        // Clean the phrase, limiting to 1 space between words.
        phrase = phrase.split(/\s/).join(' ');
        let hiddenChars = [];
        for (let i = 0; i < phrase.length; i++)
        {
            let shouldHide = phrase[i] !== ' ';
            hiddenChars.push(shouldHide);
        }

        this.setState({
            phrase: phrase,
            hiddenChars: hiddenChars,
        });
    }

    makeGuess(guess) {

        // Defensive copy
        let phrase = this.state.phrase;
        let hiddenChars = this.state.hiddenChars;
        let remainingTries = this.state.remainingTries;
        let incorrectLetters = this.state.incorrectLetters;

        // If we have already guessed this letter, or if its an invalid letter, abort.
        let alreadyGuessed = incorrectLetters.indexOf(guess) !== -1;
        let invalidLetter = !/^([A-Z]|[a-z])$/.test(guess);
        if (alreadyGuessed || invalidLetter)
        {
            return;
        }

        // Find both lower/upper case matches.
        let foundMatch = false;
        for (let i = 0; i < phrase.length; i++) {
            if (phrase[i].toLowerCase() === guess.toLowerCase()) {
                hiddenChars[i] = false;
                foundMatch = true;
            }
        }

        if (!foundMatch) {
            remainingTries--;
            incorrectLetters.push(guess);
        }

        this.setState({
            hiddenChars: hiddenChars,
            remainingTries: remainingTries,
            incorrectLetters: incorrectLetters,
        });
    }

    render() {

        // If we have no answer, render an input to get the answer.
        if (!this.hasPhrase()) {
            return (
                <PhraseInput submit={phrase => this.setPhrase(phrase) }/>
            );
        }
        // If we have remaining tries and we didn't win.
        else if (this.hasRemainingTries() && !this.phraseCompleted()) {

            return (
                <GameContainer remainingTries={this.state.remainingTries}
                               incorrectLetters={this.state.incorrectLetters}
                               phrase={this.state.phrase}
                               hiddenChars={this.state.hiddenChars}
                               makeGuess={guess => this.makeGuess(guess)}
                />
            );
        }
        else
        {
            return (
                <GameOver phrase={this.state.phrase}
                          victory={this.phraseCompleted()}
                          reset={() => this.setState(Utils.deepCopy(initialState))} />
            );
        }
    }
}

export default Game;