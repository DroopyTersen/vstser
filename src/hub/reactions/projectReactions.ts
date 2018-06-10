import hub from "../../hub";

const onTogglePin = function(projectName:string) {
    let exists = hub.state.pinnedProjects.find(p => p === projectName);
    let pinnedProjects = hub.state.pinnedProjects.filter(p => p !== projectName);
    if (!exists) {
        pinnedProjects = [ ...pinnedProjects, projectName ]
    }
    hub.state.set({ pinnedProjects });
    hub.cacheState();
}

hub.on("projects:togglePin", onTogglePin);