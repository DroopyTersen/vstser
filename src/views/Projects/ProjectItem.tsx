import * as React from 'react';
import { VSTSProject } from '../../data/interfaces';
import hub from "../../hub";
const faThumbtack = require("@fortawesome/fontawesome-free-solid/faThumbtack")
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const BASE_URL = "https://skyline.visualstudio.com"
const getLinks = function(project) {
    return {
        get code() {
            return `${BASE_URL}/${project.name}/_git` 
        },
        get backlog() {
            return `${BASE_URL}/${project.name}/_backlogs?level=Features&showParents=true&_a=backlog` 
        },
        get board() {
            return `${BASE_URL}/${project.name}/_backlogs/board` 
        }
    }
}

export default class ProjectItem extends React.PureComponent<ProjectItemProps, {}> {
    renderPin = () => {
        let cssClass = 'pin ' + (this.props.isPinned ? "pinned" : "")
        return (
            <div className={cssClass} onClick={this.togglePin}>
                <FontAwesomeIcon icon={faThumbtack} />
            </div>
        );
    }
    togglePin = () => {
        hub.trigger("projects:togglePin", this.props.project.name);
    }
    render() {
        let links = getLinks(this.props.project);
        return (
            <div className='item' key={this.props.project.id}>
                {this.renderPin()}
                <div className='title truncate'>{this.props.project.name}</div>
                <div className='links'>
                    <div><a target='_blank' href={links.code}>Code</a></div>
                    <div><a target='_blank' href={links.backlog}>Backlog</a></div>
                    <div><a target='_blank' href={links.board}>Board</a></div>
                </div>
            </div>
        );
    }
}

export interface ProjectItemProps {
    project: VSTSProject
    isPinned: boolean
}