"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Info, PlayCircle, Star } from "lucide-react"
import { MovieTrailer } from "./movie-trailer"
import type { Media } from "@/lib/data"

interface MovieCardProps {
  movie: Media
}

export function MovieCard({ movie }: MovieCardProps) {
  const [showTrailer, setShowTrailer] = useState(false)

  return (
    <>
      <Card className="group relative overflow-hidden">
        <div className="aspect-[2/3] relative">
          <Image
            src={movie.image}
            alt={movie.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <Button variant="secondary" size="sm" asChild>
                <Link href={`/watch/${movie.id}`}>
                  <PlayCircle className="h-4 w-4 mr-2" />
                  Play
                </Link>
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setShowTrailer(true)}
              >
                <Info className="h-4 w-4 mr-2" />
                More Info
              </Button>
            </div>
          </div>
        </div>
        <div className="p-4 space-y-1">
          <h3 className="font-semibold line-clamp-1">{movie.title}</h3>
          <div className="flex items-center gap-x-2 text-sm text-muted-foreground">
            <span>{movie.year}</span>
            <span>•</span>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="ml-1">{movie.rating}</span>
            </div>
          </div>
        </div>
      </Card>

      <MovieTrailer
        movie={movie}
        isOpen={showTrailer}
        onClose={() => setShowTrailer(false)}
      />
    </>
  )
}