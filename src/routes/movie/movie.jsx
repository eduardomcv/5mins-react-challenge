import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '../../hooks/useQuery'
import { getImageURL } from '../../utils/getImageURL'
import classes from './movie.module.css'

export function Movie () {
  const { id } = useParams()
  const { data, loading, query } = useQuery(`/movie/${id}`)

  useEffect(() => {
    query()
  }, [])

  if (loading) return <div>Loading...</div>
  if (!data) return null

  const {
    title,
    overview,
    tagline,
    genres,
    backdrop_path: backdropPath,
    poster_path: posterPath,
    release_date: releaseDate
  } = data

  const releaseYear = releaseDate ? new Date(releaseDate).getFullYear() : null
  const formattedGenres = genres.map(genre => genre.name).join(', ')

  return (
    <main className={classes.pageContainer}>
      <div className={classes.backdropContainer}>
        {backdropPath && <img className={classes.backdrop} src={getImageURL(backdropPath)} alt='movie backdrop' />}
      </div>
      <div className={classes.movieContainer}>
        <div>
          {posterPath
            ? <img className={classes.poster} src={getImageURL(posterPath, 'w500')} alt='movie poster' />
            : <span>No poster available.</span>}
        </div>
        <div>
          <h1>{title}{releaseYear ? ` (${releaseYear})` : ''}</h1>
          <h3 className={classes.tagname}>{tagline}</h3>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{formattedGenres}</p>
        </div>
      </div>
    </main>
  )
}
