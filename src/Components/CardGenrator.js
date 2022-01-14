import React from 'react'
import { MovieCard } from './MovieCard'

function CardGenrator({ data }) {
    return (
        <div className='grid grid-cols-1 place-items-center sm:left-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-slate-900  p-10 gap-5 border-t-4 border-double'>

            {data && data.map((item) => {
                return (
                    <MovieCard
                        key={item.id}
                        title={item.original_title}
                        Desc={item.overview}
                        rating={item.vote_average}
                        src={item.poster_path}
                        id={item.id}
                    />

                )
            })}
        </div>
    )
}

export default CardGenrator
