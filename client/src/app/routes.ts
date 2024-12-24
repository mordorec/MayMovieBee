import { ADMIN_ROUTE, MAIN_ROUTE, DIRECTOR_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, ARTICLE_ROUTE, ACTORS_ROUTE, ACTOR_ROUTE, MOVIE_ROUTE, MANYNEWS_ROUTE, ONENEWS_ROUTE, TRAILERS_ROUTE, ARTICLES_ROUTE, LISTS_ROUTE, MOVIES_ROUTE, FESTIVALS_ROUTE, FESTIVAL_ROUTE } from "../shared/lib/utils/consts"
import Admin from '../pages/AdminMain/AdminMain';
import Main from '../pages/Main/Main';
import Auth from '../pages/AuthMain/AuthMain';
import Actors from '../pages/ActorsMain/ActorsMain';
import Actor from '../pages/ActorMain/ActorMain';
import Movie from '../pages/MovieMain/MovieMain';
import OneNews from '../pages/OneNewsMain/OneNewsMain';
import Articles from '../pages/ArticlesMain/Articlesmain';
import Trailers from '../pages/TrailersMain/TrailersMain';
import Lists from '../pages/ListsMain/ListsMain';
import ManyNews from '../pages/ManyNewsMain/ManyNewsMain';
import Article from '../pages/ArticleMain/ArticleMain';
import Festivals from '../pages/FestivalsMain/FestivalsMain';
import Festival from '../pages/FestivalMain/FestivalMain';
import Director from '../pages/DirectorMain/DirectorMain';
import Movies from '../pages/MoviesMain/MoviesMain';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: ACTOR_ROUTE + '/:id',
        Component: Actor
    },
    {
        path: DIRECTOR_ROUTE + '/:id',
        Component: Director
    },
    {
        path: ACTORS_ROUTE,
        Component: Actors
    },
    {
        path: MOVIE_ROUTE + '/:id',
        Component: Movie
    },
    {
        path: MANYNEWS_ROUTE,
        Component: ManyNews
    },
    {
        path: ONENEWS_ROUTE + '/:id',
        Component: OneNews
    },
    {
        path: ARTICLES_ROUTE,
        Component: Articles
    },
    {
        path: ARTICLE_ROUTE + '/:id',
        Component: Article
    },
    {
        path: TRAILERS_ROUTE,
        Component: Trailers
    },
    {
        path: FESTIVALS_ROUTE,
        Component: Festivals
    },
    {
        path: FESTIVAL_ROUTE  + '/:id',
        Component: Festival
    },
    {
        path: LISTS_ROUTE,
        Component: Lists
    },
    {
        path: MOVIES_ROUTE,
        Component: Movies
    }
]