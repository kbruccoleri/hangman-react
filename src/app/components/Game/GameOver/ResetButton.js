import React from 'react';

class ResetButton extends React.Component {

    constructor(props) {
        super(props);

        this.props.reset.bind(this);
    }

    render() {
        return (
            <button className="retry-button" onClick={this.props.reset}>
                Play again
            </button>
        );
    }
}

export default ResetButton;