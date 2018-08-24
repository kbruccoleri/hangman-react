import React from 'react';
import HoverScaleButton from '../../Base/HoverScaleButton';

class ResetButton extends React.Component {

    constructor(props) {
        super(props);
        this.props.reset.bind(this);
    }

    render() {
        return (
            <HoverScaleButton className="retry-button"
                              onClick={this.props.reset}
                              value="Play again" readOnly />
        );
    }
}

export default ResetButton;