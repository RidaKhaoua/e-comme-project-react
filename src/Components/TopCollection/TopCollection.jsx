/* eslint-disable no-unused-vars */
import { useState } from "react";
import ButtonFiletrCategorie from "../Button/ButtonFiletrCategorie";
import ProductList from "../ProductList/ProductList";
import TitleSection from "../TitleSection/TitleSection";
import "./TopCellection.css";


const categories = [
  "All",
  "Jewellery",
  "Accessories",
  "Dresses",
  "Clothes",
  "Footwear",
];

export default function TopCollection() {
  const [categorie, setCategorie] = useState("All");


  const handelCategorie = (nameCat) => {
    setCategorie(nameCat);
  };

  const showCategorie = categories.map((cat, index) => (
    <ButtonFiletrCategorie
      key={index}
      nameCate={cat}
      changeCategorie={handelCategorie}
      cat={categorie}
    />
  ));

  

  return (
    <div className="topCollection">
      <TitleSection title="collection" subTitle="our top collection" />
      <div className="topCollection__filter">
        {showCategorie}
        </div>
      <ProductList />
    </div>
  );
}
