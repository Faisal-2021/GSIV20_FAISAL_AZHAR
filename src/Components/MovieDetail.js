import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';

function MovieDetail() {
  
  const [movie, setMovie] = useState([]);
  const [cast, setCast] = useState([]);
  const location = useLocation();
  console.log(cast)
   
  var directors = [];
  var Casts = [];
  cast.crew && cast.crew.forEach(function(entry){
      if (entry.job === 'Director') {
          directors.push(entry.name);
      }
      
  })
  cast.cast && cast.cast.forEach(function(entry){
    if (entry.known_for_department === 'Acting') {
      Casts.push(entry.original_name);
    }
    
})
  console.log('acting: ' + Casts.join(', '));

  // cast.crew && cast.crew.map((c)=>
  //   {
  //     return(
  //       if(c.job === 'Director'){console.log(c.name)}
  //     //  c.job === 'Director'? directors.push(c.name) : "c"
  //     )}
  // )
  
  useEffect(() => {
    const MovieDetail = async () => {
      try {
        const responseMovie = await fetch(`https://api.themoviedb.org/3/movie/${location.state.id}?api_key=b4ade421b155eb5aa0343d32a4df6287`)
        const items = await responseMovie.json();
        const responseCast = await fetch(`https://api.themoviedb.org/3/movie/${location.state.id}/credits?api_key=b4ade421b155eb5aa0343d32a4df6287`)
        const cast = await responseCast.json();
        setMovie(items);
        setCast(cast);
        

      } catch (err) {
        console.log(err)
      }
    }
    MovieDetail()
  }, [location.state.id])

  return (
    <div className=' bg-gradient-to-r from-rose-200 to-slate-600 h-screen'>
      <div className='flex justify-between  bg-red-500 p-5 border-b-4 border-white'>
        <p className='text-white font-semibold text-2xl ml-5 '>Movie Details</p>
        <div className=''>
          <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" className="mr-2 sm:mr-4 md:mr-6 lg:mr-8 h-10 w-10 bg-gradient-to-t from-slate-300 to-red-700 rounded-lg shadow-md shadow-white" viewBox="0 0 20 20" fill="white">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg></Link>
        </div>
      </div>



      <div className='flex mt-4 flex-col sm:flex-row h-96  rounded-b-md shadow-lg shadow-slate-400 drop-shadow-lg '>
        <div className=' basis-2/5 sm:basis-1/4'>
          <img className='h-[384px] w-full rounded-l-md' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='da' />
        </div>
        <div className=' basis-3/5 sm:basis-3/4 bg-gradient-to-r from-slate-900 to-red-500/50 text-white p-2  rounded-r-md'>
          <p className=' text-white font-mono font-semibold sm:font-bold text-base sm:text-lg md:text-2xl bg-cl'>{movie.original_title} <span className={`text-base ${movie.vote_average > 5 ? 'bg-green-700/90' : 'bg-red-600/95'} px-3 py-0.5 rounded-xl`}>{movie.vote_average}</span></p>
          <p className=' mt-2'>{movie.release_date}  | {Math.floor(movie.runtime/60)}h {movie.runtime%60}m | {directors}</p>
          <p className='mt-2 text-gray-200/90 '><span className=' text-gray-100 font-semibold'>Cast : </span> {Casts.join(', ')}</p>
          <p className=' mt-3 text-gray-200/90'><span className=' text-gray-100 font-semibold'> Description</span> : {movie.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
