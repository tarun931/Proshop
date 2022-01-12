import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
//props mein destructuring krke naam ko directly product variable mein leliya ....esa na krte to product ki jagah hr jagah props likhte
//my matlab magin y direction mein (top and bottom ) ....p-3 mtlb padding har direction mein 3px
//Link is same as <a></a> tag in html ....link doesnot allow the page to reload as , done in <a> ....and instead of using href we use to=" "

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
