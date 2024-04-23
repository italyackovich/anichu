import React, { useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Home from '../pages/Home'
import Authorization from '../pages/Authorization'
import Error from '../pages/Error'
import AnimeByList from '../pages/AnimeByList'

const AppRouter = () => {

    const navigate = useNavigate()

    useEffect(() => {
        navigate("/")
    }, [])

    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/login' element={<Authorization />} />
                <Route exact path='/anime/:id' element={<AnimeByList/>} />
                <Route exact path='*' element={<Navigate to={'/'} />}/>
            </Routes>
        </div>
    )
}

export default AppRouter