import OneNews from '../../entities/OneNews/OneNews';
import {observer} from "mobx-react-lite";
import { fetchOneNews } from "../../shared/api/movieAPI";
import useStore from '../../shared/lib/hooks/useStore';
import useFetchEntity from '../../shared/lib/hooks/useFetchEntity';

const OneNewsMain = observer(() => {
    const { store } = useStore();
    
    useFetchEntity(fetchOneNews, (data) => store.setSelectedNews(data));

    return (
        <OneNews/>
    )
});

export default OneNewsMain;