import * as React from 'react';
import { NavRoute } from '.';
import posed, { PoseGroup } from 'react-pose';

export function RouteNotFoundView() {
    return (
        <div>Uh oh... Route not found.</div>
    )
};

const AnimatedItem = posed.div({
    enter: { opacity: 1, x:"0%", width:"100%", transition: { duration: 125 } },
    exit: { opacity: 0, x:"-100%", width:"100%" }
  })
export default class Router extends React.Component<RouterProps, {}> {

    render() {
        let { route, routes } = this.props;
        let view = (routes[route.area] && routes[route.area][route.view])
            ? routes[route.area][route.view]
            : RouteNotFoundView
        
        return (
            <PoseGroup>
                {[
                    <AnimatedItem key={route.area + route.view}>
                        {this.props.render(view, route)}
                    </AnimatedItem>
                ]}
             </PoseGroup>
        );
    }
}

export interface RouterProps {
    render: (ViewComponent, route) => JSX.Element
    route: NavRoute,
    routes: any,
}