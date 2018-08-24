import React from 'react';
import posed from 'react-pose';

const HoverScaleImpl = posed.input({
    idle: { scale: 1 },
    hovered: { scale: 1.5 }
});

class HoverScaleButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hovering: false,
        }
    }

    render() {

        return (
            <HoverScaleImpl
                {... this.props}
                pose={this.state.hovering ? "hovered" : "idle"}
                onMouseEnter={() => this.setState({ hovering:true })}
                onMouseLeave={() => this.setState({ hovering:false })}
            >
                {this.props.children}
            </HoverScaleImpl>
        );
    }
}

export default HoverScaleButton;