"use client"

import { MovieCard } from "@/components/movies/movie-card"
import { movies } from "@/lib/data"

export default function Movies() {
  return (
    <div className="min-h-screen py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Movies</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  )
}