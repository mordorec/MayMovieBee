import { observer } from 'mobx-react-lite';
import useStore from '../../../shared/lib/hooks/useStore';
import { useNavigate } from 'react-router-dom';
import { MOVIE_ROUTE } from '../../../shared/lib/utils/consts';
import s from './PremiereRow.module.css';
import TitleWithUnderline from '../../../shared/ui/TitleWithUnderline/TitleWithUnderline';

const PremiereRow = observer(() => {
  const { store } = useStore();
  const visiblePremieres = 5;
  const navigate = useNavigate();
  const today = new Date();

  const upcomingPremieres = store.premieres
    .filter((premiere) => new Date(premiere.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <>
      <TitleWithUnderline title="Премьеры" />
      <div className={s.premieresContainer}>
      {upcomingPremieres.slice(0, visiblePremieres).map((premiere) => (
        <div className={s.premiere} key={premiere.id}>
          <span className={s.premiereDate}>
            {new Date(premiere.date).toLocaleDateString('ru-RU', {
              day: 'numeric',
              month: 'long',
            })}
          </span>
          <img
            className={s.premiereImg}
            src={import.meta.env.VITE_API_URL + premiere.movie.img}
            alt="movie poster"
            onClick={() => navigate(MOVIE_ROUTE + '/' + premiere.movie_id)}
          />
          <span
            className={s.premiereTitle}
            onClick={() => navigate(MOVIE_ROUTE + '/' + premiere.movie_id)}
          >
            {premiere.movie.name}
          </span>
        </div>
      ))}
      </div>
    </>
  );
});

export default PremiereRow;