import Trailers from '../../entities/Trailers/Trailers';
import {observer} from "mobx-react-lite";
import useStore from '../../shared/lib/hooks/useStore';
import {fetchTrailers} from "../../shared/api/movieAPI";
import usePaginatedEntity from '../../shared/lib/hooks/usePaginatedEntity';

const TrailerPage = observer(() => {
    const { store } = useStore();

    usePaginatedEntity(fetchTrailers, (data) => store.setTrailers(data))

    return (
        <Trailers/>
    )
});

export default TrailerPage;