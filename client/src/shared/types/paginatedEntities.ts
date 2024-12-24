import { 
    ActorEntity, 
    MovieEntity, 
    TrailerEntity, 
    FestivalEntity, 
    NewsEntity, 
    ArticleEntity, 
    ListEntity
} from './entities';

export interface PaginatedResponse<T> {
    rows: T[];
    count: number;
}

export type MoviesEntity = PaginatedResponse<MovieEntity>;
export type ActorsEntity = PaginatedResponse<ActorEntity>;
export type ManyNewsEntity = PaginatedResponse<NewsEntity>;
export type ArticlesEntity = PaginatedResponse<ArticleEntity>;
export type TrailersEntity = PaginatedResponse<TrailerEntity>;
export type ListsEntity = PaginatedResponse<ListEntity>;
export type FestivalsEntity = PaginatedResponse<FestivalEntity>;