"use client"

import { MovieCard } from "@/components/movies/movie-card"

const newReleases = [
  {
    id: "new1",
    title: "The Gray Man",
    image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf",
    year: 2023,
    rating: 8.2,
  },
  {
    id: "new2",
    title: "Don't Look Up",
    image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9",
    year: 2023,
    rating: 7.9,
  },
  {
    id: "new3",
    title: "Red Notice",
    image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b",
    year: 2023,
    rating: 7.5,
  }
]

export default function NewAndPopular() {
  return (
    <div className="min-h-screen py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">New & Popular</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {newReleases.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  )
}