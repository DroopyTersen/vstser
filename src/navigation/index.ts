
import * as queryStringUtils from "querystring";

const DEFAULT_ROUTE : NavRoute = {
    area: "home",
    view: "welcome"
}

// INTERFACES
export interface NavRoute {
    area: string,
    view: string,
    params?: any,
}


export interface NavArea {
    key:string,
    label: string,
    icon: string,
    hidden?: boolean,
    activeView?: {
        name: string,
        params?: any,
    },
}

export interface NavState {
    activeArea: string,
    areas: NavArea[]
}

export function updateUrl(route:NavRoute, stateParams?:any) {
    let newUrl = stringifyRoute(route);
    window.history.pushState({...route, ...stateParams}, `Mohanna`, newUrl);
}

export function stringifyRoute(route:NavRoute) : string {
    if (!route || !route.area || !route.view) throw new Error("Navigation Error: Invalid Route")

    let { area, view, params} = route;
    return `/${area}/${view}${params? "?" + queryStringUtils.stringify(params) : ""}`;
}

export function parseRoute() : NavRoute {
    let route = parsePath(window.location.pathname);
    if (route) {
        route.params = parseParams(window.location.search);
    } else {
        route = DEFAULT_ROUTE;
    }
    return route;
}

function parsePath(path:string) : NavRoute {
    try {
        if (!path) return DEFAULT_ROUTE;
        // Remove first slash, lowercase, then split on slashes
        let parts = path.substr(1).toLowerCase().split("/");
        if (parts.length < 2) return DEFAULT_ROUTE;
     
        return { area: parts[0], view: parts[1] };
    } catch(ex) {
        return null;
    }
}

export function getRoute(nav:NavState) {
    let targetArea = nav.areas.find(a => a.key === nav.activeArea)
    if (!targetArea) return null;
    let route : NavRoute = {
        area: targetArea.key,
        view: targetArea.activeView.name,
        params: targetArea.activeView.params
    };
    return route;
}

function parseParams(queryString:string) : any {
    if (!queryString) return null;
    if (queryString.startsWith("?")) queryString = queryString.substr(1);
    let params:any = queryStringUtils.parse(queryString);
    if (params) {
        Object.keys(params).forEach(key => {
            try {
                // Try to convert integer strings to actual Ints
                if (/^\d+$/.test(params[key])) {
                    var num = parseInt(params[key], 10);
                    if (num) params[key] = num;
                }
            } catch(ex) {
                //nevermind
            }
        })
    }
    return params;
}
