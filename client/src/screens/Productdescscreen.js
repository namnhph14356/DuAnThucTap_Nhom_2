/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../prouctsdatabase'
const Productdescscreen = () => {
const productid = useParams();
console.log(productid);

// eslint-disable-next-line eqeqeq
const product = products.find(product => product.id == productid.id);
console.log(product);

  return (
    <div>
        <div className="row">
          <div className="col-md-6">
            <div className='card p-2 m-2'>
              <h1>{product.name}</h1>
              <img src={product.image} className="img-fluid m-3 bigimg"/>
              <p>{product.description}</p>
            </div>
          </div>
          <div className="col-md-6 text-start">
            <div className="m-2">
              <h1>Price : {product.price}</h1>
              <hr />
              <h1>Select Quantity</h1>
              <select>
              {[...Array(product.countInStock).keys()].map((x, i) => (
                <option value={x+1} key={i}>{i+1}</option>
              ))}
              </select>
              <hr/>
              <button className="btn btn-dark">ADD TO CART</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Productdescscreen