import { useRouteError } from 'react-router-dom'

/**
 * Just a simple fallback for the router.
 * This component could be expanded but it's not in the scope of the exercise.
 */
export function ErrorElement () {
  const error = useRouteError()

  console.error(error)

  const { status, statusText, data } = error

  return (
    <div>
      <h1>Oops! Something went wrong!</h1>
      {status && statusText && <p>{status}: {statusText}</p>}
      {data && <p>{error.data}</p>}
    </div>
  )
}
