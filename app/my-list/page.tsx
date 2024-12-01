"use client"

import { useState } from "react"
import { MovieCard } from "@/components/movies/movie-card"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"
import Link from "next/link"

const savedMovies = [
  {
    id: "saved1",
    title: "The Shawshank Redemption",
    image: "https://images.unsplash.com/photo-1507924538820-ede94a04019d",
    year: 1994,
    rating: 9.3,
  },
  {
    id: "saved2",
    title: "The Godfather",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
    year: 1972,
    rating: 9.2,
  }
]

export default function MyList() {
  const [movies] = useState(savedMovies)

  if (movies.length === 0) {
    return (
      <div className="min-h-screen py-24 px-4 md:px-6 flex items-center justify-center">
        <div className="text-center space-y-4">
          <AlertCircle className="h-12 w-12 mx-auto text-muted-foreground" />
          <h2 className="text-2xl font-semibold">Your list is empty</h2>
          <p className="text-muted-foreground">Add movies and TV shows to your list to watch them later</p>
          <Button asChild>
            <Link href="/browse">Browse Content</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">My List</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  )
}