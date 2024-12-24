import Festival from '../../entities/Festival/Festival';
import {observer} from "mobx-react-lite";
import { fetchOneFestival } from "../../shared/api/movieAPI";
import useFetchEntity from '../../shared/lib/hooks/useFetchEntity';
import useStore from '../../shared/lib/hooks/useStore';

const FestivalMain = observer(() => {
    const { store } = useStore();

    useFetchEntity(fetchOneFestival, (data) => store.setSelectedFestival(data));

    return (
        <Festival/>
    )
});

export default FestivalMain;