/* eslint-disable no-unused-vars */

import Product from "../Product/Product";
import "./ProductList.css";
import { useProducts } from "../../Context/Productcontext";
import Noproducts from "../Noproducts/Noproducts";
export default function ProductList() {
  const { productsFiltred } = useProducts();

  const getTopCollection = productsFiltred.filter((product) =>product.isTopCollection);
    
  const displayData = getTopCollection.map(product => {
    return (
        <Product key={product.id} product={product} />
    )
  })

  return (
    <div className="productList">
      {productsFiltred.length === 0 && <Noproducts/>}
      <div className="productList__container">
        {productsFiltred.length > 0 && displayData}
      </div>
    </div>
  );
}
