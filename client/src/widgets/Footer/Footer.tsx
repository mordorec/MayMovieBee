import maymoviebee from '../../shared/assets/maymoviebee.png';
import useStore from '../../shared/lib/hooks/useStore';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE } from "../../shared/lib/utils/consts";
import { observer } from "mobx-react-lite";
import s from './Footer.module.css';

const Footer = observer(() => {
    const { user } = useStore();
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    }

    return (
        <footer className={s.footer}>
            <div className={s.logoContainer}>
                <a href="/">
                    <img src={maymoviebee} className={s.logo} alt="MayMovieBee" />
                </a>
                <a href="/">
                    <span className={s.logoText}>&copy; MayMovieBee, 2024</span>
                </a>
            </div>
            <div className={s.links}>
                {user.isAuth ? (
                    <>
                        <button
                            onClick={() => navigate(ADMIN_ROUTE)}
                            className={s.footerBtn}
                        >
                            Админ
                        </button>
                        <button
                            onClick={() => logOut()}
                            className={s.footerBtn}
                        >
                            Выйти
                        </button>
                    </>
                ) : (
                    <button
                        onClick={() => navigate(LOGIN_ROUTE)}
                        className={s.footerBtn}
                    >
                        Авторизация
                    </button>
                )}
            </div>
        </footer>
    );
});

export default Footer;