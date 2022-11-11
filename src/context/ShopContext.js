import { createContext, useContext, useReducer } from "react"
import shopReducer, { initialState } from "./shopReducer"

const ShopContext = createContext(initialState)

export const ShopProvider = ({ children }) => {
    const [state, dispatch] = useReducer(shopReducer, initialState)

    // ADD TO CART
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
    // SUBSTRACT FROM CART
    const substractFromCart = (id) => {
        //remove just one product by id
        const index = state.products.findIndex((product) => product.id === id);
        if (index > -1) {
            state.products.splice(index, 1);
        }
        uniqueProducts(state.products);
        console.log("ID : ", id)
        console.log("Resultado de filtrar por ID: ", state.products);

        dispatch({
            type: "SUBSTRACT_FROM_CART",
            payload: {
                products: state.products,
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
                id: products.find(product => product.name === name).id,
                imageUrl: products.find(product => product.name === name).imageUrl,
                price: products.find(product => product.name === name).price,
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
    // REMOVE COMPLETE PRODUCT FROM CART
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

    const updateAmount = (amount) => {
        let tcount = 0
        let total = 0
        amount.forEach(product => {
            total += product.amount
            tcount += product.count
        })
        dispatch({
            type: "UPDATE_AMOUNT",
            payload: {
                total,
                tcount
            }
        })
    }

    const clearCart = () => {
        dispatch({
            type: "CLEAR_CART",
            payload: {
                unique: [],
                total: 0,
                products: []
            }
        })
    }

    const value = {
        total: state.total,
        products: state.products,
        addToCart,
        removeFromCart,
        substractFromCart,
        clearCart,
        count: state.count,
        unique: state.unique,
        tcount: state.tcount
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