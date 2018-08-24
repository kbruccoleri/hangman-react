import React from "react";
import "./PhraseInput.scss"
import HoverScaleButton from "../../../Base/HoverScaleButton";

class PhraseInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e) {
        let phrase = e.target.value.replace(/[.,\\/#!$%^&*;:{}=\-_`~()0-9]/g,"");
        this.setState({value: phrase});
    }

    handleSubmit(e) {
        this.props.submit(this.state.value);
        e.preventDefault();
    }

    handleKeyPress(e) {
        // Determine if enter is pressed.
        if (e.key === 'Enter') {
            this.handleSubmit(e);
        }
    }

    render() {
        return (
            <form className="phrase--container" onSubmit={this.handleSubmit}>
                <h1>Enter Your Secret Phrase!</h1>
                <textarea className="phrase--input"
                          onKeyPress={this.handleKeyPress}
                          onChange={this.handleChange}
                          value={this.state.value} autoFocus="true"/>
                <HoverScaleButton className="phrase--submit" type="submit" value="Enter" />
            </form>
        );
    }
}

export default PhraseInput;