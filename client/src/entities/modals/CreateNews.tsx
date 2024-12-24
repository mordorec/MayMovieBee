import { useState } from 'react';
import { createNews } from "../../shared/api/movieAPI";
import CreateModal from '../../shared/ui/CreateModal/CreateModal';
import s from './inputField.module.css'
import { ModalProps } from '../../shared/types/modal';
import { selectFile } from '../../shared/lib/helpers/fileHandler'

const CreateNews = ({ show, onHide }: ModalProps) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const addNews = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('date', date);
        formData.append('description', description);
        if (file) {
            formData.append('img', file);
        }
        console.log(Array.from(formData.entries()));
        createNews(formData).then(() => onHide());
    };

    if (!show) return null;

    return (
        <CreateModal
            title="Добавить новость" 
            onHide={onHide} 
            onConfirm={addNews}
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
                value={description}
                onChange={e => setDescription(e.target.value)}
                className={s.inputField}
                placeholder={"Введите описание"}
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

export default CreateNews;