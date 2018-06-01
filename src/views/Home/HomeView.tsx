import * as React from 'react';
import View, { RouterView } from "../View/View";

export default class HomeView extends React.PureComponent<HomeViewProps, {}> {
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

export interface HomeViewProps extends RouterView {
}