import React from 'react'
import { Link } from 'react-router-dom'

const Products = ({product}) => {
  return (
        <div className='col-md-3 card m-5 p-2' >
            <Link to={`/product/${product.id}`}>
            <div key={product.id}>
            <h1>{product.name}</h1>
                            <img src={product.image} alt='' className='img-fluid' />
                            <h1>Rating: {product.rating}</h1>
                            <h1>Price: {product.price}</h1>
            </div>
            </Link>        
        </div>
    )
}

export default Products