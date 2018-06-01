import * as React from 'react';

export default class ProjectFilter extends React.PureComponent<ProjectFilterProps, {}> {
    input: HTMLInputElement;
    componentDidMount() {
        if (this.input) {
            this.input.focus();
        }
    }
    onInput = (e) => {
        if (e && e.currentTarget) {
            this.props.onChange(e.currentTarget.value);
        }
    }
    render() {
        return (
            <div className='filter'>
                <input 
                    value={this.props.searchText || ""}
                    onInput={this.onInput}
                    placeholder="Filter Projects..." 
                    ref={el => this.input = el} />
            </div>
        );
    }
}

export interface ProjectFilterProps {
    searchText?:string,
    onChange:(text:string) => void;
}