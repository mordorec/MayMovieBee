import { useEffect, useState, ChangeEvent } from 'react';
import useStore from '../../shared/lib/hooks/useStore';
import { observer } from "mobx-react-lite";
import {createDirector, fetchCountries} from "../../shared/api/movieAPI";
import s from './inputField.module.css'
import CreateModal from '../../shared/ui/CreateModal/CreateModal';
import SearchDropdown from '../../features/SearchDropdown/SearchDropdown';
import { ModalProps } from '../../shared/types/modal';
import { CountryEntity } from '../../shared/types/entities';
import { selectFile } from '../../shared/lib/helpers/fileHandler'

const CreateDirector = observer(({ show, onHide }: ModalProps) => {
    const { store } = useStore();
    const [name, setName] = useState('');
    const [birth, setBirth] = useState('');
    const [height, setHeight] = useState('');
    const [town, setTown] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [countrySearch, setCountrySearch] = useState('');

    useEffect(() => {
        fetchCountries().then(data => store.setCountries(data));
    }, [store]);

    const handleHeightChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '' || /^\d*\.?\d*$/.test(value)) {
            setHeight(value);
        }
    };

    const addDirector = () => {
        if (!store.selectedCountry) return;
        const formData = new FormData();
        formData.append('name', name);
        formData.append('height', height);
        formData.append('birth', birth);
        formData.append('town', town);
        if (file) {
            formData.append('img', file);
        }
        formData.append('country_id', `${store.selectedCountry.id}`);
        createDirector(formData).then(() => onHide());
    };

    if (!show) return null;

    return (
        <CreateModal
            title="Добавить режиссера" 
            onHide={onHide} 
            onConfirm={addDirector}
        >
            <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder={"Введите имя режиссера"}
                className={s.inputField}
            />
            <input
                value={birth}
                onChange={e => setBirth(e.target.value)}
                className={s.inputField}
                placeholder="Введите дату рождения"
                type="date"
            />
            <input
                value={height}
                onChange={handleHeightChange}
                className={s.inputField}
                placeholder="Введите рост"
                type="text"
            />
            <input
                value={town}
                onChange={e => setTown(e.target.value)}
                className={s.inputField}
                placeholder="Введите город рождения"
                type="text"
            />
            <input
                type="file"
                onChange={selectFile(setFile)}
                className={s.inputField}
            />
            <SearchDropdown
                searchValue={countrySearch}
                onSearchChange={e => setCountrySearch(e.target.value)}
                items={store.countries}
                onItemSelect={(country: CountryEntity) => {
                    store.setSelectedCountry(country);
                    setCountrySearch(country.name);
                }}
                placeholder="Страна"
            />
        </CreateModal>
    );
});

export default CreateDirector;