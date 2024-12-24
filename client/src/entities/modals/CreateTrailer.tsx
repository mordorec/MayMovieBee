import { useState } from 'react';
import {createTrailer} from "../../shared/api/movieAPI";
import CreateModal from '../../shared/ui/CreateModal/CreateModal';
import s from './inputField.module.css'
import { ModalProps } from '../../shared/types/modal';

const CreateTrailer = ({ show, onHide }: ModalProps) => {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    const addTrailer = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('url', url);
        createTrailer(formData).then(() => onHide());
    };

    if (!show) return null;

    return (
        <CreateModal
            title="Добавить трейлер" 
            onHide={onHide} 
            onConfirm={addTrailer}
        >
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                className={s.inputField}
                placeholder={"Введите название трейлера"}
            />
            <input
                value={url}
                onChange={e => setUrl(e.target.value)}
                className={s.inputField}
                placeholder={"Введите ссылку"}
                type="text"
            />
        </CreateModal>
    );
};

export default CreateTrailer;