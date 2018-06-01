import request from "./vstsRequest";
import { VSTSProject } from "./interfaces";


export const fetchProjects = async function() : Promise<VSTSProject[]> {
    let resp = await request("/projects?$top=10000");
    if (resp && resp.value) {
        return resp.value
            .map(({name, id }) => ({ name, id }))
            .sort((a, b) => {
                if (a.name === b.name) return 0;
                return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
            })
    }
    throw new Error("Invalide Response: fetchProjects");
}

export const searchProjects = function(projects:VSTSProject[], searchText = "") {
    let results = [ ...projects ];
    if (searchText) {
        let rankedResults = projects.reduce((results, project) => {
            if (project.name.toLowerCase().startsWith(searchText)) {
                results.firstClass.push(project);
            } else if (project.name.toLowerCase().indexOf(searchText) > -1) {
                results.secondClass.push(project);
            }
            return results;
        }, { firstClass:[], secondClass:[]})
        results = [ ...rankedResults.firstClass, ...rankedResults.secondClass ]
    }
    return results.slice(0,50);
}