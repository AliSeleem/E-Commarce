import React from 'react'
import { Link } from 'react-router-dom';

const Product = ({prod}) => {
  return (
    <>
        <div className="card" style={{height: '25rem', overflow: 'hidden'}}>
        <img src={prod.image} className="card-img-top" style={{maxHeight : '10rem', objectFit : 'contain'}} alt={prod.title} />
        <div className="card-body">
            <h5 className="card-title">{prod.title.substring(0,40)}....</h5>
            <h6>Price :{prod.price}$</h6>
            <p className="card-text">{prod.description.substring(0,50)}....</p>
            <Link to={`/products/${prod.id}`} className="btn position-absolute btn-primary fixed-bottom m-1">Details</Link>
        </div>
        </div>
    </>
  )
}

export default Product;