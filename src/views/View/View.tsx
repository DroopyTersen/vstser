import * as React from 'react';
import "./View.scss";

export default class View extends React.PureComponent<ViewProps, {}> {
    render() {
        let { title, subtitle, id } = this.props;
        return (
            <div className={`view view-${id}`}>
                <div className='view-header'>
                    <h1 className='title'>{title}</h1>
                    { subtitle && <div className='subtitle'>{subtitle}</div> }
                </div>
                <div>
                    {this.props.children}
                </div>
            </div> 
        );
    }
}

export interface ViewProps {
    title: string,
    id: string,
    subtitle?:string,
    // path:string,
}

export interface RouterView {
    path:string,
    default?:boolean
}