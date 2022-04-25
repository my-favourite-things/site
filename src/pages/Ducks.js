import React from 'react'
import Gallery from '../components/Gallery'
import { duckImages } from '../data/duckImages'

function Ducks() {
  return (
    <div className="container-fluid py-4">
      <h1 className="display-4 text-center">Ducks</h1>
      <Gallery images={duckImages}/>
    </div>
  )
}

export default Ducks
