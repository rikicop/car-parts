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
        //console.log(count) // To check the count of each product
        let unique = []
        for (let name in count) {
            unique.push({
                name: name,
                imageUrl: products.find(product => product.name === name).imageUrl,
                count: count[name], amount: count[name] * products.find(product => product.name === name).price
            })
        }
        updateAmount(unique)
        dispatch({
            type: "UNIQUE_PRODUCTS",
            payload: {

                unique: unique
            }
        })
    }

    const removeFromCart = (product) => {
        const updateCart = state.products.filter(item => item.name !== product.name)
        uniqueProducts(updateCart)
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updateCart
            }
        })
    }

    const substractFromCart = (name) => {
        //get unique products state
        const unique = state.unique
        const index = unique.findIndex(item => item.name === name)
        if (index > -1 && unique[index].count >= 1) {
            unique[index].count -= 1
        }
        dispatch({
            type: "SUBSTRACT_FROM_CART",
            payload: {
                unique: unique
            }
        })
    }

    const updateAmount = (amount) => {
        let total = 0
        amount.forEach(product => {
            total += product.amount
        })
        dispatch({
            type: "UPDATE_AMOUNT",
            payload: {
                total
            }
        })
    }



    const value = {
        total: state.total,
        products: state.products,
        addToCart,
        removeFromCart,
        substractFromCart,
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