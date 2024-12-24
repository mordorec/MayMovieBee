import { observer } from 'mobx-react-lite';
import useStore from'../../shared/lib/hooks/useStore';
import { useNavigate } from 'react-router-dom';
import { ARTICLE_ROUTE } from '../../shared/lib/utils/consts';
import s from './Articles.module.css';
import Container from '../../shared/ui/Container/Container';
import TitleWithUnderline from '../../shared/ui/TitleWithUnderline/TitleWithUnderline';

const Articles = observer(() => {
  const { store } = useStore();
  const navigate = useNavigate();

  return (
    <Container>
      <TitleWithUnderline title="Статьи" />
      <div className={s.articlesContainer}>
        {store.articles.map((article) => (
          <div className={s.oneArticle} key={article.id}>
            <img 
              className={s.articleImg} 
              src={import.meta.env.VITE_API_URL + article.img} 
              alt="article"
              onClick={() => navigate(ARTICLE_ROUTE + '/' + article.id)} 
            />
            <div className={s.articleInfo}>
              <div 
                className={s.articleTitle} 
                onClick={() => navigate(ARTICLE_ROUTE + '/' + article.id)}>
                {article.name}
              </div>
              <span className={s.articleText}>
                {article.short_description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
});

export default Articles;