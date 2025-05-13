import {makeAutoObservable} from 'mobx';
import { UserEntity } from '../../shared/types/entities';

export default class UserStore {
    private _isAuth: boolean = false;
    private _user: UserEntity | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setIsAuth(bool: boolean) {
        this._isAuth = bool;
    }

    setUser(user: UserEntity) {
        this._user = user;
    }

    get isAuth(): boolean {
        return this._isAuth;
    }

    get user(): UserEntity | null {
        return this._user;
    }
}