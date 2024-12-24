import { observer } from 'mobx-react-lite';
import useStore from '../../shared/lib/hooks/useStore';
import s from './Article.module.css';
import Container from '../../shared/ui/Container/Container';

const Article = observer(() => {
  const { store } = useStore();
  
  const article = store.selectedArticles

  if (!article) {
    return <div className={s.actor}>Актер не выбран.</div>;
  }

  return (
    <Container>
      <div className={s.article} key={article.id}>
        <h1 className={s.articleTitle}>{article.name}</h1>
        <img
          className={s.articleImg}
          src={import.meta.env.VITE_API_URL + article.img}
          alt="Articles"
        />
        <div className={s.articleText}>
          <p>{article.long_description}</p>
        </div>
      </div>
    </Container>
  );
});

export default Article;