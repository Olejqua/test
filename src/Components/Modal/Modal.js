import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Button from '../Button/Button';

import './Modal.css';

class Modal extends Component {

    componentWillMount() {
        this.root = document.createElement('div');
        document.body.appendChild(this.root);
    }

    componentWillUnmount() {
        document.body.removeChild(this.root);
    }

    render() {
        return ReactDOM.createPortal(
            <div className="modal">
                <div>
                    <span onClick={this.props.onClose}><Button className="clear icon" icon="clear"/></span>
                    {this.props.children}
                </div>
            </div>,
            this.root
        );
    }
}


export default Modal;