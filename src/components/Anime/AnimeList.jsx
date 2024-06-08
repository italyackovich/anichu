import React, { useEffect, useState } from 'react'
import AnimeItem from './AnimeItem'
import AnimeService from '../../API/AnimeService'

const AnimeList = ({title}) => {

    const [anime, setAnime] = useState([])
    const [filteredAnime, setFilteredAnime] = useState([])

    const loadAnime = async () => {
        const result = await AnimeService.getAllAnime()
        setAnime(result)
    }

    useEffect(() => {
        loadAnime();
    }, []);

    // useEffect(() => {
    //     if (anime.length > 0) {
    //         const filtered = anime.filter(item => 
    //             item.genres.some(genre => genre.name === title)
    //         );
    //         setFilteredAnime(filtered);
    //     }
    // }, [anime, title]);
    useEffect(() => {
        if (anime.length > 0) {
            const filtered = anime.filter(item =>
                item.genres.some(genre => genre.name === title)
            ).slice(0, 6); // Ограничиваем до 6 элементов

            setFilteredAnime(filtered);
        }
    }, [anime, title]);


    return (
        <div>
            <h1>{title}</h1>
            <div className='d-flex flex-wrap'>
                {filteredAnime?.map((anime) => (
                    <AnimeItem key={anime?.link} anime={anime}/>
                ))}
            </div>
        </div>
    )
}

export default AnimeList