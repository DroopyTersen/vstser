import * as React from 'react';
import hub from "../hub";
import "../hub/reactions";
import "./App.scss";
import TabbedNav from "./TabbedNav/TabbedNav";
import Tab from './TabbedNav/Tab';
import { Router } from "@reach/router";
import HomeView from "../views/Home/HomeView";
import AboutView from '../views/About/AboutView';

export default class App extends React.Component {
    componentDidMount() {
        hub.on("update", () => this.forceUpdate());
        hub.trigger("app:init");
    }
    render() {
        return (
            <div className="app">
                <TabbedNav>
                    <Tab path="/" icon="fas fa-home" />
                    <Tab path="/about" icon="far fa-question-circle" />
                </TabbedNav>
                <div className='content'>
                    <Router>
                        <HomeView path="/" />
                        <AboutView path="/about" />
                    </Router>
                </div>
            </div>
        );
    }
}