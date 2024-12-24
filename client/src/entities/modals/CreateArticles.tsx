import { useState } from 'react';
import {createArticles} from "../../shared/api/movieAPI";
import s from './inputField.module.css'
import CreateModal from '../../shared/ui/CreateModal/CreateModal';
import { ModalProps } from '../../shared/types/modal';
import { selectFile } from '../../shared/lib/helpers/fileHandler'

const CreateArticles = ({ show, onHide }: ModalProps) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [short_description, setShortDescription] = useState('');
    const [long_description, setLongDescription] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const addArticles= () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('date', date);
        formData.append('short_description', short_description);
        formData.append('long_description', long_description);
        if (file) {
            formData.append('img', file);
        }
        createArticles(formData).then(() => onHide());
    };

    if (!show) return null;

    return (
        <CreateModal
            title="Добавить статью" 
            onHide={onHide} 
            onConfirm={addArticles}
        >
            <input
                value={name}
                onChange={e => setName(e.target.value)}
                className={s.inputField}
                placeholder={"Введите заголовок"}
            />
            <input
                value={date}
                onChange={e => setDate(e.target.value)}
                className={s.inputField}
                placeholder={"Введите дату публикации"}
                type="date"
            />
            <textarea
                value={short_description}
                onChange={e => setShortDescription(e.target.value)}
                className={s.inputField}
                placeholder={"Введите короткое описание"}
                style={{ overflow: 'hidden', resize: 'none' }}
            />
            <textarea
                value={long_description}
                onChange={e => setLongDescription(e.target.value)}
                className={s.inputField}
                placeholder={"Введите длинное описание"}
                style={{ overflow: 'hidden', resize: 'none' }}
            />
            <input
                className={s.inputField}
                type="file"
                onChange={selectFile(setFile)}
            />
        </CreateModal>
    );
};

export default CreateArticles;