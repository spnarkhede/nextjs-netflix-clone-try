"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { MovieCard } from "./movie-card"
import type { Media } from "@/lib/data"

interface ContentSliderProps {
  title: string
  items: Media[]
}

export function ContentSlider({ title, items }: ContentSliderProps) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    const container = sliderRef.current
    if (!container) return

    const scrollAmount = direction === "left" ? -container.offsetWidth : container.offsetWidth
    container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    setScrollPosition(container.scrollLeft + scrollAmount)
  }

  return (
    <div className="relative group">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "absolute left-0 top-1/2 -translate-y-1/2 z-10 h-full rounded-none opacity-0 group-hover:opacity-100 transition-opacity",
            scrollPosition <= 0 && "hidden"
          )}
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          onScroll={(e) => setScrollPosition(e.currentTarget.scrollLeft)}
        >
          {items.map((item) => (
            <div key={item.id} className="flex-none w-[250px] snap-start">
              <MovieCard movie={item} />
            </div>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-full rounded-none opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>
    </div>
  )
}