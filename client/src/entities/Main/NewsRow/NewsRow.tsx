import { observer } from 'mobx-react-lite';
import useStore from '../../../shared/lib/hooks/useStore';
import { useNavigate } from 'react-router-dom';
import { MANYNEWS_ROUTE, ONENEWS_ROUTE } from '../../../shared/lib/utils/consts';
import s from './NewsRow.module.css';
import TitleWithUnderline from '../../../shared/ui/TitleWithUnderline/TitleWithUnderline';

const NewsRow = observer(() => {
  const { store } = useStore();
  const visibleNews = 4;
  const navigate = useNavigate();

  return (
    <>
      <TitleWithUnderline title="Новости" />
      <div>
        {store.news.slice(0, visibleNews).map((news) => (
          <ul className={s.news} key={news.id}>
            <li
              className={s.newsText}
              onClick={() => navigate(ONENEWS_ROUTE + '/' + news.id)}
            >
              {news.name}
            </li>
          </ul>
        ))}
      </div>
      {visibleNews < store.news.length && (
        <button
          onClick={() => navigate(MANYNEWS_ROUTE)}
          className={s.showMoreButton}
        >
          Посмотреть все новости
        </button>
      )}
    </>
  );
});

export default NewsRow;