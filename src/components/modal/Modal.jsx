import ReactDOM from 'react-dom/client';


const Modal = (props) => {
  const { open, children } = props;
  if (!open) return null;
  return ReactDOM.createPortal(
    <div>{children}</div>,
    document.getElementById("portal")
  );
};

export default Modal;
