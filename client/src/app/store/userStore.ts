import {makeAutoObservable} from 'mobx';
import { User } from '../../shared/types/entities';

export default class UserStore {
    private _isAuth: boolean = false;
    private _user: User | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setIsAuth(bool: boolean) {
        this._isAuth = bool;
    }

    setUser(user: User) {
        this._user = user;
    }

    get isAuth(): boolean {
        return this._isAuth;
    }

    get user(): User | null {
        return this._user;
    }
}