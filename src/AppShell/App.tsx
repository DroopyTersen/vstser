import * as React from 'react';
import hub from "../hub";
import "../hub/reactions";
import "./App.scss";
import TabbedNav from "./TabbedNav/TabbedNav";
import Tab from './TabbedNav/Tab';
import { Router, Location } from "@reach/router";
 
import ProjectsView from '../views/Projects/ProjectsView';
import SettingsView from '../views/Settings/SettingsView';
import { faHome, faWrench } from '@fortawesome/fontawesome-free-solid'

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
                            <Tab path="/" icon={faHome} activePath={location.pathname} />
                            <Tab path="/settings" icon={faWrench} activePath={location.pathname} />
                        </TabbedNav>
                    )}
                </Location>
                <div className='content'>
                    <Router>
                        <ProjectsView default path="/projects" projects={hub.state.projects}/>
                        <ProjectsView path="projects/:search" projects={hub.state.projects}/>
                        <ProjectsView path="/:search" projects={hub.state.projects}/>
                        <SettingsView path="/settings" settings={hub.state.settings} />
                    </Router>
                </div>
            </div>
        );
    }
}