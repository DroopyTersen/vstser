import { VSTSProject } from "../data/interfaces";

export interface ApplicationState {
    projects: VSTSProject[]
}

let defaultState: ApplicationState = {
    projects:[]
}
export default defaultState;