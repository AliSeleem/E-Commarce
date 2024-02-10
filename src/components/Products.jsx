import React, { useEffect, useState } from 'react'
import Product from './Product';

const Products = () => {
    const [productList, setProductList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [size, setSize] = useState("col-3");

    const getCat = (cat) => {
      fetch(`https://fakestoreapi.com/products/category/${cat}`)
      .then(res=>res.json())
      .then(json=>setProductList(json))
    }

    const getProds = () => {
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(data=>setProductList(data));
    }
    useEffect(() => {
      getProds();

      fetch('https://fakestoreapi.com/products/categories')
      .then(res=>res.json())
      .then(json=>setCategories(json))

      getCat();

      window.addEventListener("resize",()=>{
        if( window.innerWidth > '992') setSize("col-3");
        else if(window.innerWidth > 762) setSize("col-6");
        else setSize("col-12");
    
      })}
    , )
    
  return (
    <>
        <h2 className='text-center'>Our Products</h2>
        <div className="container">
            <div className="text-center" style={{overflow: 'auto', whiteSpace: 'nowrap'}}>
            <button onClick={() => {getProds();}} className="m-2 btn btn-info px-2 d-inline-block">All</button>
              {categories.map((cat) => {
                return (<button key={cat} onClick={() => {getCat(cat);}} className="m-2 btn btn-info px-2 d-inline-block">{cat}</button> )
              })}
            </div>
            <div className="row">
                {productList.map((prod) => {
                    return(
                        <div className={size}
                            style={{marginBottom : "20px"}}  
                            key={prod.id}>
                            <Product prod={prod}/>
                        </div>
                    );
                })}
            </div>
        </div>
        
    </>
  )
}

export default Products