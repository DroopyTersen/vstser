import * as React from 'react';

export default class AsyncImage extends React.PureComponent<AsyncImageProps, {}> {
    img:HTMLImageElement;
    static defaultProps = {
        text: "...",
        width: 250,
        height: 250,
    }
    componentDidMount() {
        let asyncImg = document.createElement("img");
        asyncImg.onload = () => {
            if (this && this.img && this.props) {
                this.img.src = this.props.src;
            }
        }
        asyncImg.src = this.props.src;
    }
    render() {
        let { width, height, src, text } = this.props;
        const placeholder = `https://via.placeholder.com/${width}x${height}?text=${encodeURIComponent(text)}`;
        return <img src={placeholder} ref={el => this.img = el } />
    }
}

export interface AsyncImageProps {
    src: string,
    width?: number,
    height?: number,
    text?: string,
}