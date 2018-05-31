import * as React from 'react';
import View from "../View/View"
export default class AboutView extends React.PureComponent<AboutViewProps, {}> {
    render() {
        return (
            <View title='About' id='about'></View>
        );
    }
}

export interface AboutViewProps {
    //props
}