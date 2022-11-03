import { createContext, useContext, useReducer } from "react"
import shopReducer, { initialState } from "./shopReducer"

const ShopContext = createContext(initialState)

export const ShopProvider = ({ children }) => {
    const [state, dispatch] = useReducer(shopReducer, initialState)
    const addToCart = (product) => {
        const updateCart = state.products.concat(product);
        uniqueProducts(updateCart);
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updateCart,
            }
        })
    }


    const uniqueProducts = (products) => {
        let count = {}
        products.forEach(product => {
            count[product.name] = (count[product.name] || 0) + 1
        })
        console.log(count)
        let unique = []
        for (let name in count) {
            unique.push({
                name: name,
                imageUrl: products.find(product => product.name === name).imageUrl,
                count: count[name], amount: count[name] * products.find(product => product.name === name).price
            })
        }
        dispatch({
            type: "UNIQUE_PRODUCTS",
            payload: {

                unique: unique
            }
        })
    }



    const value = {
        products: state.products,
        addToCart,
        count: state.count,
        unique: state.unique,
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