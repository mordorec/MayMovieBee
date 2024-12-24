import { createRoot } from 'react-dom/client';
import App from './App';
import { Context } from '../shared/types/context';
import UserStore from './store/userStore';
import MovieStore from './store/MovieStore';

createRoot(document.getElementById('root')!).render(
    <Context.Provider value={{
        user: new UserStore(),
        store: new MovieStore(),
    }}>
        <App />
    </Context.Provider>
);