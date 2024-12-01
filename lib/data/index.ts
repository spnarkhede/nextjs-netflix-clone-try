export * from './movies'
export * from './tv-shows'

export type Media = {
  id: string
  title: string
  image: string
  year: number
  rating: number
  duration: string
  genre: string
  description: string
  videoUrl: string
}