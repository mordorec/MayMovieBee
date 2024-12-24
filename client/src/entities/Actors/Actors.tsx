import { observer } from 'mobx-react-lite';
import useStore from '../../shared/lib/hooks/useStore';
import { useNavigate } from 'react-router-dom';
import { ACTOR_ROUTE } from '../../shared/lib/utils/consts';
import s from './Actors.module.css';
import Container from '../../shared/ui/Container/Container';
import TitleWithUnderline from '../../shared/ui/TitleWithUnderline/TitleWithUnderline';

const Actors = observer(() => {
  const { store } = useStore();
  const navigate = useNavigate();

  return (
    <Container>
      <TitleWithUnderline title="Список актеров" />
      <div>
        {store.actors.map((actor) => (
          <div className={s.actor} key={actor.id}>
            <img 
              className={s.actorImg}
              alt="Фото актера" 
              src={import.meta.env.VITE_API_URL + actor.img} 
              onClick={() => navigate(ACTOR_ROUTE + '/' + actor.id)} 
            />
            <div className={s.actorBody}>
              <div 
                className={s.actorTitle} 
                onClick={() => navigate(ACTOR_ROUTE + '/' + actor.id)}
              >
                {actor.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
});

export default Actors;