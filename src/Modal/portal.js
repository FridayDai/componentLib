/**
 * Created by yi.dai on 2018/9/27.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const element = document.createElement('div');

export default class Portal extends Component {
    constructor(props) {
        super(props);
    }

    static getDerivedStateFromProps(nextProps) {
        if(nextProps.visible) {
            document.body.appendChild(element); // 多次填加只会添加一次
        }
        return nextProps;
    }

    render() {
        const {children} = this.props;
        return ReactDOM.createPortal(children, element);
    }
}

Portal.defaultProps = {
    'visible': false
};
