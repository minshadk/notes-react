// import ReactDOM from 'react-dom/client';
// import ReactDOM from "react-dom";
// import ReactDOM from "react-dom";
// import {createPortal} from "react-dom";

// import "./App.css";
import "./style.css"

const Modal = (props) => {
  console.log("modal is rendering")
  const { open, children } = props;

  if (!open) return null;
  // return createPortal(children, document.getElementById(wrapperId));?
  // return createPortal(children, document.getElementById("portal"));
  // return ReactDOM.createPortal(
  //   <div>{children}</div>,
  //   document.getElementById("portal")
  // );
  return <div className="modal">{children}</div>;
};

export default Modal;
                                                                                                                             