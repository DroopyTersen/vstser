import * as React from 'react';
import hub from "../hub";
import "../hub/reactions";
import "./App.scss";
import TabbedNav from "./TabbedNav/TabbedNav";
import Tab from './TabbedNav/Tab';
import { Router, Location } from "@reach/router";
import HomeView from "../views/Home/HomeView";
import AboutView from '../views/About/AboutView';
import MovieDetails from "../views/Movies/MovieDetails";
export default class App extends React.Component {
    componentDidMount() {
        hub.on("update", () => this.forceUpdate());
        hub.trigger("app:init");
    }
    render() {
        return (
    
            <div className="app">
                <Location>
                    {({location}) => (
                        <TabbedNav>
                            <Tab path="/" icon="fas fa-home" activePath={location.pathname} />
                            <Tab path="/about" icon="far fa-question-circle" activePath={location.pathname}/>
                        </TabbedNav>
                    )}
                </Location>
                <div className='content'>
                    <Router>
                        <HomeView path="/" default />
                        <AboutView path="/about" />
                        <MovieDetails path="/movies/:id" />
                    </Router>
                </div>
            </div>
        );
    }
}