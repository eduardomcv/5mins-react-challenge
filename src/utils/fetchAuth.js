import { baseURL, APIToken } from '../config'

/**
 * A wrapper around fetch that sets up the request, uses the API base url and parses the response.
 * Optionally takes a URLSearchParams object
 */
export async function fetchAuth (path, params) {
  const url = `${baseURL}${path}${params ? `?${params.toString()}` : ''}`

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${APIToken}`,
      'Content-Type': 'application/json;charset=utf-8'
    }
  })

  return response.json()
}
