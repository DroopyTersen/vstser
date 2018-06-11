import { VSTSProject, Settings } from "../data/interfaces";

export interface ApplicationState {
    projects: VSTSProject[],
    pinnedProjects: string[],
    settings: Settings,
    status: {
        isOnline: boolean
    }
}

let defaultState: ApplicationState = {
    projects:[],
    pinnedProjects: [],
    settings: {
        account: "",
        personalToken: "",
    },
    status: {
        isOnline: true
    }
}
export default defaultState;