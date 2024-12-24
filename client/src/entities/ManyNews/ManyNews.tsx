import { observer } from 'mobx-react-lite';
import useStore from '../../shared/lib/hooks/useStore';
import { useNavigate } from 'react-router-dom';
import { ONENEWS_ROUTE } from '../../shared/lib/utils/consts';
import s from './ManyNews.module.css';
import Container from '../../shared/ui/Container/Container';
import TitleWithUnderline from '../../shared/ui/TitleWithUnderline/TitleWithUnderline';

const ManyNews = observer(() => {
  const { store } = useStore();
  const navigate = useNavigate();

  return (
    <Container>
      <TitleWithUnderline title="Новости" />
      <div>
        {store.news.map((news) => (
          <div className={s.news} key={news.id}>
            <span className={s.newsText} onClick={() => navigate(ONENEWS_ROUTE + '/' + news.id)}>
              {news.name}
            </span>
          </div>
        ))}
      </div>
    </Container>
  );
});

export default ManyNews;