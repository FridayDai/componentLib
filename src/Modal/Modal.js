import React, { Component } from 'react';
import Portal from './portal';
import classNames from 'classnames';
import './Modal.css';

class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'visible': false
        };
    }

    componentDidMount() {
        this.setState({'visible': this.props.visible});
    }

    static getDerivedStateFromProps(nextProps) {
        return {
            'visible': nextProps.visible
        };
    }

    render() {
        return (
            <React.Fragment>
                <Portal visible={this.state.visible}>
                    <div className={classNames('mask', {'hidden': !this.state.visible})}></div>
                    <div className={classNames(
                        'modal-container', 'animated', 'animation-duration', {'flipOutX': !this.state.visible},
                        {'flipInX': this.state.visible}
                    )}>
                        <div className='modal-title'>
                            {this.props.title || 'Title'}
                        </div>
                        <div className='modal-content'>
                            {this.props.content}
                        </div>
                        <div className='modal-footer'>
                            <span className='button modal-cancel' onClick={() => this.onCancel()}>Cancel</span>
                            <span className='button modal-confirm' onClick={() => this.onOK()}>OK</span>
                        </div>
                    </div>
                </Portal>
            </React.Fragment>
        );
    }

    onCancel() {
        if(this.props.onCancel) {
            this.props.onCancel();
        }
        this.setState({'visible': false});
    }

    onOK() {
        if(this.props.onOK) {
            this.props.onOK();
        }
        this.setState({'visible': false});
    }
}

export default Modal;
