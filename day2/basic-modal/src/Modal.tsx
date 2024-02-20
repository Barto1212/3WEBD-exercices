import { createPortal } from "react-dom";
import "./modal.css";
import { useEffect, useRef } from "react";


export function Modal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const injectHere = document.querySelector("#modal-root");

  if (!injectHere) return null;
  if (!isOpen) return null;
  return createPortal(<ModalComponent onClose={onClose} />, injectHere);
}

const ModalComponent = ({ onClose }: { onClose: () => void }) => {
  const stopClickPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={stopClickPropagation}>
        {/* Add an overlay div with onClick = handleClose */}
        <div className="container">
          <h2>Ceci est un modal</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            eligendi perspiciatis natus consectetur dignissimos voluptatum esse
            neque, laborum fugit, nam tenetur cum itaque sequi explicabo
            veritatis quam soluta distinctio recusandae?
          </p>
        </div>
        <input ref={inputRef} type="text" />
        <button onClick={onClose}>Close modal</button>
      </div>
    </div>
  );
};
