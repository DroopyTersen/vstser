import hub from "../../hub";
import { fetchProjects } from "../../data/api";

let onInit = async function() {
    hub.state.status.set({
        isOnline: navigator.onLine
    })
    hideSplash();
    refreshData();
};

export let refreshData = async function(clearFirst=false) {
    if (clearFirst) {
        hub.state.set({ projects: [] })
        hub.cacheState();       
    }
    if (hub.state.status.isOnline) {
        let projects = await fetchProjects();
        if (projects) {
            hub.state.set({ projects });
            hub.cacheState();
        }
    }
}
let hideSplash = function() {
    document.getElementById("splash").classList.add("hidden");
    document.getElementById("root").classList.remove("hidden");
    setTimeout(() => document.getElementById("splash").style.display = "none", 300);
}

let handleNetworkChange = function() {
    hub.state.status.set({
        isOnline: navigator.onLine
    })
}

window.addEventListener('online',  handleNetworkChange);
window.addEventListener('offline', handleNetworkChange);
hub.on("app:init", onInit);
hub.on("app:refreshData", refreshData);
