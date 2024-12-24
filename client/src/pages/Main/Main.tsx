import { useEffect } from 'react';
import TrailerRow from '../../entities/Main/TrailerRow/TrailerRow';
import {observer} from "mobx-react-lite";
import useStore from '../../shared/lib/hooks/useStore';
import PremiereRow from '../../entities/Main/PremiereRow/PremiereRow';
import NewsRow from '../../entities/Main/NewsRow/NewsRow';
import ArticlesRow from '../../entities/Main/ArticlesRow/ArticlesRow';
import FestivalRow from '../../entities/Main/FestivalRow/FestivalRow';
import {fetchNews, fetchArticles, fetchFestival, fetchPremiere, fetchTrailers} from "../../shared/api/movieAPI";
import s from './Main.module.css';
import Container from '../../shared/ui/Container/Container';

const Main = observer(() => {
    const { store } = useStore();

    useEffect(() => {
    fetchNews().then(data => store.setNews(data.rows))
    fetchArticles().then(data => store.setArticles(data.rows))
    fetchFestival().then(data => store.setFestivals(data.rows))
    fetchPremiere().then(data => store.setPremieres(data))
    fetchTrailers().then(data => store.setTrailers(data.rows))
    }, [store])

    return (
        <Container>
            <TrailerRow/>
            <div className={s.secondRow}>
                <div className={s.premiere}>
                    <PremiereRow/>
                </div>
                <div className={s.news}>
                    <NewsRow/>
                </div>
            </div>
            <ArticlesRow/>
            <FestivalRow/>
        </Container>
    )
});

export default Main;