import React from 'react'
import { useNavigate } from 'react-router-dom'

export const MovieCard = ({ title, Desc, rating, src, id }) => {
    let navigate = useNavigate();

    return (
        <div onClick={() => navigate("/MovieDetail", { state: { id: id } })} className=' group  bg-slate-700/80 hover:scale-110 hover:-translate-y-2 text-xs text-left relative h-96 w-60 rounded-md shadow-md shadow-gray-500  hover:shadow-gray-300 hover:drop-shadow-lg'>
            <img className=' rounded-t-md object-fill object-center aspect-auto w-64 h-64' src={`https://image.tmdb.org/t/p/w500${src}`} alt={title} />
            <div className='flex justify-between '>
                <p className='truncate text-white text-base font-bold pl-0.5 pt-1 group-hover:text-red-600 group-hover:text-xl group-hover:uppercase'>{title}</p>

                <p className={`absolute bg-slate-900/40 ${rating > 5 ? 'text-green-700/90' : 'text-red-600/95'} ${Number.isInteger(rating) ? "px-2" : "p-1"} text-white group-hover:scale-125 font-bold p-1 mr-1 ring-offset-2 ring-offset-gray-100/80 group-hover:-rotate-45 group-hover:mr-2 rounded-full right-0.5 top-60 ring-2 ring-slate-700 shadow-2xl`}  >{rating}</p>
            </div>
            <p className=' absolute text-gray-300 px-1.5 py-1 h-[85px] text-opacity-90 overflow-hidden hover:overflow-y-scroll group-hover:text-white/95'>{Desc}</p>
        </div>
    )
}
