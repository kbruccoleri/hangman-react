import React from 'react';
import ResetButton from "./ResetButton";
import classNames from 'classnames';
import './GameOver.scss'

class GameOver extends React.Component {

    constructor(props) {
        super(props);
        this.props.reset.bind(this);
    }

    render() {
        return (
            <div className="game-over--container">
                <div className={classNames({
                    "game-over--result-message": true,
                    "victory": this.props.victory,
                    "defeat": !this.props.victory,
                })}>
                    <h1>
                        {this.props.victory ? "YOU WIN!" : "GAME OVER"}
                    </h1>
                    {
                        !this.props.victory ? (
                            <div>
                                The phrase was
                                <h2>{this.props.phrase}</h2>
                            </div>
                        ) : null
                    }
                </div>
                <ResetButton reset={this.props.reset}/>
            </div>
        );
    }
}

export default GameOver;