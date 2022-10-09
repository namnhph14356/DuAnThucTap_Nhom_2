import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
const Products = ({ product }) => {
  return (
    <div className="col-md-3 card m-5 p-2 text-start">
      <Link to={`/product/${product.id}`}>
        <div key={product.id}>
          <img src={product.image} alt="" className="img-fluid" />
          <h1>{product.name}</h1>
          <Rating
            style={{ color: "orange" }}
            initialRating={product.rating}
            emptySymbol="fa-regular fa-star"
            fullSymbol="fa-solid fa-star"
            readonly={true}
          />
          <h1>Price: {product.price}</h1>
        </div>
      </Link>
    </div>
  );
};

export default Products;
