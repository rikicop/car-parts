export const initialState = {
    total: 0,
    count: {},
    products: [],
    unique: []

}
const shopReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case "ADD_TO_CART":

            console.log("ADD_TO_CART", payload)
            return {
                ...state,
                products: payload.products// here we are updating the products array
            }
        case "REMOVE_FROM_CART":
            console.log("REMOVE_FROM_CART", payload)
            return {
                ...state,
                products: payload.products
            }
        case "UPDATE_AMOUNT":
            console.log("UPDATE_AMOUNT", payload)
            return {
                ...state,
                products: payload.total //Lo que necesito es el total de precio
            }
        case "UNIQUE_PRODUCTS":
            console.log("UNIQUE_PRODUCTS", payload)
            return {
                ...state,
                count: payload.count
            }

        default:
            throw new Error(`No existe ${type} en el shopReducer`)
    }
}
export default shopReducer
