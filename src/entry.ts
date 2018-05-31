import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./AppShell/App";
import hub from "./hub";
import { ensureLogin } from "./auth/auth";
ensureLogin()
    .then(token => {
        if (token) {
            (<any>window).hub = hub;
            ReactDOM.render(React.createElement(App), document.getElementById("root"));
        }
    })
    .catch(err => alert("Unable to login"));