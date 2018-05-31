import { NavState } from "../navigation";

export interface ApplicationState {
    nav: NavState,
}

let defaultState: ApplicationState = {
    nav: {
        activeArea: "home",
        areas: [
            {
                key: "home",
                label: "Home",
                icon: "fas fa-home",
                activeView: { 
                    name: "welcome"
                },
            },
            {
                key: "about",
                label: "About",
                icon: "far fa-question-circle",
                activeView: { 
                    name: "app" 
                }
            }
        ],
    },
}
export default defaultState;