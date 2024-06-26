/* eslint-disable react/prop-types */
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./CardProduct.css";
import { useProducts } from "../../Context/Productcontext";
import { useModalProduct } from "../../Context/Modalcontext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";

function CardProduct({ id, img, title, price, disabled }) {
  const { addProductToShopList, updateId } = useProducts();
  const { openModalProduct } = useModalProduct();
  const {user} = useAuth();
  const navigate = useNavigate();
  const [currentHref, setCurrentHref] = useState("");

  useEffect(() => {
    const url = window.location.href;
    let pageName = url.slice(url.lastIndexOf("/") + 1, url.length);
    setCurrentHref(pageName);
  },[])

  return (
    <div  className={`cardProduct ${disabled ? "disabled" : ""}`}>
      <div className="cardProduct__image">
        <button
          onClick={() => {
            if(currentHref === "shopPage") {
            updateId(id);
            openModalProduct();
            }
          }}>
            <img src={img} alt="" />
        </button>
        <div className="cardProduct__shadow"></div>
      </div>
      <div className="cardProduct__content">
        <div className="cardProduct__title">{title}</div>
        <div className="cardProduct__quality">
          <StarOutlinedIcon />
          <StarOutlinedIcon />
          <StarOutlinedIcon />
          <StarOutlinedIcon />
        </div>
        <div className="cardProduct__priceBuy-wrapper">
          <div className="cardProduct__price">${price} </div>
          <div className="cardProduct__buy">
            <button
              onClick={() => {
                if(user.isAuth) {
                addProductToShopList(id, img, price, title);
                updateId(id);
              } else {
                  navigate("/login")
              }

              }}>
              <ShoppingCartOutlinedIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
