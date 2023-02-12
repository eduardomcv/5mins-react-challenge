import { getImageURL } from '../../utils/getImageURL'
import classes from './MovieOption.module.css'

export function MovieOption ({ posterPath, releaseDate, title }) {
  const releaseYear = releaseDate ? new Date(releaseDate).getFullYear() : null

  return (
    <div className={classes.container}>
      {posterPath && (
        <img
          className={classes.poster}
          src={getImageURL(posterPath, 'w200')}
          alt='movie poster'
        />
      )}
      <span className={classes.title}>
        {title}{releaseYear ? ` (${releaseYear})` : ''}
      </span>
    </div>
  )
}
