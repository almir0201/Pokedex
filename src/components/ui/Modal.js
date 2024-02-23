import React from 'react';
import { IoClose } from 'react-icons/io5';

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-dark bg-opacity-60 z-20">
      <div>
        <IoClose size={60} className="ml-auto cursor-pointer" onClick={onClose} />
        <div>{children}</div>
      </div>
    </div>
  );
};
