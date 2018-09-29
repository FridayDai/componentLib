import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Modal from './Modal/Modal';

class APP extends Component{
    constructor(props) {
        super(props);

        this.state = {
            'visible': false
        };
    }

    componentDidMount() {
        window.addEventListener('mousedown', function() {
            var e = event || window.event;
            console.log({'x': e.screenX, ' y': e.screenY});
        });
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({'visible': !this.state.visible})}>click me</button>
                <Modal
                    visible={this.state.visible}
                    onCancel={() => this.setState({'visible': false})}
                    onOK={() => this.setState({'visible': false})}
                />
            </div>
        );
    }
}

ReactDOM.render(<APP />, document.getElementById('root'));
