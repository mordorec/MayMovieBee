import { observer } from 'mobx-react-lite';
import s from './OneNews.module.css';
import Container from '../../shared/ui/Container/Container';
import useStore from '../../shared/lib/hooks/useStore';
import loading from '../../styles/loading.module.css'

const OneNews = observer(() => {
  const { store } = useStore();
  
  const news = store.selectedNews;

  if (!news) {
      return <div className={loading.waiting}>Пожалуйста, подождите...</div>;
  }

  return (
    <Container>
      <div className={s.news} key={news.id}>
        <h1 className={s.newsTitle}>{news.name}</h1>
        <img
          className={s.newsImg}
          src={import.meta.env.VITE_API_URL + news.img}
          alt="News"
        />
        <div className={s.newsText}>
          <p>{news.description}</p>
        </div>
      </div>
    </Container>
  );
});

export default OneNews;