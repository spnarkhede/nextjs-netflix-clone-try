"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ContentSlider } from "@/components/movies/content-slider"
import { MovieTrailer } from "@/components/movies/movie-trailer"
import { Info, PlayCircle } from "lucide-react"
import { movies, tvShows } from "@/lib/data"

const featuredContent = movies[0]

// Create different categories
const trendingNow = [...movies, ...tvShows].slice(0, 10)
const popularMovies = movies.slice(10, 20)
const topTVShows = tvShows.slice(0, 10)
const newReleases = [...movies, ...tvShows].slice(20, 30)
const myList = [...movies, ...tvShows].slice(30, 40)

export default function Featured() {
  const [showTrailer, setShowTrailer] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[80vh]">
        <Image
          src={featuredContent.image}
          alt={featuredContent.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              {featuredContent.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {featuredContent.description}
            </p>
            <div className="flex gap-x-4">
              <Button size="lg" asChild>
                <a href={`/watch/${featuredContent.id}`}>
                  <PlayCircle className="h-5 w-5 mr-2" />
                  Play
                </a>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => setShowTrailer(true)}
              >
                <Info className="h-5 w-5 mr-2" />
                More Info
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sliders */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <ContentSlider title="Trending Now" items={trendingNow} />
        <ContentSlider title="Popular Movies" items={popularMovies} />
        <ContentSlider title="Top TV Shows" items={topTVShows} />
        <ContentSlider title="New Releases" items={newReleases} />
        <ContentSlider title="My List" items={myList} />
      </div>

      <MovieTrailer
        movie={featuredContent}
        isOpen={showTrailer}
        onClose={() => setShowTrailer(false)}
      />
    </div>
  )
}