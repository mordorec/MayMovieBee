import { createContext } from 'react';
import UserStore from '../../app/store/userStore';
import MovieStore from '../../app/store/MovieStore';

export interface IContext {
    user: UserStore;
    store: MovieStore;
}

export const Context = createContext<IContext | null>(null);