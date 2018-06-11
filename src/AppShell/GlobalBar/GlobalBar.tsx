import * as React from "react";
require("./GlobalBar.scss");
import { Link } from "@reach/router";

const faExclamationTriangle = require("@fortawesome/fontawesome-free-solid/faExclamationTriangle")
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default function(props:GlobalBarProps) {
    return (
        <div className='global-bar'>
            {props.isOnline === false && (
                <div className="offline">
                    You are offline
                    <FontAwesomeIcon icon={faExclamationTriangle} />
                </div>

            )}
        </div>
    );
}
export interface GlobalBarProps {
    isOnline?:boolean,
}