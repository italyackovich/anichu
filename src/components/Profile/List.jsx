import React, { useEffect, useMemo, useState } from 'react'
import MyButton from '../MyButton';
import "./List.sass"
import { Link, useParams } from 'react-router-dom';
import UserService from "../../API/UserService"

const List = () => {
    const [isOpenWatching, setIsOpenWatching] = useState(false);
    const [isOpenWillWatching, setIsOpenWillWatching] = useState(false);
    const [isOpenWatched, setIsOpenWatched] = useState(false);

    const [user, setUser] = useState({})
    const [watchAnimeList, setWatchAnimeList] = useState([])
    const [watchedAnimeList, setWatchedAnimeList] = useState([])
    const [willWatchAnimeList, setWillWatchAnimeList] = useState([])

    const setLists = () => {
        const watchAnimeList = Array.isArray(user.watchAnimeList) ? user.watchAnimeList : [];
        const watchedAnimeList = Array.isArray(user.watchedAnimeList) ? user.watchedAnimeList : [];
        const willWatchAnimeList = Array.isArray(user.willWatchAnimeList) ? user.willWatchAnimeList : [];
        setWatchAnimeList(watchAnimeList)
        setWatchedAnimeList(watchedAnimeList)
        setWillWatchAnimeList(willWatchAnimeList)
    }

    useEffect(() => {
        const getUser = async () => {
            const response = await UserService.getById(params.id)
            // console.log(response)
            setUser(response)
        }
        getUser()
        setLists()
    }, [watchAnimeList, watchedAnimeList, willWatchAnimeList])
    

    const params = useParams()

    return (
        <div className="accordion w-100 my-3" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <MyButton text={"Смотрю"} className={`accordion-button ${isOpenWatching ? "collapsed" : ""}`} onClick={() => setIsOpenWatching(!isOpenWatching)} />
                </h2>
                <div id="panelsStayOpen-collapseOne" className={`accordion-collapse collapse ${isOpenWatching ? "show" : ""}`}>
                    <div className="accordion-body">
                        {watchAnimeList.map((anime, index) => (
                            <Link className='d-flex link-success align-items-center my-2 link-underline-opacity-0' to={`/anime/${anime.id}`} key={index}>
                                <img className='rounded' src={`${anime.img}`} style={{ width: "80px", height: "100px", overflow: "hidden" }}/>
                                <h5 className='mx-3'>{anime.name}</h5>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <MyButton text={"Буду смотреть"} className={`accordion-button ${isOpenWillWatching ? "collapsed" : ""}`} onClick={() => setIsOpenWillWatching(!isOpenWillWatching)} />
                </h2>
                <div id="panelsStayOpen-collapseTwo" className={`accordion-collapse collapse ${isOpenWillWatching ? "show" : ""}`}>
                    <div className="accordion-body">
                    {willWatchAnimeList.map((anime, index) => (
                        <Link className='d-flex link-success align-items-center my-2 link-underline-opacity-0' to={`/anime/${anime.id}`} key={index}>
                            <img className='rounded' src={`${anime.img}`} style={{ width: "80px", height: "100px", overflow: "hidden" }}/>
                            <h5 className='mx-3'>{anime.name}</h5>
                        </Link>
                    ))}
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <MyButton text={"Просмотрено"} className={`accordion-button ${isOpenWatched ? "collapsed" : ""}`} onClick={() => setIsOpenWatched(!isOpenWatched)} />
                </h2>
                <div id="panelsStayOpen-collapseThree" className={`accordion-collapse collapse ${isOpenWatched ? "show" : ""}`}>
                    <div className="accordion-body">
                    {watchedAnimeList.map((anime, index) => (
                            <Link className='d-flex link-success align-items-center my-2 link-underline-opacity-0' to={`/anime/${anime.id}`} key={index}>
                                <img className='rounded' src={`${anime.img}`} style={{ width: "80px", height: "100px", overflow: "hidden" }}/>
                                <h5 className='mx-3'>{anime.name}</h5>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List