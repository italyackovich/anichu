import React, { useContext, useEffect, useState } from 'react'
import "../../styles/DropDown.sass"
import UserService from '../../API/UserService';
import { UserIdContext } from '../../context/UserIdContext';
import { AuthContext } from '../../context/AuthContext';

const DropDown = ({ anime }) => {

    const { userId } = useContext(UserIdContext)
    const { isAuth } = useContext(AuthContext)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [user, setUser] = useState({});

    const setWatchingList = () => {
        const watchAnimeList = Array.isArray(user.watchAnimeList) ? user.watchAnimeList : [];
        const filteredWatchAnimeList = watchAnimeList?.filter(item => item.id !== anime.id);
        const newWatchAnimeList = [...filteredWatchAnimeList, anime];
        const filteredWatchedAnimeList = user.watchedAnimeList?.filter(item => item.id !== anime.id);
        const filteredWillWatchAnimeList = user.willWatchAnimeList?.filter(item => item.id !== anime.id);

        user.watchAnimeList = newWatchAnimeList;
        user.watchedAnimeList = filteredWatchedAnimeList;
        user.willWatchAnimeList = filteredWillWatchAnimeList;
        uploadUser()
        setIsDropdownOpen(false)
    }

    const setWatchedList = () => {
        const watchedAnimeList = Array.isArray(user.watchedAnimeList) ? user.watchedAnimeList : [];
        const filteredWatchedAnimeList = watchedAnimeList?.filter(item => item.id !== anime.id);
        const newWatchedAnimeList = [...filteredWatchedAnimeList, anime];
        const filteredWatchAnimeList = user.watchAnimeList?.filter(item => item.id !== anime.id);
        const filteredWillWatchAnimeList = user.willWatchAnimeList?.filter(item => item.id !== anime.id);

        user.watchedAnimeList = newWatchedAnimeList;
        user.watchAnimeList = filteredWatchAnimeList;
        user.willWatchAnimeList = filteredWillWatchAnimeList;
        uploadUser()
        setIsDropdownOpen(false)
    }
    const setWillWatchList = () => {
        const willWatchAnimeList = Array.isArray(user.willWatchAnimeList) ? user.willWatchAnimeList : [];
        const filteredWillWatchAnimeList = willWatchAnimeList?.filter(item => item.id !== anime.id);
        const newWillWatchAnimeList = [...filteredWillWatchAnimeList, anime];
        const filteredWatchedAnimeList = user.watchedAnimeList?.filter(item => item.id !== anime.id);
        const filteredWatchAnimeList = user.watchAnimeList?.filter(item => item.id !== anime.id);

        user.willWatchAnimeList = newWillWatchAnimeList;
        user.watchedAnimeList = filteredWatchedAnimeList;
        user.watchAnimeList = filteredWatchAnimeList;
        uploadUser()
        setIsDropdownOpen(false)
    }

    const uploadUser = async () => {
        await UserService.patchUser(user)
    }

    const getUser = async (id) => {
        const response = await UserService.getById(id)
        setUser(response)
    }

    useEffect(() => {
        getUser(userId)
    }, [])

    return (
        <div className="dropdown my-3">
            <button className="btn btn-success dropdown-toggle w-75" disabled={!isAuth} type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                Добавить
            </button>
            {isDropdownOpen ?
                <div className='list-group' style={{ position: "absolute" }}>
                    <li className='list-group-item'><button onClick={() => setWatchingList()} className="btn btn-dark text-success w-100">Смотрю</button></li>
                    <li className='list-group-item'><button onClick={() => setWillWatchList()} className="btn btn-dark text-success w-100">Буду смотреть</button></li>
                    <li className='list-group-item'><button onClick={() =>setWatchedList()} className="btn btn-dark text-success w-100">Просмотрено</button></li>
                </div>
                : null
            }
        </div>
    )
}

export default DropDown