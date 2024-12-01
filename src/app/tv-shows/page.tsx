"use client"

import { MovieCard } from "@/components/movies/movie-card"
import { tvShows } from "@/lib/data"

export default function TVShows() {
  return (
    <div className="min-h-screen py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">TV Shows</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {tvShows.map((show) => (
            <MovieCard key={show.id} movie={show} />
          ))}
        </div>
      </div>
    </div>
  )
}