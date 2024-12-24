import useStore from '../../shared/lib/hooks/useStore';
import { observer } from 'mobx-react-lite';
import s from './Director.module.css';
import Container from '../../shared/ui/Container/Container';
import { calculateAge } from '../../shared/lib/utils/calculateAge';

const Director = observer(() => {
    const { store } = useStore();

    const director = store.selectedDirector;

    if (!director) {
        return <div className={s.actor}>Режиссер не выбран.</div>;
    }

    return (
        <Container>
            <div className={s.director} key={director.id}>
                <img
                    className={s.directorImg} 
                    src={import.meta.env.VITE_API_URL + director.img}
                    alt="Director"
                />
                <div className={s.directorInfo}>
                    <span className={s.directorName}>
                        {director.name}
                    </span>
                    <span className={s.directorMiniInfo}>
                        Возраст: {calculateAge(director.birth)} лет
                    </span>
                    <span className={s.directorMiniInfo}>
                        Место рождения: {director.town}, {director.country.name}
                    </span>
                    <span className={s.directorMiniInfo}>
                        Рост: {director.height}м
                    </span>
                </div>
            </div>
        </Container>
    );
});

export default Director;