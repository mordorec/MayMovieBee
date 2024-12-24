import Director from '../../entities/Director/Director';
import { observer } from "mobx-react-lite";
import useStore from '../../shared/lib/hooks/useStore';
import { fetchOneDirector } from "../../shared/api/movieAPI";
import useFetchEntity from '../../shared/lib/hooks/useFetchEntity';

const DirectorMain = observer(() => {
    const { store } = useStore();

    useFetchEntity(fetchOneDirector, (data) => store.setSelectedDirector(data));

    return (
        <Director/>
    )
});

export default DirectorMain;