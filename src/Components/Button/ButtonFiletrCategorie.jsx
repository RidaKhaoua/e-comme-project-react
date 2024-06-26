/* eslint-disable react/prop-types */

import { useProducts } from "../../Context/Productcontext";
import "./Button.css"
export default function ButtonFiletrCategorie({ nameCate, changeCategorie, cat }) {
  const { filterProducts } = useProducts();
    

  return (
    <button 
    className={`button-filter ${nameCate === cat ? "active" : ""} `}
    onClick={() => {
        changeCategorie(nameCate)
        filterProducts(nameCate);
    }}
    >
      {nameCate}
    </button>
  );
}
