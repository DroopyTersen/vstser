import * as React from 'react';
import View from "../View/View";

export default class WelcomeView extends React.PureComponent<WelcomeViewProps, {}> {
    render() {
        return (
            <View
                title="Home"
                subtitle="welcome to the app!"
                id="welcome"
            >
            </View>
        );
    }
}

export interface WelcomeViewProps {
    //props
}