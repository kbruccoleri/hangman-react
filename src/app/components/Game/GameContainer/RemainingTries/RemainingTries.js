import React from "react";
import classNames from "classnames";
import './RemainingTries.scss';

const RemainingTries = props => {
    return (
        <div className="remaining-tries--container">
            <span className="remaining-tries--description">
                Remaining Tries:
            </span>
            <span className={classNames({
                'remaining-tries': true,
                'remaining-tries--safe': props.remainingTries >= 4,
                'remaining-tries--warning': 2 <= props.remainingTries && props.remainingTries < 4,
                'remaining-tries--danger': props.remainingTries < 2,
            })}>
                {props.remainingTries}
            </span>
        </div>
    );
};

export default RemainingTries;