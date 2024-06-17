import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Authorization from '../pages/Authorization'
import AnimeByList from '../pages/AnimeByList'
import ProfileUser from '../pages/ProfileUser'
import Catalog from '../pages/Catalog'

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/login' element={<Authorization />} />
                <Route exact path='/anime/:id' element={<AnimeByList/>} />
                <Route exact path='/profile/:id' element={<ProfileUser/>} />
                <Route exact path='*' element={<Navigate to={'/'} />}/>
                <Route exact path='/catalog' element={<Catalog />}/>
            </Routes>
        </div>
    )
}

export default AppRouter