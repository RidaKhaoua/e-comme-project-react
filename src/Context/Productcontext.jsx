/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useReducer } from "react";
import ProductReducer from "../Reducer/ProductReducer";
const ProductContext = createContext([]);
import { v4 as uuidv4 } from "uuid";

const initialState = {
  products: [
    {
      id: uuidv4(),
      title: "Nike Air Men’s Hoodie -  Imported Hoodie Red ",
      price: 150,
      quality: 5,
      image: "/Images/swet.png",
      category: "Clothes",
      isTopCollection: true,
      productYear: 2024,
    },
    {
      id: uuidv4(),
      title: "Armani Frok Ladies -  Imported Fork Blue",
      price: 250,
      quality: 5,
      image: "/Images/fork-blue.png",
      category: "Dresses",
      isTopCollection: true,
    },
    {
      id: uuidv4(),
      title: "Apple Watch Series 6 - Sliver Band",
      price: 450,
      quality: 5,
      image: "/Images/apple-watch-series-2.png",
      category: "Accessories",
      isTopCollection: true,
      productYear: 2024,
    },
    {
      id: uuidv4(),
      title: "Pngtree—hand drawn vector minimalist",
      price: 150,
      quality: 5,
      image: "/Images/—Pngtree—hand drawn vector minimalist cartoon.png",
      category: "Clothes",
      productYear: 2024,
      isTopCollection: false,
    },
    {
      id: uuidv4(),
      title: "Summer-New-Men-Hawaiian-Short",
      price: 150,
      quality: 5,
      image: "/Images/Summer-New-Men-Hawaiian-Short.png",
      category: "Clothes",
      productYear: 2024,
      isTopCollection: false,
    },
    {
      id: uuidv4(),
      title: "microphone-headphones-gaming-headset-pc-game-gaming-computer",
      price: 150,
      quality: 5,
      image:
        "/Images/microphone-headphones-lx50-gaming-headset-pc-game-gaming-computer.png",
      category: "Clothes",
      productYear: 2024,
      isTopCollection: false,
    },
    {
      id: uuidv4(),
      title: "apricot lady tot women s_4423236",
      price: 150,
      quality: 5,
      image: "/Images/apricot lady tot women s_4423236 1.png",
      category: "Clothes",
      productYear: 2024,
      isTopCollection: false,
    },
    {
      id: uuidv4(),
      title: "nike-air-max-nike-tiempo-football-boot-nike-mercurial-vapor",
      price: 150,
      quality: 5,
      image:
        "/Images/nike-air-max-nike-tiempo-football-boot-nike-mercurial-vapor.png",
      category: "Clothes",
      productYear: 2024,
      isTopCollection: false,
    },
    {
      id: uuidv4(),
      title: "talon-women",
      price: 150,
      quality: 5,
      image: "/Images/talon-women.png",
      category: "Clothes",
      productYear: 2024,
      isTopCollection: false,
    },

    {
      id: uuidv4(),
      title: "Apple Watch Series 6 - Sliver Band",
      price: 450,
      quality: 5,
      image: "/Images/apple-watch-series-2.png",
      category: "Accessories",
      isTopCollection: true,
      productYear: 2024,
    },
  ],
  productsFiltred: [],
  shopingList: [],
  productFromApi: { isLoading: true, error: false, products: [] },
  getProductById: { isLoading: true, error: false, product: [] },
  idProductSelected: 0,
};

const ProductProvider = ({ children }) => {
  const [productState, dispatch] = useReducer(ProductReducer, initialState);

  useEffect(() => {
    dispatch({ type: "CLONE__DATA" });
  }, [productState.products]);

  useEffect(() => {
    const getAllProducts = async () => {
      dispatch({
        type: "PRODUCT__BY__ID",
        payload: { error: false, data: [] },
      });
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        dispatch({
          type: "All__PRODUCT__FROM__API",
          payload: { isLoading: false, data },
        });
      } catch (error) {
        console.error("Error fetching products:", error);
        dispatch({
          type: "All__PRODUCT__FROM__API",
          payload: { error: true, data: [] },
        });
      }
    };
    getAllProducts();
  }, []);

  useEffect(() => {
    if (productState.idProductSelected) {
      dispatch({
        type: "PRODUCT__BY__ID",
        payload: { isLoading: true, error: false, data: [] },
      });
      const getProductById = async () => {
        try {
          const response = await fetch(
            "https://fakestoreapi.com/products/" +
              productState.idProductSelected
          );
          const data = await response.json();
          dispatch({
            type: "PRODUCT__BY__ID",
            payload: { isLoading: false, data },
          });
        } catch (error) {
          console.log(error);
          dispatch({ type: "PRODUCT__BY__ID", payload: { error: true } });
        }
      };
      getProductById();
    }
  }, [productState.idProductSelected]);

  const filterProducts = (catName) => {
    if (catName === "All") {
      dispatch({ type: "All" });
    } else {
      dispatch({ type: "FILTER__PRODUCTS", payload: { categorie: catName } });
    }
  };
  const getAllProducts = () => {
    dispatch({ type: "All" });
  };

  const getTopCollection = () => {
    dispatch({ type: "TOP__COLLECTION" });
  };

  const addProductToShopList = (id, image, price, title) => {
    dispatch({ type: "ADD__PRODUCT", payload: { id, image, price, title } });
  };

  const addQuantitiyPlus = (id, qtyProduct) => {
    dispatch({
      type: "ADD__QUANTITY",
      payload: { idProduct: id, qty: qtyProduct },
    });
  };

  const minQuantitiy = (id) => {
    dispatch({ type: "MIN__QUANTITY", payload: { idProduct: id } });
  };

  const deleteProduct = (id) => {
    dispatch({ type: "DELETE__PRODUCT", payload: { idProduct: id } });
  };

  const updateId = (id) => {
    dispatch({ type: "UPDATE__ID", payload: { id } });
  };

  return (
    <ProductContext.Provider
      value={{
        products: productState.products,
        productsFiltred: productState.productsFiltred,
        productFromApi: productState.productFromApi,
        shopingList: productState.shopingList,
        idProductSelected: productState.idProductSelected,
        getProductById: productState.getProductById,
        isLoading: productState.isLoading,
        filterProducts,
        getAllProducts,
        getTopCollection,
        addProductToShopList,
        addQuantitiyPlus,
        minQuantitiy,
        deleteProduct,
        updateId,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};

export default ProductProvider;
