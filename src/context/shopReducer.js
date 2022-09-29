export const initialState = {
    total: 0,
    products: []
}
const shopReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case "ADD_TO_CART":

            console.log("ADD_TO_CART", payload)
            return {
                ...state,
                products: payload.products
                //Aceptamos los productos actualizados haciendo payload a productos.
            }
        case "REMOVE_FROM_CART":
            console.log("REMOVE_FROM_CART", payload)
            return {
                ...state,
                products: payload.products
            }
        case "UPDATE_PRICE":
            console.log("UPDATE_PRICE", payload)
            return {
                ...state,
                products: payload.total //Lo que necesito es el total de precio
            }
        default:
            throw new Error(`No existe ${type} en el shopReducer`)
    }
}
export default shopReducer
