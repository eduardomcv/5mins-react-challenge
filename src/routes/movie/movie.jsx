import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '../../hooks/useQuery'
import { formatCurrency } from '../../utils/formatCurrency'
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
    budget,
    revenue,
    backdrop_path: backdropPath,
    poster_path: posterPath,
    release_date: releaseDate,
    vote_average: rating
  } = data

  const releaseYear = releaseDate ? new Date(releaseDate).getFullYear() : null
  const formattedGenres = genres.map(genre => genre.name).join(', ')

  return (
    <div className={classes.pageContainer}>
      <div className={classes.backdropContainer}>
        {backdropPath && <img className={classes.backdrop} src={getImageURL(backdropPath)} alt='movie backdrop' />}
        <Link className={classes.link} to='/'>
          &lt; Back to homepage
        </Link>
      </div>
      <main className={classes.movieContainer}>
        <div>
          {posterPath
            ? <img className={classes.poster} src={getImageURL(posterPath, 'w500')} alt='movie poster' />
            : <div className={classes.poster}><span>No poster available.</span></div>}
        </div>
        <div>
          <h1 className={classes.title}>{title}{releaseYear ? ` (${releaseYear})` : ''}</h1>
          {tagline && <h3 className={classes.tagline}>{tagline}</h3>}
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Details</h2>
          <p><b>Genres:</b> {formattedGenres}</p>
          <p><b>Rating:</b> {rating.toFixed(1)} out of 10</p>
          <p><b>Budget:</b> {formatCurrency(budget)}</p>
          <p><b>Revenue:</b> {formatCurrency(revenue)}</p>
        </div>
      </main>
    </div>
  )
}