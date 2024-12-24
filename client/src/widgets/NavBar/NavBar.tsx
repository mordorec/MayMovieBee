import { ACTORS_ROUTE, LISTS_ROUTE, MANYNEWS_ROUTE, MAIN_ROUTE } from "../../shared/lib/utils/consts";
import { observer } from "mobx-react-lite";
import { useNavigate, Link } from 'react-router-dom';
import maymoviebee from '../../shared/assets/maymoviebee.png';
import s from './NavBar.module.css';

const NavBar = observer(() => {
    const navigate = useNavigate();

    return (
        <nav className={s.navbar}>
            <input type="checkbox" id={s.sidebarActive}></input>
            <div className={s.navImgName} onClick={() => navigate(MAIN_ROUTE)}>
                <img src={maymoviebee} alt="maymoviebee" className={s.navImg} />
                MayMovieBee
            </div>
            <label htmlFor={s.sidebarActive} className={s.openSidebarButton}>
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </label>
            <label id={s.overlay} htmlFor={s.sidebarActive}></label>
            <div className={s.linksContainer}>
                <label htmlFor={s.sidebarActive} className={s.closeSidebarButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </label>
                <Link to={LISTS_ROUTE} className={s.navLink}>
                    Фильмы
                </Link>
                <Link to={ACTORS_ROUTE} className={s.navLink}>
                    Актеры
                </Link>
                <Link to={MANYNEWS_ROUTE} className={s.navLink}>
                    Новости
                </Link>
            </div>
        </nav>
    );
});

export default NavBar;