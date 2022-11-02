import { createContext, useContext, useReducer } from "react"
import shopReducer, { initialState } from "./shopReducer"
//Context te va a pedir que le pases
//un valor inicial. Lo vas a crear en 
//shopReducer.js
const ShopContext = createContext(initialState)

export const ShopProvider = ({ children }) => {
    const [state, dispatch] = useReducer(shopReducer, initialState)

    //const uniqueIds = []; //We create an array to store the unique ids
    // Create an array to store all the products

    const addToCart = (product) => {

        // All the products no matter how many times they are repeated 
        // const newCart = [...state.products, product]; //CODE
        // for this to work, we need to add the product to the state
        // payload: { products: newCart }

        //Unique
        const updateCart = state.products.concat(product);
        /* const unique = updateCart.filter(element => {
            const isDuplicate = uniqueIds.includes(element.id); //1. We check if the id is already in the array

            if (!isDuplicate) {//2. If it is not, we add it to the array
                uniqueIds.push(element.id);

                return true;
            }

            return false;
        }); */
        // In dispatch we pass the type and for the payload we pass the products
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updateCart,
            }//Here payload is the unique array
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