import { observer } from 'mobx-react-lite';
import useStore from '../../../shared/lib/hooks/useStore';
import { TRAILERS_ROUTE } from '../../../shared/lib/utils/consts';
import { useNavigate } from 'react-router-dom';
import s from './TrailerRow.module.css';
import TitleWithUnderline from '../../../shared/ui/TitleWithUnderline/TitleWithUnderline';
import ReactPlayer from 'react-player/youtube';
import { useMediaQuery } from 'react-responsive';

const TrailerRow = observer(() => {
  const { store } = useStore();
  const visibleTrailers = 4;
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 600 });

  return (
    <>
      <TitleWithUnderline title="Трейлеры" />
      <div className={s.videoContainer}>
        {store.trailers.slice(0, visibleTrailers).map((trailer) => (
          <div className={s.video} key={trailer.id}>
            <ReactPlayer
              light
              url={trailer.url}
              width="100%"
              height="140px"
              playing
              controls
            />
            <span className={s.videoTitle}>
              <a className={s.whiteText} href={trailer.url} target="_blank" rel="noopener noreferrer">
                {trailer.title}
              </a>
            </span>
          </div>
        ))}
        {visibleTrailers < store.trailers.length && (
          <button onClick={() => navigate(TRAILERS_ROUTE)} className={s.button}>
            {isMobile ? "Посмотреть все трейлеры" : "Еще"}
          </button>
        )}
      </div>  
    </>
  );
});

export default TrailerRow;