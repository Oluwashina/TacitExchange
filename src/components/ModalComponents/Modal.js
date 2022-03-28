import React, {useEffect} from 'react';
import './modal.css'
import { CSSTransition } from 'react-transition-group'
import Circle from "../../assets/images/closeIcon.svg";

const Modal = (props) => {

  useEffect(() => {
    if (props.show) {
       document.body.classList.add("modal-open");
    }
    else {
       document.body.classList.remove("modal-open");
    }
   
  }, [props.show]);

  return (
    <>
      <CSSTransition
        in={props.show}
        unmountOnExit
        timeout={{ enter: 0, exit: 300 }}
      >
        <div className="modal" onClick={props.onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-close-icon" onClick={props.onClose}>
              <img
                src={Circle}
                width="40"
                height="40"
                className=""
                alt="Close icon"
              />
            </div>

            <div className="modal-content-layout">
              <h5 className="modal-title">{props.title}</h5>

              <div className="">
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
 
export default Modal;