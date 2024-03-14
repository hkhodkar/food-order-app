import { Fragment } from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const BackDrop = ({hideCart}) => {
    return <div onClick={hideCart} className={classes.backdrop}></div>
};

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalElements = document.getElementById('overlays');

export default function Modal({ children,hideCart }) {
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop hideCart={hideCart} />, portalElements)}
            {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElements)}
        </Fragment>
    )
}