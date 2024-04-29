import React, { useEffect, useState } from 'react'
import MyButton from '../MyButton'

const AnimeEpisode = ({anime}) => {

    const [episode, setEpisode] = useState()

    useEffect(() => {
        setEpisode(anime.episodes?.[0]?.url ?? '')
    }, [anime])

  return (
    <div className='container align-items-center'>
        <iframe
          width="640"
          height="384"
          src={episode}
          frameborder="0"
          allowfullscreen="true">
        </iframe>
        <div className='d-flex items-wrap'>
            {anime.episodes?.map((episode) => (
                <MyButton
                    key={episode.url}
                    text={episode.number}
                    className="btn btn-dark mx-2"
                    type="episode"
                    onClick={(e) => {
                        e.preventDefault();
                        setEpisode(episode.url)
                    }}
                />
            ))}
        </div>
    </div>
  )
}

export default AnimeEpisode