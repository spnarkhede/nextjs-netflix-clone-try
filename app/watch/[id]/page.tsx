import { MovieDetails } from "./movie-details"
import { movies, tvShows, type Media } from "@/lib/data"

const allMedia: Media[] = [...movies, ...tvShows]

export function generateStaticParams() {
  return allMedia.map((item) => ({
    id: item.id.toString(),
  }))
}

interface WatchPageProps {
  params: { id: string }
}

export default function Watch({ params }: WatchPageProps) {
  const media = allMedia.find((m) => m.id === params.id) || allMedia[0]
  return <MovieDetails movie={media} />
}