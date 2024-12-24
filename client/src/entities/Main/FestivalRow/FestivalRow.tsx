import { observer } from 'mobx-react-lite';
import useStore from '../../../shared/lib/hooks/useStore';
import { useNavigate } from 'react-router-dom';
import { FESTIVALS_ROUTE, FESTIVAL_ROUTE } from '../../../shared/lib/utils/consts';
import s from './FestivalRow.module.css';
import TitleWithUnderline from '../../../shared/ui/TitleWithUnderline/TitleWithUnderline';

const FestivalRow = observer(() => {
  const { store } = useStore();
  const visibleFestivals = 4;
  const navigate = useNavigate();

  const dateFormatter = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long' });

  return (
    <>
      <TitleWithUnderline title="Кинофестивали" />
      <div className={s.allFestivals}>
      {store.festivals.slice(0, visibleFestivals).map((festival) => (
        <div className={s.festival} key={festival.id}>
          <span className={s.festivalDate}>
            {dateFormatter.format(new Date(festival.date))}
          </span>
          <img
            alt="Фестивальная картинка"
            className={s.festivalImg}
            src={import.meta.env.VITE_API_URL + festival.img}
            onClick={() => navigate(FESTIVAL_ROUTE + '/' + festival.id)}
          />
          <div>
            <h2
              className={s.festivalTitle}
              onClick={() => navigate(FESTIVAL_ROUTE + '/' + festival.id)}
            >
              {festival.name}
            </h2>
          </div>
        </div>
      ))}
      {visibleFestivals < store.festivals.length && (
        <button 
          className={s.buttonStyle}
          onClick={() => navigate(FESTIVALS_ROUTE)}
        >
          Еще
        </button>
      )}
      </div>
    </>
  );
});

export default FestivalRow;