import {useContext, useEffect, useState, FC} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./AppRouter";
import NavBar from "../widgets/NavBar/NavBar";
import {observer} from "mobx-react-lite";
import { Context } from '../shared/types/context';
import {check} from "../shared/api/userAPI";
import Footer from "../widgets/Footer/Footer";

const App: FC = observer(() => {
    const context = useContext(Context);

    if (!context) {
        throw new Error("Context must be used within a Provider");
    }

    const {user} = context
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check()
            .then((data) => {
                user.setUser(data)
                user.setIsAuth(true)
            })
            .finally(() => setLoading(false))
    }, [user])

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <BrowserRouter>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <div style={{ flex: '1' }}>
                    <NavBar />
                    <AppRouter />
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
});

export default App;
