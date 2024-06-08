import React from 'react'
import CatalogItem from './CatalogItem'

const AnimeCatalog = ({anime}) => {
    return (
        <div>
            <h1>Список аниме</h1>
            <div className='container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                {anime?.map((anime) => (
                    <CatalogItem key={anime.link} anime={anime} />
                ))}
            </div>
        </div>
    )
}

export default AnimeCatalog