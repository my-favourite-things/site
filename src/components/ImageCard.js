import { useState } from 'react';
import './ImageCard.css'

function ImageCard({src, title, description}) {
  const [likeCount, setLikeCount] = useState(0)

  function increaseLikeCount() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className="card">
      <img src={src} className="card-img-top" alt={title}/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-success btn-like" onClick={increaseLikeCount}><i className="bi bi-suit-heart-fill"></i></button>
        <span className="text-success ms-2">{likeCount > 0 ? `+${likeCount}` : ''}</span>
      </div>
    </div>
  )
}

export default ImageCard
