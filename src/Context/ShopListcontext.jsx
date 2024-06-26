/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import ShopListReducer from "../Reducer/ShopListReducer";


const initialState = {
    isOpen: false
}

const ShopListContext = createContext(initialState);



const ShopListProvider = ({children}) => {

    const [state, dispatch] = useReducer(ShopListReducer, initialState)

    const showShoplist = () => {
        dispatch({type:"SHOW__SHOPLIST"})
    }

    const closeShoplist = () => {
        dispatch({type:"CLOSE__SHOPLIST"});
    }

    return (
       <ShopListContext.Provider value={{
        open: state.isOpen,
        showShoplist,
        closeShoplist
       }}>
            {children}
       </ShopListContext.Provider>
    )
   
}

export function useShopList() {
    return useContext(ShopListContext);
}

export default ShopListProvider;