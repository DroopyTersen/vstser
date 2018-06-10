import * as React from 'react';
import View, { RouterView } from "../View/View";
import { VSTSProject } from '../../data/interfaces';
import { searchProjects } from '../../data/api';
import ProjectItem from './ProjectItem';
import "./ProjectsView.scss";
import ProjectFilter from './ProjectFilter';
import ProjectItems from './ProjectItems';

export default class ProjectsView extends React.PureComponent<ProjectsViewProps, {}> {
    state = {
        filterText: this.props.search
    }
    onFilter = (filterText) => {
        if (this.state.filterText !== filterText) {
            this.setState({ filterText });
        }
    }
    render() {
        let pinned = this.props.pinnedProjects || [];
        let filteredProjects = searchProjects(this.props.projects, this.state.filterText, pinned);
        return (
            <View
                title="VSTSer"
                subtitle="Because the Project Search in VSTS kinda sucks..."
                id="projects"
            >
                <ProjectFilter searchText={this.state.filterText} onChange={this.onFilter} />
                <ProjectItems projects={filteredProjects} pinned={pinned} />
            </View>
        );
    }
}

export interface ProjectsViewProps extends RouterView {
    projects: VSTSProject[],
    pinnedProjects: string[],
    search?:string,
}