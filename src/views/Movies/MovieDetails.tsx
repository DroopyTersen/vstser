import * as React from 'react';
import View, { RouterView } from "../View/View";

export default class MovieDetails extends React.PureComponent<MovieDetailsProps, {}> {
    render() {
        return (
            <View
                title={this.props.id}
                subtitle="Movie Details"
                id="movie-details"
            >
            </View>
        );
    }
}

export interface MovieDetailsProps extends RouterView {
    id?:string,
}