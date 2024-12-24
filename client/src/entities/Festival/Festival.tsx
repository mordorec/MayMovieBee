import { observer } from 'mobx-react-lite';
import useStore from '../../shared/lib/hooks/useStore';
import s from './Festival.module.css';
import Container from '../../shared/ui/Container/Container';

const Festival = observer(() => {
  const { store } = useStore();
  
  const festival = store.selectedFestival;

  if (!festival) {
      return <div className={s.actor}>Фестиваль не выбран.</div>;
  }

  return (
    <Container>
      <div className={s.fest} key={festival.id}>
        <h1 className={s.festTitle}>{festival.name}</h1>
        <img
          className={s.festImg}
          src={import.meta.env.VITE_API_URL + festival.img}
          alt="News"
        />
        <div className={s.festText}>
          <p>{festival.long_description}</p>
        </div>
      </div>
    </Container>
  );
});

export default Festival;