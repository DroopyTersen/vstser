import * as React from 'react';
import { NavRoute } from '.';

export function RouteNotFoundView() {
    return (
        <div>Uh oh... Route not found.</div>
    )
};

export default class Router extends React.Component<RouterProps, {}> {

    render() {
        let { route, routes } = this.props;
        let view = (routes[route.area] && routes[route.area][route.view])
            ? routes[route.area][route.view]
            : RouteNotFoundView
        return this.props.render(view, route)
    }
}

export interface RouterProps {
    render: (ViewComponent, route) => JSX.Element
    route: NavRoute,
    routes: any,
}