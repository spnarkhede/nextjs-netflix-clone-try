"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Netflix } from "@/components/icons/netflix"
import { ChevronRight } from "lucide-react"

export default function Join() {
  const [email, setEmail] = useState("")

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black/60" />
        <img
          src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <Link href="/">
            <Netflix className="h-12 w-auto text-red-600 mx-auto" />
          </Link>
          
          <h1 className="text-5xl font-bold">
            Unlimited movies, TV shows, and more
          </h1>
          
          <p className="text-xl">
            Watch anywhere. Cancel anytime.
          </p>

          <div className="max-w-lg mx-auto space-y-4">
            <p className="text-lg">
              Ready to watch? Enter your email to create or restart your membership.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="email" className="sr-only">
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="h-12"
                />
              </div>
              <Button size="lg" className="gap-x-2" asChild>
                <Link href="/subscription">
                  Get Started
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}