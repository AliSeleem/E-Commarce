import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const pa = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${pa.prodId}`)
    .then(res=>res.json())
    .then(json=>setProduct(json))
  })
  return (
    <>
        <div className="card position-relative">
        <img src={product.image} className="card-img-top" style={{maxHeight : '10rem', objectFit : 'contain'}} alt={product.title} />
        <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <h6>Price :{product.price}$</h6>
            <p className="card-text">{product.description}</p>
        </div>
        </div>
    </>
  )
}

export default ProductDetails