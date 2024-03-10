import React from 'react'
import './Cards.css'
function Cards({title,imgsrc,price,description}) {
  return (
    <>
        <div className="cards">
            <img src={imgsrc} alt="" />
            <h1>{title}</h1>
            <h2>{price}</h2>
            <p>{description}</p>
        </div>
    </>
  )
}

export default Cards