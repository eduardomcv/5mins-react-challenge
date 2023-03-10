import { Link } from 'react-router-dom'
import { getImageURL } from '../../utils/getImageURL'
import classes from './MovieOption.module.css'

export function MovieOption ({ id, posterPath, releaseDate, title }) {
  const releaseYear = releaseDate ? new Date(releaseDate).getFullYear() : null

  return (
    <Link to={`/movie/${id}`}>
      <div className={classes.container}>
        {posterPath && (
          <img
            className={classes.poster}
            src={getImageURL(posterPath, 'w200')}
            alt='movie poster'
          />
        )}
        <span>{title}{releaseYear ? ` (${releaseYear})` : ''}</span>
      </div>
    </Link>
  )
}
