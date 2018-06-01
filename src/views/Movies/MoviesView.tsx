import * as React from 'react';
import View, { RouterView } from "../View/View";
import { Link } from "@reach/router";
export default class MoviesView extends React.PureComponent<MoviesViewProps, {}> {
    render() {
        return (
            <View
                title="Movies"
                id="movies"
            >
                <Link to="gladiator">Gladiator</Link>
                <Link to="the-matrix">The Matrix</Link>
            </View>
        );
    }
}

export interface MoviesViewProps extends RouterView {
}