import Image from "next/image"
import { useEffect, useState } from "react"
import { Movie } from "../Interfaces"

interface Props {
  netflixOriginals: Movie[]
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
  }, [netflixOriginals])
  

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}`} alt='' layout='fill' className="object-cover" />
      </div>
      <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold">{movie?.title || movie?.name || movie?.original_name}</h1>
      <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">{movie?.overview}</p>
      <div className="flex space-x-3">
        <button className="banner_button bg-white text-black">
          <svg className="w-4 h-4 md:w-7 md:h-7" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.266 9.51622C15.2579 8.74874 15.2579 7.25128 14.266 6.4838C11.2685 4.1644 7.92128 2.33625 4.34974 1.06777L3.69727 0.836032C2.449 0.392692 1.13049 1.23725 0.961496 2.5258C0.489336 6.12601 0.489336 9.874 0.961495 13.4742C1.13048 14.7628 2.449 15.6073 3.69727 15.164L4.34974 14.9322C7.92128 13.6638 11.2685 11.8356 14.266 9.51622Z" fill="black"/>
          </svg>
          Play
        </button>
        <button className="banner_button bg-[gray]/70">
          More Info
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:w-8 md:h-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Banner
