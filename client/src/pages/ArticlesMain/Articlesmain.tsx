import Articles from '../../entities/Articles/Articles';
import {fetchArticles} from "../../shared/api/movieAPI";
import {observer} from "mobx-react-lite";
import useStore from '../../shared/lib/hooks/useStore';
import usePaginatedEntity from '../../shared/lib/hooks/usePaginatedEntity';

const ArticlesMain = observer(() => {
    const { store } = useStore();

    usePaginatedEntity(fetchArticles, (data) => store.setArticles(data))

    return (
        <Articles/>
    )
});

export default ArticlesMain;