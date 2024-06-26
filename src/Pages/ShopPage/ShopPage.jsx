import { useRef } from "react";

import Product from "../../Components/Product/Product";
import TableOfProducts from "../../Components/TableOfProducts/TableOfProducts";

import "./ShopPage.css";
import { Modalproduct } from "../../Components";
import { useProducts } from "../../Context/Productcontext";
import IsLoading from "../../Components/IsLoading/IsLoading";

function ShopPage() {
  console.log("render shop");
  const {
    productFromApi: { isLoading, products, error },
    getProductById,
  } = useProducts();
  const containerRef = useRef(null);

  const displayProducts = products.map((product) => (
    <Product key={product.id} product={product} />
  ));

  return (
    <div className="shopPage">
      <div className="showPage__container" ref={containerRef}>
        <TableOfProducts />
        <Modalproduct
          product={getProductById.product}
          isLoading={getProductById.isLoading}
          error={getProductById.error}
        />

        <div className="container">
          {error ? (
            <h1>Somthing doesn't work good Refreche The Page</h1>
          ) : isLoading ? (
            <IsLoading />
          ) : (
            <>
              <div className="shopPage__products">{displayProducts}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
