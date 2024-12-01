"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { MovieCard } from "@/components/movies/movie-card"
import { Search as SearchIcon } from "lucide-react"

const mockMovies = [
  {
    id: 1,
    title: "The Matrix",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0",
    year: 1999,
    rating: 8.7,
  },
  {
    id: 2,
    title: "Inception",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
    year: 2010,
    rating: 8.8,
  },
  // Add more mock movies as needed
]

export default function Search() {
  const [query, setQuery] = useState("")

  return (
    <div className="min-h-screen py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            className="pl-10"
            placeholder="Search for movies, TV shows, and more..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {mockMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  )
}