import Movie from '../../entities/Movie/Movie';
import { observer } from "mobx-react-lite";
import useStore from '../../shared/lib/hooks/useStore';
import { fetchOneMovie } from "../../shared/api/movieAPI";
import useFetchEntity from '../../shared/lib/hooks/useFetchEntity';

const MovieMain = observer(() => {
    const { store } = useStore();

    useFetchEntity(fetchOneMovie, (data) => store.setSelectedMovie(data));

    return (
        <Movie/>
    )
});

export default MovieMain;