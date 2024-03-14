import { Fragment } from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const BackDrop = () => {
    return <div className={classes.backdrop}></div>
};

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalElements = document.getElementById('overlays');

export default function Modal({ show, children }) {
    return (
        <Fragment>
            {show && ReactDOM.createPortal(<BackDrop />, portalElements)}
            {show && ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElements)}
        </Fragment>
    )
}