import {observer} from "mobx-react-lite";
import useStore from '../../shared/lib/hooks/useStore';
import { useNavigate } from 'react-router-dom';
import { MOVIES_ROUTE } from '../../shared/lib/utils/consts';
import s from './Lists.module.css';
import Container from '../../shared/ui/Container/Container';
import TitleWithUnderline from '../../shared/ui/TitleWithUnderline/TitleWithUnderline';

const Lists = observer(() => {
    const { store } = useStore();
    const navigate = useNavigate();

    return (
        <Container>
            <TitleWithUnderline title="Списки фильмов" />
            <div className={s.lists}>
                {store.lists.map(list =>
                    <div
                        className={s.list}
                        onClick={() => {
                            navigate(MOVIES_ROUTE.replace(':listId', list.id.toString()));
                        }}
                        key={list.id}
                    >
                        <img className={s.image} alt="Картиночка" src={import.meta.env.VITE_API_URL + list.img} onClick={() => navigate(MOVIES_ROUTE.replace(':listId', list.id.toString()))}/>
                        <h2 className={s.titleList} onClick={() => navigate(MOVIES_ROUTE.replace(':listId', list.id.toString()))}>{list.name}</h2>
                    </div>
                )}
            </div>
        </Container>
    );
});

export default Lists;