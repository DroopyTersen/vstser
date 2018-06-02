import { VSTSProject, Settings } from "../data/interfaces";

export interface ApplicationState {
    projects: VSTSProject[]
    settings: Settings
}

let defaultState: ApplicationState = {
    projects:[],
    settings: {
        account: "",
        personalToken: "",
    }
}
export default defaultState;