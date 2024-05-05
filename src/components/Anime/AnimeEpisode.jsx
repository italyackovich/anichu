import React, { useEffect, useState } from 'react'
import MyButton from '../MyButton'
import './AnimeEpisode.sass'

const AnimeEpisode = ({episodes}) => {

    const [episode, setEpisode] = useState()

    useEffect(() => {
        setEpisode(episodes?.[0]?.url ?? '')
    }, [episodes])

  return (
    <div className='d-flex container align-items-center'>
        <iframe
          width="834"
          height="500"
          src={episode}
          frameborder="0"
          allowfullscreen="true">
        </iframe>
        <div className='list'>
                {episodes?.map((episode) => (
                    <MyButton
                        key={episode.url}
                        text={episode.number}
                        className="btn btn-outline-secondary"
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