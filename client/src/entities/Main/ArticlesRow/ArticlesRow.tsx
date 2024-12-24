import { observer } from 'mobx-react-lite';
import useStore from '../../../shared/lib/hooks/useStore';
import { ARTICLES_ROUTE, ARTICLE_ROUTE } from '../../../shared/lib/utils/consts';
import { useNavigate } from 'react-router-dom';
import s from './ArticlesRow.module.css';
import TitleWithUnderline from '../../../shared/ui/TitleWithUnderline/TitleWithUnderline';

const ArticlesRow = observer(() => {
  const { store } = useStore();
  const visibleArticles = 2;
  const navigate = useNavigate();

  return (
    <>
      <TitleWithUnderline title="Статьи" />
      {store.articles.slice(0, visibleArticles).map((articles) => (
        <div className={s.articlescard} key={articles.id}>
          <img 
            alt="Картинка статьи"
            className={s.articlesImg} 
            src={import.meta.env.VITE_API_URL + articles.img} 
            onClick={() => navigate(ARTICLE_ROUTE + '/' + articles.id)} 
          />
          <div>
            <h2 
              className={s.articlesTitle} 
              onClick={() => navigate(ARTICLE_ROUTE + '/' + articles.id)}
            >
              {articles.name}
            </h2>
            <p className={s.articlesText}>
              {articles.short_description}
            </p>
          </div>
        </div>
      ))}
      {visibleArticles < store.articles.length && (
        <div className={s.articlescenterbutton}>
          <button
            onClick={() => navigate(ARTICLES_ROUTE)} 
            className={s.articlesButton}
          >
            Посмотреть все статьи
          </button>
        </div>
      )}
    </>
  );
});

export default ArticlesRow;