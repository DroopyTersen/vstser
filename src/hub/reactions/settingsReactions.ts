import hub from "../../hub";
import { refreshData } from "./appReactions";

const handleAccountChange = function(account) {
    hub.state.settings.set({ account });
    hub.cacheState();
    if (account && account.length > 3) {
        refreshData(true);
    } else {
        hub.state.set({ projects: []})
        hub.cacheState();
    }
}
const handleTokenChange = async function(personalToken) {
    hub.state.settings.set({ personalToken });
    hub.cacheState();
    try {
        await refreshData(true);    
        if (hub.state.projects.length) window.location.href = "/";
    } catch (err) {
        
    }
}
const handleSettingsError = function() {
    hub.state.set({ projects:[]})
    hub.cacheState();
    if (window.location.pathname !== "/settings") {
        window.location.href = "/settings";
    }
}
hub.on("settings:accountChange", handleAccountChange);
hub.on("settings:tokenChange", handleTokenChange);
hub.on("settings:error", handleSettingsError);