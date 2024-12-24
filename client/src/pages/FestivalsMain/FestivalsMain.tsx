import Festivals from '../../entities/Festivals/Festivals';
import {fetchFestival} from "../../shared/api/movieAPI";
import {observer} from "mobx-react-lite";
import useStore from '../../shared/lib/hooks/useStore';
import usePaginatedEntity from '../../shared/lib/hooks/usePaginatedEntity';

const FestivalsMain = observer(() => {
    const { store } = useStore();

    usePaginatedEntity(fetchFestival, (data) => store.setFestivals(data))

    return (
        <Festivals/>
    )
});

export default FestivalsMain;