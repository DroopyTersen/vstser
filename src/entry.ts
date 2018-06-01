import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./AppShell/App";
import hub from "./hub";
import { ensureLogin } from "./auth/azureAD/azureADAuth";
ensureLogin()
    .then(auth => {
        if (auth) {
            console.log("CURRENT USER", auth.profile);
            (<any>window).hub = hub;
            ReactDOM.render(React.createElement(App), document.getElementById("root"));
        }
    })
    .catch(err => alert("Unable to login"));