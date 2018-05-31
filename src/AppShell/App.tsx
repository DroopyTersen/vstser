import * as React from 'react';
import hub from "../hub";
import "../hub/reactions";
import "./App.scss";
import Router from "../navigation/Router";
import TabbedNav from "./TabbedNav/TabbedNav";
import routes from "../screens/routes";
import { NavRoute, getRoute } from '../navigation';

export default class App extends React.Component {
    componentDidMount() {
        hub.on("update", () => this.forceUpdate());
        hub.trigger("app:init");
    }
    renderView = (ViewComponent, route:NavRoute) => {
        route.params = route.params || {};
        return <ViewComponent {...hub.state} {...route.params} />
    }
    render() {
        return (
            <div className="app">
                <TabbedNav nav={hub.state.nav} />
                <div className='content'>
                    <Router 
                        render={this.renderView} 
                        route={getRoute(hub.state.nav)} 
                        routes={routes}
                    />
                </div>
            </div>
        );
    }
}