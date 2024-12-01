"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Netflix } from "@/components/icons/netflix"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black/60" />
        <img
          src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col">
        <header className="p-4">
          <Link href="/" className="block w-32">
            <Netflix className="h-8 w-auto text-red-600" />
          </Link>
        </header>

        <main className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-black/75 rounded-lg p-8 sm:p-12">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">Sign In</h1>
              </div>

              <form className="space-y-6">
                <div className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Email or mobile number"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
                  />
                </div>

                <Button className="w-full h-12 text-lg" size="lg">
                  Sign in
                </Button>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" className="border-zinc-700" />
                    <label htmlFor="remember" className="text-zinc-400">
                      Remember me
                    </label>
                  </div>
                  <Link href="/forgot-password" className="text-zinc-400 hover:underline">
                    Forgot password?
                  </Link>
                </div>
              </form>

              <div className="space-y-4">
                <div className="text-zinc-400">
                  <span>New to Netflix?</span>{" "}
                  <Link href="/join" className="text-white hover:underline">
                    Sign up now.
                  </Link>
                </div>

                <p className="text-sm text-zinc-400">
                  This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot.{" "}
                  <Link href="/learn-more" className="text-blue-500 hover:underline">
                    Learn more.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}