import { observer } from 'mobx-react-lite';
import useStore from '../../shared/lib/hooks/useStore';
import s from './Trailers.module.css';
import Container from '../../shared/ui/Container/Container';
import TitleWithUnderline from '../../shared/ui/TitleWithUnderline/TitleWithUnderline';
import ReactPlayer from 'react-player/youtube'
// import PlayIcon from '../../assets/play.svg'

const Trailers = observer(() => {
  const { store } = useStore();

  return (
    <Container>
      <TitleWithUnderline title="Трейлеры" />
      <div className={s.videoContainer}>
      {store.trailers.map((trailer) => (
        <div className={s.video} key={trailer.id}>
            <ReactPlayer
              light
              url={trailer.url}
              width="100%"
              height="140px"
              // playIcon={<PlayIcon width="60" />}
              playing
              controls
            />
          <div className={s.videoTitle}>
            <a
              href={trailer.url}
              target="_blank"
              rel="noopener noreferrer"
              className={s.videoLink}
            >
              {trailer.title}
            </a>
          </div>
        </div>
      ))}
      </div>
    </Container>
  );
});

export default Trailers;