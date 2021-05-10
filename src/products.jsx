import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import ProductData from "./productdata";
import Product from "./product";

const Products = ({ match }) => {
    
  const ProductData =  [
    {
      id: 1,
      name: "NIKE Liteforce Blue Sneakers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
      status: "Available",
    },
    {
      id: 2,
      name: "Stylised Flip Flops and Slippers",
      description:
        "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
      status: "Out of Stock",
    },
    {
      id: 3,
      name: "ADIDAS Adispree Running Shoes",
      description:
        "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
      status: "Available",
    },
    {
      id: 4,
      name: "ADIDAS Mid Sneakers",
      description:
        "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
      status: "Out of Stock",
    },
  ];;
  const { url } = useRouteMatch();

  /* Create an array of `<li>` items for each product */
 

  return (
    <div>
      <div>
        <div>
          <h3>Products</h3>
          <ul> 
         { ProductData.map((product) =>(
           <li key={product.id}>
             <Link to={`${url}/${product.id}`}>{product.name}</Link>
           </li>
          ))}
           
         </ul>
        </div>
      </div>

      <Route path={`${url}/:productId`}>
        <Product data={ProductData} />
      </Route>
      <Route exact path={url}>
        <p>Please select a product.</p>
      </Route>
    </div>
  );
};

export default Products;


