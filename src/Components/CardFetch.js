import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardGenrator from './CardGenrator';

function CardFetch() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [item, setItem] = useState([]);
    const [searchInput, setSearchInput] = useState('')


    useEffect(() => {

        const fetchMovie = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?page=${page}&sort_by=release_data.desc&api_key=b4ade421b155eb5aa0343d32a4df6287`)
                const items = await response.json();
                items.page === 1 ? setData(items.results) : setItem(items.results);
            } catch (err) {
                console.log(err)
            }
        }
        fetchMovie();
    }, [page])

    useEffect(() => {
        window.addEventListener('scroll', loadMore);
        function loadMore() {
            if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {
                setPage(page + 1);
                let lNewData = data.concat(item)
                setData(lNewData);
            }
        }
        return () => {
            window.removeEventListener('scroll', loadMore);
        }
    }, [page, item, data])
    function MovetoTop() {
        document.documentElement.scrollTop = 0;
    }

    const Search = (rows) => {
        console.log("rows", rows)
        return rows.filter(
            (row) =>
                row.original_title.toLowerCase().indexOf(searchInput) > -1
        )
    }
    return (
        <div className=' relative bg-red-700 py-10'>
            <div className='flex justify-between border-white border-b-4 border-double'>
                <input type="search"
                    onChange={(e) => { setSearchInput(e.target.value) }}
                    placeholder='Search'
                    value={searchInput}
                    className='border-2 border-slate-300 ring-2 focus:ring-0 ring-red-800 focus:shadow-white shadow-slate-900 mb-10 shadow-md focus:shadow-lg outline-none drop-shadow-lg placeholder:text-gray-500 placeholder:font-semibold bg-gray-100 w-80 sm:w-96 md:w-[500px] lg:w-[600px] focus:text-red-600 font-medium h-10 relative rounded-md ml-2 pl-10 pr-2'

                />
                <span className=' absolute left-3 top-11 '>
                    <svg className=' h-8 stroke-2 fill-red-500' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="30px" ><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
                </span>
                <Link to="/" ><svg xmlns="http://www.w3.org/2000/svg" className="mr-2 sm:mr-4 md:mr-6 lg:mr-8 h-10 w-10 bg-transparent rounded-lg shadow-md shadow-white" viewBox="0 0 20 20" fill="white">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg></Link>
            </div>
            <CardGenrator data={Search(data)} />
            <div onClick={() => MovetoTop()} className='group bg-white/30 p-2 rounded-full group-hover:bg-slate-200 bottom-10 fixed z-50 right-2 border-4 border-t-yellow-400 border-b-green-500 border-l-blue-600 border-r-rose-400'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:stroke-rose-500 hover:h-8 stroke-neutral-900" viewBox="0 0 24 24" >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg></div>

            <footer className='text-2xl font-bold font-mono    bg-red-700  text-white text-center'>Developed by:@Faisal</footer>
        </div>
    )
}

export default CardFetch
