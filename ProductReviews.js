import React from "react";
import "../Styles/ProductReviews.css";

import ProductReviewCard from "./ProductReviewCard.js";

const ProductReviews = ({ productReviews }) => {
  return (
    <div className="ProductReviews">
      {productReviews.map((item, index) => (
        <ProductReviewCard
          price={item.price}
          name={item.name}
          image={item.image}
          review={item.review}
          index={item.index}
          key={item.key}
        />
      ))}
    </div>
  );
};

export default ProductReviews;
