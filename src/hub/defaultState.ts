import { VSTSProject, Settings } from "../data/interfaces";

export interface ApplicationState {
    projects: VSTSProject[],
    pinnedProjects: string[],
    settings: Settings
}

let defaultState: ApplicationState = {
    projects:[],
    pinnedProjects: [],
    settings: {
        account: "",
        personalToken: "",
    }
}
export default defaultState;