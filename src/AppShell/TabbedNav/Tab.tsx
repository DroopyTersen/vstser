import * as React from 'react';
import { NavArea } from '../../navigation';
import { getClassName } from '../../utils';
import hub from "../../hub";
export default class Tab extends React.PureComponent<TabProps, {}> {
    onClick = (e) => {
        hub.trigger("nav:changeArea", this.props.area.key);
    }
    render() {
        let { area, activeArea } = this.props;
        let className = getClassName(["tab", area.key === activeArea ? "selected" : ""]);
        return (
            <div className={className} onClick={this.onClick}>
                <i className={area.icon}></i>
            </div>
        );
    }
}

export interface TabProps {
    area: NavArea,
    activeArea: string,
}