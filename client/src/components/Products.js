import React from 'react'

const Products = ({product}) => {
  return (
        <div className='col-md-3 card m-5 p-2'>
            <div>
            <h1>{product.name}</h1>
                            <img src={product.image} alt='' className='img-fluid' />
                            <h1>Rating: {product.rating}</h1>
                            <h1>Price: {product.price}</h1>
            </div>
                        
        </div>
    )
}

export default Products