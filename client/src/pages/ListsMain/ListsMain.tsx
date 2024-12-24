import Lists from "../../entities/Lists/Lists";
import {observer} from "mobx-react-lite";
import useStore from '../../shared/lib/hooks/useStore';
import {fetchLists} from "../../shared/api/movieAPI";
import usePaginatedEntity from '../../shared/lib/hooks/usePaginatedEntity';

const ListsMain = observer(() => {
    const { store } = useStore();

    usePaginatedEntity(fetchLists, (data) => store.setLists(data))

    return (
        <Lists/>
    );
});

export default ListsMain;