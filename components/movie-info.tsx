
import { API_URL } from '../app/constants'
import styles from '../styles/movie-info.module.css'

export async function getMovieDetail(id: string) {
  const res = await fetch(`${API_URL}/${id}`)
  return res.json()
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovieDetail(id)
  return (
    <div className={styles.container}>
      <img src={movie.poster_path} alt={movie.title} className={styles.poster} />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>HomePage &rarr;</a>
      </div>
    </div>
  )
}