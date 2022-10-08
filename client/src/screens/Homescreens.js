import React from 'react'
import Products from '../components/Products'
import products from '../prouctsdatabase'

function Homescreens() {
  return (
    <div>
        <div className='row justify-content-center'>
            {products.map(products => {
                return <Products product={products}/>
            })}
        </div>
    </div>

  )
}

export default Homescreens