import React from 'react';

export default class PrevNextButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a className={"btn btn-default btn-circle btn-prevnext btn-" + this.props.style} onClick={this.props.onClick}>
                <span className={"glyphicon glyphicon-triangle-" + this.props.style}></span>
            </a>
        );
    }

}