import { makeAutoObservable } from "mobx";

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
} from '../../shared/types/entities';

export default class MovieStore {
    private _lists: ListEntity[] = [];
    private _movies: MovieEntity[] = [];
    private _trailers: TrailerEntity[] = [];
    private _premieres: PremiereEntity[] = [];
    private _news: NewsEntity[] = [];
    private _articles: ArticleEntity[] = [];
    private _festivals: FestivalEntity[] = [];
    private _actors: ActorEntity[] = [];
    private _genres: GenreEntity[] = [];
    private _directors: DirectorEntity[] = [];
    private _countries: CountryEntity[] = [];
    private _selectedList?: ListEntity;
    private _selectedGenre?: GenreEntity;
    private _selectedDirector?: DirectorEntity;
    private _selectedCountry?: CountryEntity;
    private _selectedActor?: ActorEntity;
    private _selectedMovie?: MovieEntity;
    private _selectedNews?: NewsEntity;
    private _selectedArticles?: ArticleEntity;
    private _selectedFestival?: FestivalEntity;

    constructor() {
        makeAutoObservable(this);
    }

    // Setters
    setCountries(countries: CountryEntity[]) {
        this._countries = countries;
    }

    setDirectors(directors: DirectorEntity[]) {
        this._directors = directors;
    }

    setGenres(genres: GenreEntity[]) {
        this._genres = genres;
    }

    setActors(actors: ActorEntity[]) {
        this._actors = actors;
    }

    setFestivals(festivals: FestivalEntity[]) {
        this._festivals = festivals;
    }

    setArticles(articles: ArticleEntity[]) {
        this._articles = articles;
    }

    setNews(news: NewsEntity[]) {
        this._news = news;
    }

    setPremieres(premieres: PremiereEntity[]) {
        this._premieres = premieres;
    }

    setTrailers(trailers: TrailerEntity[]) {
        this._trailers = trailers;
    }

    setLists(lists: ListEntity[]) {
        this._lists = lists;
    }

    setMovies(movies: MovieEntity[]) {
        this._movies = movies;
    }

    setSelectedList(list: ListEntity) {
        this._selectedList = list;
    }

    setSelectedGenre(genre: GenreEntity) {
        this._selectedGenre = genre;
    }

    setSelectedDirector(director: DirectorEntity) {
        this._selectedDirector = director;
    }

    setSelectedCountry(country: CountryEntity) {
        this._selectedCountry = country;
    }

    setSelectedActor(actor: ActorEntity) {
        this._selectedActor = actor;
    }

    setSelectedNews(news: NewsEntity) {
        this._selectedNews = news;
    }

    setSelectedFestival(festival: FestivalEntity) {
        this._selectedFestival = festival;
    }

    setSelectedArticles(articles: ArticleEntity) {
        this._selectedArticles = articles;
    }

    setSelectedMovie(movie: MovieEntity) {
        this._selectedMovie = movie;
    }

    // Getters
    get selectedMovie() {
        return this._selectedMovie;
    }

    get selectedActor() {
        return this._selectedActor;
    }

    get selectedNews() {
        return this._selectedNews;
    }

    get selectedFestival() {
        return this._selectedFestival;
    }

    get selectedArticles() {
        return this._selectedArticles;
    }

    get selectedCountry() {
        return this._selectedCountry;
    }

    get selectedDirector() {
        return this._selectedDirector;
    }

    get selectedGenre() {
        return this._selectedGenre;
    }

    get countries() {
        return this._countries;
    }

    get directors() {
        return this._directors;
    }

    get selectedList() {
        return this._selectedList;
    }

    get genres() {
        return this._genres;
    }

    get actors() {
        return this._actors;
    }

    get festivals() {
        return this._festivals;
    }

    get articles() {
        return this._articles;
    }

    get news() {
        return this._news;
    }

    get premieres() {
        return this._premieres;
    }

    get trailers() {
        return this._trailers;
    }

    get lists() {
        return this._lists;
    }

    get movies() {
        return this._movies;
    }
}