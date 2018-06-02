import * as React from 'react';
import View, { RouterView } from "../View/View";
import { VSTSProject } from '../../data/interfaces';
import { searchProjects } from '../../data/api';
import ProjectItem from './ProjectItem';
import "./ProjectsView.scss";
import ProjectFilter from './ProjectFilter';

export default class ProjectsView extends React.PureComponent<any, {}> {
    state = {
        filterText: this.props.search
    }
    onFilter = (filterText) => {
        if (this.state.filterText !== filterText) {
            this.setState({ filterText });
        }
    }
    render() {
        let filteredProjects = searchProjects(this.props.projects, this.state.filterText);
        return (
            <View
                title="VSTS'er"
                subtitle="Because the Project Search in VSTS kinda sucks..."
                id="projects"
            >
                <ProjectFilter searchText={this.state.filterText} onChange={this.onFilter} />
                <div className='list'>
                    {filteredProjects.map(p => <ProjectItem key={p.id} project={p} />)}
                </div>
            </View>
        );
    }
}

export interface ProjectsViewProps extends RouterView {
    projects: VSTSProject[],
    search?:string,
}