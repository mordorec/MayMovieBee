import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import useStore from '../../shared/lib/hooks/useStore';
import { useNavigate } from 'react-router-dom';
import { MOVIE_ROUTE } from '../../shared/lib/utils/consts';
import s from './Movies.module.css'
import Container from '../../shared/ui/Container/Container';
import TitleWithUnderline from '../../shared/ui/TitleWithUnderline/TitleWithUnderline';
import { fetchMoviesByList } from "../../shared/api/movieAPI";
import { MovieEntity } from '../../shared/types/entities';

const Movies = observer(() => {
    const { store } = useStore();
    const navigate = useNavigate();
    const [listMovies, setListMovies] = useState<MovieEntity[]>([]);

    useEffect(() => {
        if (store.selectedList?.id) {
            fetchMoviesByList(store.selectedList.id).then(setListMovies);
        }
    }, [store.selectedList]);

    return (
        <Container>
            <TitleWithUnderline title="Фильмы" />
            <div className={s.movies}>
                {listMovies.map((movie, index) => (
                    <div className={s.movie} key={movie.id}>
                        <img alt="Постер" className={s.movieImg} src={import.meta.env.VITE_API_URL + movie.img} onClick={() => navigate(MOVIE_ROUTE + '/' + movie.id)} />
                        <div className={s.movieBody}>
                            <p className={s.movieTitle} onClick={() => navigate(MOVIE_ROUTE + '/' + movie.id)}>
                                {index + 1}. {movie.name}
                            </p>
                            <h5 className={s.movieText}>
                                {movie.year}
                            </h5>
                            <h5 className={s.movieText}>
                                {movie.country.name}
                            </h5>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
});

export default Movies;