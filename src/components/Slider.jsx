import React, { useEffect, useState } from 'react'

const Slider = () => {
    const [prod , setProd] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProd(data))
    }, [])
        console.log(prod)
  return (
    <div id="carouselExample" className="carousel slide" >
        <div className="carousel-inner" style={{height: '30rem'}}>
            <div className="carousel-item active">
                <img src={prod.length ? prod[0].image : null} className="d-block" style={{maxHeight : '30rem', width: '100%', objectFit : 'contain'}} alt="..." />
            </div>
            <div className="carousel-item">
                <img src={prod.length ? prod[1].image : null} style={{maxHeight : '30rem', width: '100%', objectFit : 'contain'}} alt="..." />
            </div>
            <div className="carousel-item">
                <img src={prod.length ? prod[2].image : null} className="d-block" style={{maxHeight : '30rem', width: '100%', objectFit : 'contain'}} alt="..." />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default Slider