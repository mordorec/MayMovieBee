import s from './CreateModal.module.css';
import { FC } from 'react';
import { CreateModalProps } from '../../types/modal';

const CreateModal: FC<CreateModalProps> = ({ title, children, onHide, onConfirm }) => {
    return (
        <div className={s.modalOverlay} onMouseDown={onHide}>
            <div className={s.modalContent} onMouseDown={(e) => e.stopPropagation()}>
                <div className={s.modalHeader}>
                    <h2 className={s.modalTitle}>{title}</h2>
                    <button className={s.closeButton} onClick={onHide}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#5f6368">
                            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                        </svg>
                    </button>
                </div>
                <div className={s.modalBody}>{children}</div>
                <div className={s.modalFooter}>
                    <button className={s.button} onClick={onHide}>Закрыть</button>
                    <button className={s.button} onClick={onConfirm}>Добавить</button>
                </div>
            </div>
        </div>
    );
};

export default CreateModal;