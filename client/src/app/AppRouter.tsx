import {useContext} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'
import { authRoutes, publicRoutes } from './routes';
import { MAIN_ROUTE } from '../shared/lib/utils/consts';
import {Context} from '../shared/types/context';

const AppRouter = () => {
    const {user} = useContext(Context)

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component})=>
            <Route key = {path} path={path}  Component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component})=>
            <Route key = {path} path={path}  Component={Component} exact/>
            )}
            { <Route path="*" element={ <Navigate to={MAIN_ROUTE} replace={true} /> } /> }
        </Routes>
    )
};

export default AppRouter;