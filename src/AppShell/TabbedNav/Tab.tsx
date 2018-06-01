import * as React from 'react';
import { Link } from "@reach/router";

export default class Tab extends React.PureComponent<TabProps, {}> {
    render() {
        let { path, activePath, icon } = this.props;
        let className = [
                "tab", 
                (activePath || "").toLowerCase().startsWith(path.toLowerCase()) 
                    ? "selected" 
                    : ""
                ].filter(c => c).join(" ");
        return (
            <Link to={path}>
                <div className={className}>
                    <i className={icon}></i>
                </div>
            </Link>
        );
    }
}

export interface TabProps {
    path: string,
    activePath?: string,
    icon: string
}