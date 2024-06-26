import { useProducts } from "../../Context/Productcontext";
import Product from "../Product/Product";
import TitleSection from "../TitleSection/TitleSection";
import "./Latestcollection.css";
function Latestcollection() {
  const { products } = useProducts();
  const getLatestCollection = products.filter(
    (product) => product.productYear === 2024
  );
  const displayProducts = getLatestCollection.map((product) => (
    <Product key={product.id} product={product} />
  ));
  return (
    <div className="latest-collection">
      <TitleSection title="categories" subTitle="2024 Latest Arival" />
      <div className="latest-collection__products">{displayProducts}</div>
    </div>
  );
}

export default Latestcollection;
