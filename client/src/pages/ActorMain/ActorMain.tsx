import Actor from '../../entities/Actor/Actor';
import { observer } from "mobx-react-lite";
import useStore from '../../shared/lib/hooks/useStore';
import useFetchEntity from '../../shared/lib/hooks/useFetchEntity';
import { fetchOneActor } from "../../shared/api/movieAPI";

const ActorMain = observer(() => {
    const { store } = useStore();

    useFetchEntity(fetchOneActor, (data) => store.setSelectedActor(data));
    
    return (
        <Actor/>
    )
});

export default ActorMain;