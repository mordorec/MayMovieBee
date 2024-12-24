import { useNavigate } from 'react-router-dom';
import { DIRECTOR_ROUTE, ACTOR_ROUTE } from '../../shared/lib/utils/consts';
import { observer } from "mobx-react-lite";
import useStore from '../../shared/lib/hooks/useStore';
import s from './Movie.module.css';
import Container from '../../shared/ui/Container/Container';
import loading from '../../styles/loading.module.css'

const Movie = observer(() => {
    const { store } = useStore();
    const navigate = useNavigate();

    const movie = store.selectedMovie;

    if (!movie) {
        return <div className={loading.waiting}></div>;
    }

    return (
        <Container>
            <div key={movie.id}>
                <div className={s.movie}>
                    <div className={s.picAndInfo}>
                        <img alt="Картиночка" className={s.movieImg} src={import.meta.env.VITE_API_URL + movie.img} />
                        <div className={s.movieInfoContainer}>
                            <span className={s.movieTitle}>
                                {movie.name}
                            </span>
                            <span className={s.movieInfo}>
                                Год выхода: {movie.year}
                            </span>
                            <span className={s.movieInfo}>
                                Страна: {movie.country && movie.country.name}
                            </span>
                            <span className={s.movieInfo}>
                                Жанр: {movie.genre && movie.genre.name}
                            </span>
                            <span className={s.movieInfo}>
                                Слоган: {movie.tagline}
                            </span>
                            <span className={s.movieCast} onClick={() => navigate(DIRECTOR_ROUTE + '/' + movie.director.id)}>
                                Режиссер: {movie.director && movie.director.name}
                            </span>
                        </div>
                    </div>
                    <div className={s.ratingAndCast}>
                        <span className={s.rating}>Рейтинг: {movie.rating}</span>
                        <span className={s.movieInfo}>Актеры: </span>
                        {movie.actors && movie.actors.map(actor => (
                            <span key={actor.id} className={s.movieCast} onClick={() => navigate(ACTOR_ROUTE + '/' + actor.id)}>
                                {actor.name}
                            </span>
                        ))}
                    </div>
                </div>
                <div className={s.descriptionTitle}>
                    Описание
                </div>
                <div className={s.descriptionText}>
                    {movie.description}
                </div>
            </div>
        </Container>
    );
});

export default Movie;