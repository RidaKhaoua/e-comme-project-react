/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import ModalReducer from "../Reducer/ModalReducer";

const initialState = {
    isOpen: false,
}

const Modalcontext = createContext(initialState);

const ModalProvider = ({children}) => {
    const [modalState, dispatch] = useReducer(ModalReducer, initialState);

    const openModalProduct = () => {
        dispatch({type:"SHOW__MODAL"})
    }

    const closeModalProduct = () => {
        dispatch({type:"CLOSE__MODAL"})
    }

    return(
        <Modalcontext.Provider value={{
            isOpen: modalState.isOpen,
            openModalProduct,
            closeModalProduct
        }}>
            {children}
        </Modalcontext.Provider>
    )
}

export const useModalProduct = () => {
    return useContext(Modalcontext);
}

export default ModalProvider
