import { useState } from 'react';
import CreateList from "../modals/CreateList";
import CreateMovie from "../modals/CreateMovie";
import CreateActor from "../modals/CreateActor";
import CreateNews from "../modals/CreateNews";
import CreateArticles from "../modals/CreateArticles";
import CreateFestival from "../modals/CreateFestival";
import CreateDirector from "../modals/CreateDirector";
import CreateTrailer from "../modals/CreateTrailer";
import { observer } from 'mobx-react-lite';
import s from './Admin.module.css';
import Container from '../../shared/ui/Container/Container';
import TitleWithUnderline from '../../shared/ui/TitleWithUnderline/TitleWithUnderline';

const Admin = observer(() => {
    const [newsVisible, setNewsVisible] = useState(false);
    const [editNewsVisible, setEditNewsVisible] = useState(false);

    const [listVisible, setListVisible] = useState(false);
    const [movieToListVisible, setMovieToListVisible] = useState(false)
    const [editListVisible, setEditListVisible] = useState(false)

    const [actorVisible, setActorVisible] = useState(false);
    const [editActorVisible, setEditActorVisible] = useState(false)

    const [movieVisible, setMovieVisible] = useState(false);
    const [editMovieVisible, setEditMovieVisible] = useState(false)

    const [articlesVisible, setArticlesVisible] = useState(false);
    const [editArticlesVisible, setEditArticlesVisible] = useState(false);

    const [festivalVisible, setFestivalVisible] = useState(false);
    const [editFestivalVisible, setEditFestivalVisible] = useState(false);

    const [directorVisible, setDirectorVisible] = useState(false);
    const [editDirectorVisible, setEditDirectorVisible] = useState(false)

    const [trailerVisible, setTrailerVisible] = useState(false);
    const [editTrailerVisible, setEditTrailerVisible] = useState(false);

    return (
        <Container>
            <TitleWithUnderline title="Панель администратора" />
            <div>
                <div className={s.oneSection}>
                    <span className={s.title}>Фильмы</span>
                    <div className={s.groupButtons}>
                        <button
                            onClick={() => setMovieVisible(true)}
                            className={s.buttonStyle}
                        >
                            Добавить фильм
                        </button>
                        <button
                            onClick={() => setEditMovieVisible(true)}
                            className={s.buttonStyle}
                        >
                            Редактировать фильм
                        </button>
                    </div>
                </div>
                <div className={s.oneSection}>
                    <span className={s.title}>Списки фильмов</span>
                    <div className={s.groupButtons}>
                        <button
                            onClick={() => setListVisible(true)}
                            className={s.buttonStyle}
                        >
                            Добавить список
                        </button>
                        <button
                            onClick={() => setMovieToListVisible(true)}
                            className={s.buttonStyle}
                        >
                            Добавить фильм в список
                        </button>
                        <button
                            onClick={() => setEditListVisible(true)}
                            className={s.buttonStyle}
                        >
                            Редактировать список
                        </button>
                    </div>
                </div>
                <div className={s.oneSection}>
                    <span className={s.title}>Актеры</span>
                    <div className={s.groupButtons}>
                        <button
                            onClick={() => setActorVisible(true)}
                            className={s.buttonStyle}
                        >
                            Добавить актера
                        </button>
                        <button
                            onClick={() => setEditActorVisible(true)}
                            className={s.buttonStyle}
                        >
                            Редактировать актера
                        </button>
                    </div>
                </div>
                <div className={s.oneSection}>
                    <span className={s.title}>Режиссеры</span>
                    <div className={s.groupButtons}>
                        <button
                            onClick={() => setDirectorVisible(true)}
                            className={s.buttonStyle}
                        >
                            Добавить режиссера
                        </button>
                        <button
                            onClick={() => setEditDirectorVisible(true)}
                            className={s.buttonStyle}
                        >
                            Редактировать режиссера
                        </button>
                    </div>
                </div>
                <div className={s.oneSection}>
                    <span className={s.title}>Новости</span>
                    <div className={s.groupButtons}>
                        <button
                            onClick={() => setNewsVisible(true)}
                            className={s.buttonStyle}
                        >
                            Добавить новость
                        </button>
                        <button
                            onClick={() => setEditNewsVisible(true)}
                            className={s.buttonStyle}
                        >
                            Редактировать новость
                        </button>
                    </div>
                </div>
                <div className={s.oneSection}>
                    <span className={s.title}>Статьи</span>
                    <div className={s.groupButtons}>
                        <button
                            onClick={() => setArticlesVisible(true)}
                            className={s.buttonStyle}
                        >
                            Добавить статью
                        </button>
                        <button
                            onClick={() => setEditArticlesVisible(true)}
                            className={s.buttonStyle}
                        >
                            Редактировать статью
                        </button>
                    </div>
                </div>
                <div className={s.oneSection}>
                    <span className={s.title}>Кинофестивали</span>
                    <div className={s.groupButtons}>
                        <button
                            onClick={() => setFestivalVisible(true)}
                            className={s.buttonStyle}
                        >
                            Добавить новость о кинофестивале
                        </button>
                        <button
                            onClick={() => setEditFestivalVisible(true)}
                            className={s.buttonStyle}
                        >
                            Редактировать новость о кинофестивале
                        </button>
                    </div>
                </div>
                <div className={s.oneSection}>
                    <span className={s.title}>Трейлеры</span>
                    <div className={s.groupButtons}>
                        <button
                            onClick={() => setTrailerVisible(true)}
                            className={s.buttonStyle}
                        >
                            Добавить трейлер
                        </button>
                        <button
                            onClick={() => setEditTrailerVisible(true)}
                            className={s.buttonStyle}
                        >
                            Редактировать трейлер
                        </button>
                    </div>
                </div>
            </div>
            <CreateList show={listVisible} onHide={() => setListVisible(false)} />
            <CreateMovie show={movieVisible} onHide={() => setMovieVisible(false)} />
            <CreateNews show={newsVisible} onHide={() => setNewsVisible(false)} />
            <CreateActor show={actorVisible} onHide={() => setActorVisible(false)} />
            <CreateDirector show={directorVisible} onHide={() => setDirectorVisible(false)} />
            <CreateArticles show={articlesVisible} onHide={() => setArticlesVisible(false)} />
            <CreateFestival show={festivalVisible} onHide={() => setFestivalVisible(false)} />
            <CreateTrailer show={trailerVisible} onHide={() => setTrailerVisible(false)} />
        </Container>
    );
});

export default Admin;