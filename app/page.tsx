"use client"

import { Button } from "@/components/ui/button"
import { PlayCircle, Info } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <Image
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-start p-6 sm:p-8 md:p-12 lg:p-16">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Unlimited movies, TV shows, and more
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl md:text-2xl">
              Watch anywhere. Cancel anytime.
            </p>
            <div className="flex gap-x-4">
              <Button size="lg" className="gap-x-2" asChild>
                <Link href="/watch/featured">
                  <PlayCircle className="h-5 w-5" />
                  Play Now
                </Link>
              </Button>
              <Button size="lg" variant="secondary" className="gap-x-2" asChild>
                <Link href="/search">
                  <Info className="h-5 w-5" />
                  More Info
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}