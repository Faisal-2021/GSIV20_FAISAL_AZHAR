import React from 'react'
import {Routes,Route} from 'react-router-dom'
import CardFetch from './Components/CardFetch'
import MovieDetail from './Components/MovieDetail'

function App() {

  return (
    <div>
    
     <Routes>
       <Route path="/"  element={<CardFetch/>}  />
       <Route path="/MovieDetail" element={<MovieDetail/>}  />
     </Routes>
    </div>
  )
}

export default App
