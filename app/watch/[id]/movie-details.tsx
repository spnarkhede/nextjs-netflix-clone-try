"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Plus, ThumbsUp } from "lucide-react"
import dynamic from "next/dynamic"
import type { Media } from "@/lib/data"

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })

interface MovieDetailsProps {
  movie: Media
}

export function MovieDetails({ movie }: MovieDetailsProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="min-h-screen">
      <div className="relative aspect-video">
        <ReactPlayer
          url={movie.videoUrl}
          width="100%"
          height="100%"
          playing={isPlaying}
          controls
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <Card className="p-6">
          <div className="flex items-start justify-between gap-x-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">{movie.title}</h1>
              <p className="text-muted-foreground">
                {movie.year} • {movie.duration} • {movie.genre}
              </p>
            </div>
            <div className="flex gap-x-2">
              <Button onClick={() => setIsPlaying(!isPlaying)}>
                <Play className="h-5 w-5 mr-2" />
                {isPlaying ? "Pause" : "Play"}
              </Button>
              <Button variant="secondary" size="icon">
                <Plus className="h-5 w-5" />
              </Button>
              <Button variant="secondary" size="icon">
                <ThumbsUp className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <p className="mt-4 text-muted-foreground">
            {movie.description}
          </p>
        </Card>
      </div>
    </div>
  )
}