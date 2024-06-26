/* eslint-disable react/prop-types */
import "./Modalproduct.css";
import { useModalProduct } from "../../Context/Modalcontext";
import { useProducts } from "../../Context/Productcontext";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { Link } from "react-router-dom";
import IsLoading from "../IsLoading/IsLoading";


function Modalproduct({ product, isLoading, error }) {
  const { addProductToShopList, shopingList } = useProducts();
  const { isOpen, closeModalProduct } = useModalProduct();


  const checkIsAddedAlreadyInShopinList = (id) => {
    const isAdded = shopingList.some((item) => item.id === id)
    return isAdded;
  }

 

  return (
    <div  className={`modal-product ${isOpen ? "show" : ""}`}>
      {error  ?  <h1>Somthing not Working Refreche the Page</h1> :
         isLoading ? <IsLoading/> : (
          <div className="modal-product__container">
          <div className="modal-product__close">
            <Link to="/shopPage">
              <button
                onClick={() => {
                  closeModalProduct();
                }}>
                <CancelOutlinedIcon />
              </button>
            </Link>
          </div>
          <div className="modal-product__image">
            <img src={product.image} alt="image" />
          </div>
          <div className="modal-product__content">
            <div className="modal-product__title">{product.title}</div>
            <div className="modal-product__desc">{product.description}</div>
            <div className="modal-product__price">${product.price}</div>
            <div className={`modal-product__add-to-cart ${checkIsAddedAlreadyInShopinList(product.id) ? "hidden" : ""}`}>
                <button
                  onClick={() => {
                    addProductToShopList(
                      product.id,
                      product.image,
                      product.price,
                      product.title
                    );
                  }}>
                  {checkIsAddedAlreadyInShopinList(product.id) ? "Product Added" : "Add To Card"}
                </button>
              </div>
          </div>
        </div>
        )
      }
     
       
    </div>
  );
}

export default Modalproduct;
