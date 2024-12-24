import {$authHost, $host} from "./index";
import { 
    ActorEntity, 
    MovieEntity, 
    TrailerEntity, 
    GenreEntity, 
    CountryEntity, 
    DirectorEntity, 
    FestivalEntity, 
    NewsEntity, 
    ArticleEntity, 
    ListEntity,
    PremiereEntity
} from '../types/entities';
import { 
    ActorsEntity, 
    MoviesEntity, 
    TrailersEntity,  
    FestivalsEntity, 
    ManyNewsEntity, 
    ArticlesEntity,
    ListsEntity
} from '../types/paginatedEntities';


export const createList = async (list: FormData): Promise<ListEntity> => {
    const {data} = await $authHost.post('api/list', list)
    return data;
}

export const addMovieToList = async (movieId: number, listId: number) => {
    const { data } = await $authHost.post('api/movielist', { movie_id: movieId, list_id: listId });
    return data;
};

export const fetchLists = async (): Promise<ListsEntity> => {
    const {data} = await $host.get('api/list')
    return data;
}

export const createActor = async (actor: FormData): Promise<ActorEntity> => {
    const {data} = await $authHost.post('api/actor', actor)
    return data;
}

export const fetchActors = async (): Promise<ActorsEntity> => {
    const {data} = await $host.get('api/actor')
    return data;
}

export const fetchOneActor = async (id: number): Promise<ActorEntity> => {
    const {data} = await $host.get('api/actor/' + id)
    return data
}

export const deleteActor = async (id: number): Promise<ActorEntity> => {
    const {data} = await $authHost.delete('api/actor/' + id);
    return data;
}

export const createMovie = async (movie: FormData): Promise<MovieEntity> => {
    const {data} = await $authHost.post('api/movie', movie)
    return data;
}

export const fetchMovies = async (): Promise<MoviesEntity> => {
    const {data} = await $host.get('api/movie')
    return data;
}

export const fetchMoviesByList = async (listId: number): Promise<MoviesEntity> => {
    const { data } = await $host.get('api/movielist', { params: { list_id: listId } });
    return data;
}

export const fetchOneMovie = async (id: number): Promise<MovieEntity> => {
    const {data} = await $host.get('api/movie/' + id, {
        params: {
            include: 'actors'
        }
    });
    return data
}

export const deleteMovie = async (id: number): Promise<MovieEntity> => {
    const {data} = await $authHost.delete('api/movie/' + id);
    return data;
}

export const createNews = async (news: FormData): Promise<NewsEntity> => {
    const {data} = await $authHost.post('api/news', news)
    return data;
}

export const fetchNews = async (): Promise<ManyNewsEntity> => {
    const {data} = await $host.get('api/news')
    return data;
}

export const fetchOneNews = async (id: number): Promise<NewsEntity> => {
    const {data} = await $host.get('api/news/' + id)
    return data
}

export const createArticles = async (articles: FormData): Promise<ArticleEntity> => {
    const {data} = await $authHost.post('api/articles', articles)
    return data;
}

export const fetchArticles = async (): Promise<ArticlesEntity> => {
    const {data} = await $host.get('api/articles')
    return data;
}

export const fetchOneArticles = async (id: number): Promise<ArticleEntity> => {
    const {data} = await $host.get('api/articles/' + id)
    return data
}

export const createFestival = async (festival: FormData): Promise<FestivalEntity> => {
    const {data} = await $authHost.post('api/festival', festival)
    return data;
}

export const fetchFestival = async (): Promise<FestivalsEntity> => {
    const {data} = await $host.get('api/festival')
    return data;
}

export const fetchOneFestival = async (id: number): Promise<FestivalEntity> => {
    const {data} = await $host.get('api/festival/' + id)
    return data
}

export const createPremiere = async (premiere: PremiereEntity): Promise<PremiereEntity> => {
    const {data} = await $authHost.post('api/premiere', premiere)
    return data;
}

export const fetchPremiere = async (): Promise<PremiereEntity> => {
    const {data} = await $host.get('api/premiere')
    return data;
}

export const fetchOnePremiere = async (id: number): Promise<PremiereEntity> => {
    const {data} = await $host.get('api/premiere/' + id)
    return data
}

export const createDirector = async (director: FormData): Promise<DirectorEntity> => {
    const {data} = await $authHost.post('api/director', director)
    return data;
}

export const fetchDirectors = async (): Promise<DirectorEntity[]> => {
    const {data} = await $host.get('api/director')
    return data;
}

export const fetchOneDirector = async (id: number): Promise<DirectorEntity> => {
    const {data} = await $host.get('api/director/' + id)
    return data
}

export const createTrailer = async (trailer: FormData): Promise<TrailerEntity> => {
    const {data} = await $authHost.post('api/trailer', trailer)
    return data;
}

export const fetchTrailers = async (): Promise<TrailersEntity> => {
    const {data} = await $host.get('api/trailer')
    return data;
}

export const createCountry = async (country: CountryEntity): Promise<CountryEntity> => {
    const {data} = await $authHost.post('api/country', country)
    return data;
}

export const fetchCountries = async (): Promise<CountryEntity[]> => {
    const {data} = await $host.get('api/country')
    return data;
}

export const createGenre = async (genre: GenreEntity): Promise<GenreEntity> => {
    const {data} = await $authHost.post('api/genre', genre)
    return data;
}

export const fetchGenres = async (): Promise<GenreEntity[]> => {
    const {data} = await $host.get('api/genre')
    return data;
}