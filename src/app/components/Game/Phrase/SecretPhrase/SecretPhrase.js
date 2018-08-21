import React from "react";
import "./SecretPhrase.scss"

class SecretPhrase extends React.Component
{
    getSecretPhraseDisplay() {

        // Start off as blank underscores
        let display = '';
        for (let i = 0; i < this.props.phrase.length; i++) {
            display += (this.props.hiddenChars[i]) ? '_' : this.props.phrase[i];
        }

        return (
            <div className="secret-phrase--display">
                {display}
            </div>
        );
    }

    render() {
        return (
            <div className="secret-phrase--container">
                {this.getSecretPhraseDisplay()}
            </div>
        );
    }
}

export default SecretPhrase;