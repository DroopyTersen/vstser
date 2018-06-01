import hub from "../../hub";
import { fetchProjects } from "../../data/api";

let onInit = async function() {
    hideSplash();
    let projects = await fetchProjects();
    if (projects) {
        hub.state.set({ projects });
        hub.cacheState();
    }
};

let hideSplash = function() {
    document.getElementById("splash").classList.add("hidden");
    document.getElementById("root").classList.remove("hidden");
    setTimeout(() => document.getElementById("splash").style.display = "none", 300);
}



hub.on("app:init", onInit);
