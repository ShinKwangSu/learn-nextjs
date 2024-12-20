import { API_URL } from "../app/(home)/page"

async function getMovieDetail(id: string) {
  console.log(`Fetching movies: ${Date.now()}`)
  // await new Promise((resolve) => setTimeout(resolve, 5000))
  const res = await fetch(`${API_URL}/${id}`, { cache: 'force-cache' })
  return res.json()
}

export default async function MovieInfo({ id }: { id: string }) {
  const videos = await getMovieDetail(id)
  return (
    <h6>{JSON.stringify(videos)}</h6>
  )
}