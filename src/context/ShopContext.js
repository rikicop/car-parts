import { createContext, useContext, useReducer } from "react"
import shopReducer, { initialState } from "./shopReducer"
//Context te va a pedir que le pases
//un valor inicial. Lo vas a crear en 
//shopReducer.js
const ShopContext = createContext(initialState)

export const ShopProvider = ({ children }) => {
    const [state, dispatch] = useReducer(shopReducer, initialState)

    const addToCart = (product) => {

        const updateCart = state.products.concat(product)

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updateCart
            }
        })
    }

    const value = {
        products: state.products,
        addToCart,
    }

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

const useShop = () => {
    const context = useContext(ShopContext)

    if (context === undefined) {
        throw new Error("useShop debe ser usado con ShopContext")
    }

    return context
}

export default useShop