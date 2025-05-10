import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate, useParams } from 'react-router-dom';
import { MOVIE_ROUTE } from '../../shared/lib/utils/consts';
import s from './Movies.module.css'
import Container from '../../shared/ui/Container/Container';
import TitleWithUnderline from '../../shared/ui/TitleWithUnderline/TitleWithUnderline';
import { fetchMoviesByList } from "../../shared/api/movieAPI";
import { MovieEntity } from '../../shared/types/entities';
import loading from '../../styles/loading.module.css'

const Movies = observer(() => {
    const navigate = useNavigate();
    const { listId } = useParams();
    const [listMovies, setListMovies] = useState<MovieEntity[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        if (listId) {
            fetchMoviesByList(Number(listId))
                .then(response => {
                    if (Array.isArray(response)) setListMovies(response);
                })
                .catch(() => {
                    setListMovies([]);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } else {
            setListMovies([]);
            setIsLoading(false);
        }
    }, [listId]);

    if (isLoading) {
        return <div className={loading.waiting}></div>;
    }

    return (
        <Container>
            <TitleWithUnderline title="Фильмы" />
            <div className={s.movies}>
                {listMovies.length > 0 ? (
                    listMovies.map((movie, index) => (
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
                    ))
                ) : (
                    <div className={s.emptyMessage}>
                        Здесь пока ничего нет
                    </div>
                )}
            </div>
        </Container>
    );
});

export default Movies;