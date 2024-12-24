import Article from '../../entities/Article/Article';
import {observer} from "mobx-react-lite";
import { fetchOneArticles } from "../../shared/api/movieAPI";
import useStore from '../../shared/lib/hooks/useStore';
import useFetchEntity from '../../shared/lib/hooks/useFetchEntity';

const ArticleMain = observer(() => {
    const { store } = useStore();

    useFetchEntity(fetchOneArticles, (data) => store.setSelectedArticles(data));

    return (
        <Article/>
    )
});

export default ArticleMain;