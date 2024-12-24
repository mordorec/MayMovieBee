import useStore from '../../shared/lib/hooks/useStore';
import { observer } from 'mobx-react-lite';
import s from './Actor.module.css';
import Container from '../../shared/ui/Container/Container';
import { calculateAge } from '../../shared/lib/utils/calculateAge';

const Actor = observer(() => {
    const { store } = useStore();

    const actor = store.selectedActor;

    if (!actor) {
        return <div className={s.actor}>Актер не выбран.</div>;
    }

    return (
        <Container>
            <div className={s.actor} key={actor.id}>
                <img
                    className={s.actorImg} 
                    src={import.meta.env.VITE_API_URL + actor.img}
                    alt="Actor"
                />
                <div className={s.actorInfo}>
                    <span className={s.actorName}>
                        {actor.name}
                    </span>
                    <span className={s.actorMiniInfo}>
                        Возраст: {calculateAge(actor.birth)} лет
                    </span>
                    <span className={s.actorMiniInfo}>
                        Место рождения: {actor.town}, {actor.country.name}
                    </span>
                    <span className={s.actorMiniInfo}>
                        Рост: {actor.height}м
                    </span>
                </div>
            </div>
        </Container>
    );
});

export default Actor;