import React, {
  useEffect,
  useCallback,
  ReactNode,
  KeyboardEvent,
  MouseEvent,
} from "react";
import { createPortal } from "react-dom";
import CloseButton from "Utils/CloseBtn/CloseBtn";
import css from "./modal.module.css";

const modalRoot = document.getElementById("modal-root") as HTMLElement;

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  const closeModal = useCallback(
    (event: MouseEvent<HTMLDivElement> | KeyboardEvent) => {
      if (
        ("key" in event && event.key === "Escape") ||
        ("target" in event && event.target === event.currentTarget)
      ) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const handleKeyDown = closeModal as unknown as EventListener;

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);
  if (!isOpen) return null;
  return createPortal(
    <div
      onClick={closeModal as (event: MouseEvent<HTMLDivElement>) => void}
      className={css.modal_wrapper}
    >
      <div className={css.modal_content}>
        <h2 className={css.modalTitle}>{title}</h2>

        <CloseButton onClose={onClose} />
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
