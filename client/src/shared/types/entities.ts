export interface ActorEntity {
    id: number;
    name: string;
    height: number;
    birth: string;
    img: string;
    country_id: number;
    town: string;
    country: CountryEntity
}

export interface MovieEntity {
    id: number;
    name: string;
    rating?: number;
    img: string;
    director_id?: number;
    description?: string;
    year: number;
    genre_id: number;
    country_id: number;
    tagline?: string;
    director: DirectorEntity,
    genre: GenreEntity,
    country: CountryEntity,
    actors: ActorEntity[] 
}

export interface TrailerEntity {
    id: number;
    url: string;
    movie_id: number;
    title: string;
}

export interface GenreEntity {
    id: number;
    name: string;
}

export interface CountryEntity {
    id: number;
    name: string;
}

export interface DirectorEntity {
    id: number;
    name: string;
    height: number;
    birth: string;
    img: string;
    country_id: number;
    town: string;
    country: CountryEntity
}

export interface FestivalEntity {
    id: number;
    name: string;
    short_description: string;
    date: string;
    img: string;
    long_description: string;
}

export interface NewsEntity {
    id: number;
    name: string;
    description: string;
    date: string;
    img: string;
}

export interface ArticleEntity {
    id: number;
    name: string;
    short_description: string;
    date: string;
    img: string;
    long_description: string;
}

export interface ListEntity {
    id: number;
    name: string;
    img: string;
}

export interface UserEntity {
    id: number;
    email: string;
    password: string;
    role: string;
}

export interface PremiereEntity {
    id: number;
    movie_id: number;
    date: Date;
    movie: MovieEntity
}