import * as React from 'react';
import { NavState, NavArea } from '../../navigation';
import Tab from "./Tab";

export default class TabbedNav extends React.PureComponent<TabbedNavProps, {}> {
    render() {
        let { areas, activeArea } = this.props.nav;
        return (
            <div className='tabbed-nav'>
                {areas.filter(a => a.hidden !== true).map(a => <Tab key={a.key} area={a} activeArea={activeArea} />)}
            </div>
        );
    }
}

export interface TabbedNavProps {
    nav: NavState,
}