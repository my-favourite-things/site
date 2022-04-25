import ImageCard from './ImageCard'
import './Gallery.css'

function Gallery({ images }) {
  return (
    <div className="gallery">
      {images.map(image => <ImageCard src={image.src} title={image.title} description={image.description} key={image.src}/>)}
    </div>
  )
}

export default Gallery
