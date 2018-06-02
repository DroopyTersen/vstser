import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./AppShell/App";
import hub from "./hub";

(<any>window).hub = hub;
ReactDOM.render(React.createElement(App), document.getElementById("root"));
