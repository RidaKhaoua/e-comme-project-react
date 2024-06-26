/* eslint-disable react/prop-types */

import "./Product.css";
import CardProduct from "../CardProduct/CardProduct";
import { useProducts } from "../../Context/Productcontext";

export default function Product({ product }) {
  const {shopingList} = useProducts();
  return (
    <>
      <div key={product.id} className="product">
          <CardProduct
            id={product.id}
            img={product.image}
            disabled = {shopingList.some(item => item.id === product.id)}
            title={product.title}
            price={product.price}
          />
      </div>
    </>
  );
}
