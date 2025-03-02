"use client";
import styles from "@/styles/main.module.scss";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
        <button className={styles.closeButton} onClick={onClose}>
          COLLAPSE
        </button>
      </div>
    </div>
  );
};

export default Modal;
