import { useEffect, useState, ChangeEvent } from 'react'; 
import useStore from '../../shared/lib/hooks/useStore';
import { observer } from "mobx-react-lite";
import { createMovie, fetchCountries, fetchGenres, fetchDirectors, fetchActors } from "../../shared/api/movieAPI";
import s from './inputField.module.css'
import CreateModal from '../../shared/ui/CreateModal/CreateModal';
import SearchDropdown from '../../features/SearchDropdown/SearchDropdown';
import ItemRoster from '../../features/ItemRoster/ItemRoster';
import { ModalProps } from '../../shared/types/modal';
import { ActorEntity } from '../../shared/types/entities';
import { selectFile } from '../../shared/lib/helpers/fileHandler'

const CreateMovie = observer(({ show, onHide }: ModalProps) => {
    const { store } = useStore();
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [rating, setRating] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [actors, setActors] = useState<ActorEntity[]>([]);
    const [directorSearch, setDirectorSearch] = useState('');
    const [genreSearch, setGenreSearch] = useState('');
    const [countrySearch, setCountrySearch] = useState('');
    const [actorSearch, setActorSearch] = useState('')

    useEffect(() => {
        fetchGenres().then(data => store.setGenres(data));
        fetchDirectors().then(data => store.setDirectors(data));
        fetchCountries().then(data => store.setCountries(data));
        fetchActors().then(data => store.setActors(data.rows));
    }, [store]);

    const addActorHandler = (actor: ActorEntity) => {
        if (!actors.some(existingActor => existingActor.id === actor.id)) {
            setActors(prev => [...prev, actor]);
        }
    };
 
    const removeActor = (id: number) => {
        setActors(prev => prev.filter(actor => actor.id !== id));
    };

    const handleRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '' || /^\d*\.?\d*$/.test(value)) {
            setRating(value);
        }
    };

    const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);

        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    const addMovie = () => {
        if (!store.selectedCountry || !store.selectedDirector || !store.selectedGenre) return;
        const formData = new FormData();
        formData.append('name', name);
        formData.append('year', `${year}`);
        formData.append('rating', rating);
        formData.append('tagline', tagline);
        formData.append('description', description);
        if (file) {
            formData.append('img', file);
        }
        formData.append('country_id', `${store.selectedCountry.id}`);
        formData.append('director_id', `${store.selectedDirector.id}`);
        formData.append('genre_id', `${store.selectedGenre.id}`);
        formData.append("actors", JSON.stringify(actors.map(actor => actor.id)));
        createMovie(formData).then(() => onHide());
    };

    if (!show) return null;

    return (
        <CreateModal
            onHide={onHide}
            title="Добавить фильм"
            onConfirm={addMovie}
        >
            <input
                value={name}
                onChange={e => setName(e.target.value)}
                className={s.inputField}
                placeholder={"Введите название фильма"}
            />
            <input
                value={year}
                onChange={e => setYear(e.target.value)}
                className={s.inputField}
                placeholder={"Введите год выхода фильма"}
                type="number"
            />
            <input
                value={tagline}
                onChange={e => setTagline(e.target.value)}
                className={s.inputField}
                placeholder={"Введите слоган фильма"}
            />
            <textarea
                value={description}
                onChange={handleDescriptionChange}
                className={s.inputField}
                placeholder={"Введите описание фильма"}
                style={{ overflow: 'hidden', resize: 'none' }}
            />
            <input
                value={rating}
                onChange={handleRatingChange}
                className={s.inputField}
                placeholder={"Введите рейтинг фильма"}
                type="text"
            />
            <input
                className={s.inputField}
                type="file"
                onChange={selectFile(setFile)}
            />
            <SearchDropdown
                searchValue={directorSearch}
                onSearchChange={e => setDirectorSearch(e.target.value)}
                items={store.directors}
                onItemSelect={director => {
                    store.setSelectedDirector(director);
                    setDirectorSearch(director.name);
                }}
                placeholder="Режиссёр"
            />
            <SearchDropdown
                searchValue={genreSearch}
                onSearchChange={e => setGenreSearch(e.target.value)}
                items={store.genres}
                onItemSelect={genre => {
                    store.setSelectedGenre(genre);
                    setGenreSearch(genre.name);
                }}
                placeholder="Жанр"
            />
            <SearchDropdown
                searchValue={countrySearch}
                onSearchChange={e => setCountrySearch(e.target.value)}
                items={store.countries}
                onItemSelect={country => {
                    store.setSelectedCountry(country);
                    setCountrySearch(country.name);
                }}
                placeholder="Страна"
            />
            <SearchDropdown
                searchValue={actorSearch}
                onSearchChange={e => setActorSearch(e.target.value)}
                items={store.actors}
                onItemSelect={addActorHandler}
                placeholder="Актер"
            />
            <ItemRoster items={actors} onRemove={removeActor} />
        </CreateModal>
    );
});

export default CreateMovie;