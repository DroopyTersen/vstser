import hub from "../../hub";
import { NavRoute, parseRoute, updateUrl } from "../../navigation";

let onNavigate = function(route:NavRoute) {
    return _updateRoute(route);
}

let onChangeArea = function(area:string) {
    let targetArea = hub.state.nav.areas.find(a => a.key === area)
    if (!targetArea) return null;
    let route : NavRoute = {
        area,
        view: targetArea.activeView.name,
        params: targetArea.activeView.params
    };
    return _updateRoute(route);
}

let validateRoute = function(route:NavRoute) : boolean {
    if (!route || !route.area || !route.view) return false;
    return !!(hub.state.nav.areas.find(a => a.key === route.area))
}

export let _updateRoute = function(route:NavRoute, shouldUpdateUrl=true) {
    if (!validateRoute) throw new Error("Navigation Error: Invalid Route");
    let targetArea = hub.state.nav.areas.find(a => a.key === route.area);

    targetArea.set({ activeView: { name: route.view, params: route.params }});
    hub.state.nav.set({ activeArea: route.area});
    if (shouldUpdateUrl) updateUrl(route);
}

// Handle Browser back button
window.onpopstate = function(event) {
    if (event.state && event.state.view) {
        _updateRoute(parseRoute(), false);
    } else {
        window.history.back();
    }
};

hub.on("nav:navigate", onNavigate);
hub.on("nav:changeArea", onChangeArea);
