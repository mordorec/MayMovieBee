import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE } from '../../shared/lib/utils/consts';
import { observer } from 'mobx-react-lite';
import { login, registration } from "../../shared/api/userAPI";
import useStore from '../../shared/lib/hooks/useStore';
import s from './Auth.module.css';
import userimg from './user.svg';
import lockimg from './lock.svg';
import Container from '../../shared/ui/Container/Container';

const Auth = observer(() => {
    const { user } = useStore();
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user);
            user.setIsAuth(true);
            navigate(MAIN_ROUTE);
        } catch (e) {
            alert(e.response.data.message);
        }
    };

    return (
        <Container>
            <div className={s.authContainer}>
                <div className={s.authTitle}>
                    <span>{isLogin ? 'Авторизация' : 'Регистрация'}</span>
                </div>
                <form className={s.authForm} action="#">
                    <div className={s.row}>
                        <img src={userimg} className={s.userImg} alt="user" />
                        <input
                            className={s.authInput}
                            placeholder="Введите ваш email..."
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={s.row}>
                        <img src={lockimg} className={s.lockImg} alt="lock" />
                        <input
                            className={s.authInput}
                            placeholder="Введите ваш пароль..."
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={`${s.row} ${s.authButton}`}>
                        <input
                            onClick={click}
                            value={isLogin ? 'Войти' : 'Зарегистрироваться'}
                            type="submit"
                        />
                        {isLogin ? (
                            <div>
                                <NavLink to={REGISTRATION_ROUTE} className={s.authLink}>
                                    Нет аккаунта? Зарегистрируйтесь!
                                </NavLink>
                            </div>
                        ) : (
                            <div>
                                <NavLink to={LOGIN_ROUTE} className={s.authLink}>
                                    Есть аккаунт? Войдите!
                                </NavLink>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </Container>
    );
});

export default Auth;