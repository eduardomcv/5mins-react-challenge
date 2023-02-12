import { imagesBaseURL } from '../config'

export function getImageURL (path, size = 'original') {
  return `${imagesBaseURL}/${size}${path}`
}
