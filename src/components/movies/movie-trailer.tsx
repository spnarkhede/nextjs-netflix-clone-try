"use client"

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Play, Plus, ThumbsUp, X } from "lucide-react"
import dynamic from "next/dynamic"
import type { Media } from "@/lib/data"

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })

interface MovieTrailerProps {
  movie: Media
  isOpen: boolean
  onClose: () => void
}

export function MovieTrailer({ movie, isOpen, onClose }: MovieTrailerProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <DialogHeader>
          <DialogTitle className="sr-only">{movie.title} - Trailer</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-2 top-2 z-50"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="aspect-video">
            <ReactPlayer
              url={movie.videoUrl}
              width="100%"
              height="100%"
              playing={isOpen}
              controls
            />
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-start justify-between gap-x-4">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold">{movie.title}</h2>
                <p className="text-sm text-muted-foreground">
                  {movie.year} • {movie.duration} • {movie.genre}
                </p>
              </div>
              <div className="flex gap-x-2">
                <Button>
                  <Play className="h-4 w-4 mr-2" />
                  Play
                </Button>
                <Button variant="secondary" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
                <Button variant="secondary" size="icon">
                  <ThumbsUp className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{movie.description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}