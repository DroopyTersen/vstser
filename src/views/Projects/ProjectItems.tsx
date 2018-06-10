import * as React from "react";
import posed, { PoseGroup } from 'react-pose'
import { VSTSProject } from "../../data/interfaces";
import ProjectItem from "./ProjectItem";

const AnimatedItem = posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  })
export default function({ projects, pinned} : ProjectItemsProps ) {
    let pinnedProjects = projects.filter(p => pinned.indexOf(p.name) > -1);
    let unpinnedProjects = projects.filter(p => pinned.indexOf(p.name) < 0);

    return (
        <div className='list'>
            <PoseGroup>
                {projects.map(p =>(
                    <AnimatedItem key={p.id}>
                        <ProjectItem project={p} isPinned={pinned.indexOf(p.name) > -1}/>
                    </AnimatedItem>
                ))}
            </PoseGroup>
        </div>
    );
}

export interface ProjectItemsProps {
    projects: VSTSProject[],
    pinned: string[]
}