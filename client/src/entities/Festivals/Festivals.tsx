import { observer } from 'mobx-react-lite';
import useStore from '../../shared/lib/hooks/useStore';
import { useNavigate } from 'react-router-dom';
import { FESTIVAL_ROUTE } from '../../shared/lib/utils/consts';
import s from './Festivals.module.css';
import Container from '../../shared/ui/Container/Container';
import TitleWithUnderline from '../../shared/ui/TitleWithUnderline/TitleWithUnderline';

const Festivals = observer(() => {
  const { store } = useStore();
  const navigate = useNavigate();

  return (
    <Container>
      <TitleWithUnderline title="Кинофестивали" />
      <div>
        {store.festivals.map((festival) => (
          <div className={s.oneFestNews} key={festival.id}>
            <p
              className={s.festText}
              onClick={() => navigate(FESTIVAL_ROUTE + '/' + festival.id)}
            >
              {festival.name}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
});

export default Festivals;