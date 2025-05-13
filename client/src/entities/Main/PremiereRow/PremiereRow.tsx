import { observer } from 'mobx-react-lite';
import useStore from '../../../shared/lib/hooks/useStore';
import { useNavigate } from 'react-router-dom';
import { MOVIE_ROUTE } from '../../../shared/lib/utils/consts';
import s from './PremiereRow.module.css';
import TitleWithUnderline from '../../../shared/ui/TitleWithUnderline/TitleWithUnderline';
import { useState, useEffect, useRef } from 'react';
import { PremiereEntity } from '../../../shared/types/entities';

const PremiereCard = ({ premiere }: { premiere: PremiereEntity }) => {
  const navigate = useNavigate();
  
  return (
    <div className={s.premiere}>
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
  );
};

const PremiereRow = observer(() => {
  const { store } = useStore();
  const visiblePremieres = 5;
  const today = new Date();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const upcomingPremieres = store.premieres
    .filter((premiere) => new Date(premiere.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const premieresToRender = isMobile ? [...upcomingPremieres] : upcomingPremieres.slice(0, visiblePremieres);

  return (
    <>
      <TitleWithUnderline title="Премьеры" />
      {isMobile ? (
        <div className={s.sliderContainer} ref={sliderRef}>
          <div className={s.slidesInner}>
            {premieresToRender.map((premiere) => (
              <PremiereCard premiere={premiere} key={premiere.id} />
            ))}
          </div>
        </div>
      ) : (
        <div className={s.premieresContainer}>
          {premieresToRender.map((premiere) => (
            <PremiereCard premiere={premiere} key={premiere.id} />
          ))}
        </div>
      )}
    </>
  );
});

export default PremiereRow