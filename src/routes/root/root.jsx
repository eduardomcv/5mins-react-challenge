import { Combobox } from '../../components/Combobox'
import { MovieOption } from '../../components/MovieOption'
import { useQuery } from '../../hooks/useQuery'
import classes from './root.module.css'

export function Root () {
  const { data, query, reset } = useQuery('/search/movie')

  let options = []

  if (data?.results) {
    options = data.results.map((result) => ({
      id: result.id,
      title: result.title,
      posterPath: result.poster_path,
      releaseDate: result.release_date
    }))
  }

  function handleComboboxChange (value) {
    if (!value) return reset()

    const params = new URLSearchParams()
    params.set('query', value)
    query(params)
  }

  return (
    <main className={classes.pageContainer}>
      <Combobox
        onChange={handleComboboxChange}
        options={options}
        placeholder='Search movies...'
        getOptionKey={(option) => option.id}
        renderOption={(option) => <MovieOption {...option} />}
      />
    </main>
  )
}
