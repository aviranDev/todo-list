import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

const MODEAL_STYLE = {
  width: '1000px',
  borderRadius: '5%',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFFFEA',
  padding: `50px`,
  zIndex: 1000,
};

const OVERPLAY_STYLE = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0, .7)',
  zindex: 1000,
};

const BUTTON = {
  background: 'none',
  float: 'right',
  color: 'inherit',
  border: 'none',
  padding: 0,
  font: 'inherit',
  cursor: 'pointer',
  outline: 'inherit',
  textDecoration: 'none',
}

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  return (
    <>
      <div style={OVERPLAY_STYLE}></div>
      <div style={MODEAL_STYLE}>
        <button style={BUTTON} onClick={onClose}><AiOutlineClose size={45} /></button>
        {children}
      </div>
    </>
  );
};

export default Modal;