import ManyNews from '../../entities/ManyNews/ManyNews';
import {observer} from "mobx-react-lite";
import useStore from '../../shared/lib/hooks/useStore';
import {fetchNews} from "../../shared/api/movieAPI";
import usePaginatedEntity from '../../shared/lib/hooks/usePaginatedEntity';

const ManyNewsMain = observer(() => {
    const { store } = useStore();

    usePaginatedEntity(fetchNews, (data) => store.setNews(data))

    return (
        <ManyNews/>
    )
});

export default ManyNewsMain;