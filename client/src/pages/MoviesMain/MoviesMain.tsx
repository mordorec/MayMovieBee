import {observer} from "mobx-react-lite";
import useStore from '../../shared/lib/hooks/useStore';
import Movies from '../../entities/Movies/Movies';
import {fetchMovies} from "../../shared/api/movieAPI";
import usePaginatedEntity from '../../shared/lib/hooks/usePaginatedEntity';

const MoviesMain = observer(() => {
    const { store } = useStore();

    usePaginatedEntity(fetchMovies, (data) => store.setMovies(data))

    return (
        <Movies/>
    );
});

export default MoviesMain;