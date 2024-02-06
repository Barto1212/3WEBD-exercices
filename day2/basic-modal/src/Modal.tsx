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
  return createPortal(
    <div className="modal">
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
    </div>,
    injectHere
  );
}
