import * as React from 'react';
import "./view.scss";
export default class View extends React.PureComponent<ViewProps, {}> {
    render() {
        let { title, subtitle, key } = this.props;
        return (
            <div className={`view view-${key}`}>
                <div className='view-header'>
                    <h1 className='title'>{title}</h1>
                    { subtitle && <div className='subtitle'>{subtitle}</div> }
                </div>
                {this.props.children}
            </div>
        );
    }
}

export interface ViewProps {
    title: string,
    key: string,
    subtitle?:string,
}