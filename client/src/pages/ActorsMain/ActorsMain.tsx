import Actors from '../../entities/Actors/Actors';
import {observer} from "mobx-react-lite";
import useStore from '../../shared/lib/hooks/useStore';
import {fetchActors} from "../../shared/api/movieAPI";
import usePaginatedEntity from '../../shared/lib/hooks/usePaginatedEntity';

const ActorsMain = observer(() => {
    const { store } = useStore();

    usePaginatedEntity(fetchActors, (data) => store.setActors(data))

    return (
        <Actors/>
    )
});

export default ActorsMain;