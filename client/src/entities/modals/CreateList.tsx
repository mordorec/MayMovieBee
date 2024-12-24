import { useState, useEffect } from 'react';
import { createList, fetchMovies, addMovieToList } from "../../shared/api/movieAPI";
import CreateModal from '../../shared/ui/CreateModal/CreateModal';
import SearchDropdown from '../../features/SearchDropdown/SearchDropdown';
import ItemRoster from '../../features/ItemRoster/ItemRoster';
import { observer } from "mobx-react-lite";
import useStore from '../../shared/lib/hooks/useStore';
import s from './inputField.module.css'
import { ModalProps } from '../../shared/types/modal';
import { MovieEntity } from '../../shared/types/entities';
import { selectFile } from '../../shared/lib/helpers/fileHandler'

const CreateList = observer(({ show, onHide }: ModalProps) => {
    const { store } = useStore();
    const [name, setName] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [movies, setMovies] = useState<MovieEntity[]>([]);
    const [movieSearch, setMovieSearch] = useState('')

    const addList = () => {
        const formData = new FormData();
        formData.append('name', name);
        if (file) {
            formData.append('img', file);
        }

        createList(formData)
            .then(list => {
                movies.forEach(movie => {
                    store.addMovieToList(movie.id, list.id);
                });
                onHide();
            })
            .catch(err => console.error('Ошибка при создании списка:', err));
    };

    useEffect(() => {
        fetchMovies().then(data => store.setMovies(data.rows));
    }, [store]);

    const addMovieHandler = (movie: MovieEntity) => {
        if (!movies.some(existingMovie => existingMovie.id === movie.id)) {
            setMovies(prev => [...prev, movie]);
        }
    };

    const removeMovie = (id: number) => {
        setMovies(prev => prev.filter(movie => movie.id !== id));
    };

    if (!show) return null;

    return (
        <CreateModal
            onHide={onHide}
            title="Добавить список"
            onConfirm={addList}
        >
            <input
                value={name}
                onChange={e => setName(e.target.value)}
                className={s.inputField}
                placeholder={"Введите название списка"}
            />
            <input
                className={s.inputField}
                type="file"
                onChange={selectFile(setFile)}
            />
            <SearchDropdown
                searchValue={movieSearch}
                onSearchChange={e => setMovieSearch(e.target.value)}
                items={store.movies}
                onItemSelect={addMovieHandler}
                placeholder="Фильм из списка"
            />
            <ItemRoster items={movies} onRemove={removeMovie} />
        </CreateModal>
    );
});

export default CreateList;