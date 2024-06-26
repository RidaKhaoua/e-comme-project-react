export default (currentState, action) => {
  switch (action.type) {
    case "CLONE__DATA":
      return {
        ...currentState,
        productsFiltred: [...currentState.products],
      };

    case "All__PRODUCT__FROM__API":
      return {
        ...currentState,
        productFromApi: {
          isLoading: action.payload.isLoading,
          error:action.payload.error,
          products: [...action.payload.data],
        },
      };
    case "All":
      return { ...currentState, productsFiltred: [...currentState.products] };

    case "PRODUCT__BY__ID":
      return {
        ...currentState,
        getProductById: {
          isLoading: action.payload.isLoading,
          error:action.payload.error,
          product: action.payload.data,
        },
      };

    case "REMOVE__ITEM":
      return {
        ...currentState,
        getProductById: {},
      };

    case "IS__LOADING":
      return {
        ...currentState,
        isLoading: action.payload.isLoading,
      };

    case "FILTER__PRODUCTS":
      return {
        ...currentState,
        productsFiltred: currentState.products.filter((product) => {
          if (
            product.category === action.payload.categorie &&
            product.isTopCollection === true
          ) {
            return { ...product };
          }
        }),
      };
    case "TOP__COLLECTION":
      return {
        ...currentState,
        productsFiltred: currentState.products.filter((product) => {
          if (product.isTopCollection) {
            return { ...product };
          }
        }),
      };
    case "ADD__PRODUCT":
      return {
        ...currentState,
        shopingList: [
          ...currentState.shopingList,
          {
            id: action.payload.id,
            img: action.payload.image,
            title: action.payload.title,
            price: action.payload.price,
            qty: 1,
            totalPrice: 0,
          },
        ],
      };

    case "ADD__QUANTITY":
      return {
        ...currentState,
        shopingList: currentState.shopingList.map((item) => {
          if (item.id === action.payload.idProduct) {
            let newQty = item.qty + 1;
            let total = (item.price * newQty).toFixed(2);
            return { ...item, qty: newQty, totalPrice: total };
          } else {
            return { ...item };
          }
        }),
      };

    case "MIN__QUANTITY":
      return {
        ...currentState,
        shopingList: currentState.shopingList
          .map((item) => {
            if (item.id === action.payload.idProduct) {
              if (item.qty === 1) {
                return null;
              } else {
                let newQty = item.qty - 1;
                let total = (item.price * newQty).toFixed(2);
                return { ...item, qty: newQty, totalPrice: total };
              }
            }
            return { ...item };
          })
          .filter((pr) => pr !== null),
      };

    case "DELETE__PRODUCT":
      return {
        ...currentState,
        shopingList: currentState.shopingList.filter((item) => {
          if (item.id !== action.payload.idProduct) {
            return { ...item };
          }
        }),
      };

    case "UPDATE__ID":
      return {
        ...currentState,
        idProductSelected: action.payload.id,
      };

    default:
      console.log("Action type is not defined: " + action.type);
      return { ...currentState };
  }
};
