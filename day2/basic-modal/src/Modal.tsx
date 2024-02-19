import { createPortal } from "react-dom";
import "./modal.css";
import { useEffect } from "react";

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
  useEffect(() => {
    const closingCallback = (e: MouseEvent) => {
      console.log(e.target);
      onClose();
    };
    document.addEventListener("click", closingCallback);
    return document.removeEventListener("click", closingCallback);
  }, []);
  return (
    <div className="modal">
      {/* Add an overlay div with onClick = handleClose */}
      <div className="container">
        <h2>Ceci est un modal</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          eligendi perspiciatis natus consectetur dignissimos voluptatum esse
          neque, laborum fugit, nam tenetur cum itaque sequi explicabo veritatis
          quam soluta distinctio recusandae?
        </p>
      </div>
      <button onClick={onClose}>Close modal</button>
    </div>
  );
};
