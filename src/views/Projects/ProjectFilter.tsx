import * as React from 'react';
import { debounce } from '../../utils/utils';

export default class ProjectFilter extends React.Component<ProjectFilterProps, {}> {
    input: HTMLInputElement;
    state = {
        value: this.props.searchText || ""
    }
    componentDidMount() {
        if (this.input) {
            this.input.focus();
        }
    }
    debouncedBubble = debounce((val) => {
        this.props.onChange(val);
    }, 100) as any

    onChange = (e) => {
        if (e && e.currentTarget) {
            this.setState({ value: e.currentTarget.value })
            this.debouncedBubble(e.currentTarget.value);
        }
    }
    render() {
        return (
            <div className='filter'>
                <input 
                    value={this.state.value}
                    onChange={this.onChange}
                    placeholder="Filter"
                    ref={el => this.input = el} />
            </div>
        );
    }
}

export interface ProjectFilterProps {
    searchText?:string,
    onChange:(text:string) => void;
}