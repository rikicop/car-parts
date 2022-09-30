## PART I

### Context Creation 
#### This context will allow us to access the elements the user adds the cart across the application.

1. Create a context folder in the src folder.

2. Create a new file in the context directory named `ShopContext.js` and add the 
   following code:

        ```js
        import React, { createContext, useState } from 'react';

        export const CartContext = createContext();
        ```
3. By convention, we name the context with the name beginning with capital letter
      of the context followed by `Context`. In this case, we are creating a context for the shopping cart, so we name it `ShopContext`.

      And the name of the reducer in this way: `shopReducer`.

4. We need a **initial value** for the context, so we will create a new file in the context directory, /
   shopReducer.js and add the following code (Export the initial state because we'll need it in our ShopContext.js file:

        ```js
        export const initialState = {
          total: 0,
          products: [],  
        };

        const shopReducer = (state, action) =>{}

        export default shopReducer;
        ```
   
5. Back into our ShopContext.js file, we will to import the initialState from the shopReducer.js:

   ```js
   import React, { createContext, useState } from 'react';
   import { initialState } from './shopReducer';

   export const ShopContext = createContext(initialState);
   
   ```

6. We need to create a **reducer** to update the state of the context. This reducer will /
work with a **switch** statement defining all the possible actions that can be performed on the context 
and will only update the part of the global state related to the action that is being performed.

      By convention the name of the actions are written in uppercase letters.

   ```js
   //  -- Initial State --
   ...
   //  -- Reducer --
   const shopReducer = (state, action) => {
    const { type, payload } = action // payload is the data we need to update in the state

    switch (type) {
        case "ADD_TO_CART":
            console.log("ADD_TO_CART", payload)
            return {
                ...state,
                products: payload.products // update the products array
            }
        case "REMOVE_FROM_CART":
      ...

        default:
            throw new Error(`No existe ${type} en el shopReducer`)

   ```

7. We need to create a **provider** to wrap the components that will need to access the context.
   
   ```js
   ...
   // First we import the reducer.
   import shopReducer, { initialState } from './shopReducer';
   
   const ShopContext = createContext(initialState); 
   //  -- Provider --
   // A provider allows all its children to subscribe to the context changes.
   export const ShopProvider = ({ children }) => {
    const [state, dispatch] = useReducer(shopReducer, initialState);
    
    const addToCart = (product) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: [...state.products, product] // add the product to the products array
            }
        })
    }
   ```

8. Now that we have our function(s), we need to return something from the shopProvider. 

   ```js
    
    // -- last dispatch --

      const value = {
        products: state.products,
        addToCart,
      }

      return (
        // Dont forget to pass the state and the functions to the provider
         <ShopContext.Provider value={{ state, addToCart }}>
               {children} // children is the component that will be wrapped by the provider
         </ShopContext.Provider>
      )
   ```
        
9. useContext is a hook that allows us to access the context from any component. We need to import it from react.

   ShopContext.js

   ```js
   import React, { createContext, useState, useContext } from 'react';

   ...
   // -- useContext -- At the bottom of the file

   const useShop = () => {
    const context = useContext(ShopContext)

    if (context === undefined) {
        throw new Error("useShop debe ser usado con ShopContext")
    }

    return context
   }

   export default useShop
   ```

10. Now we can use the context in any component. We need to import the provider and the hook.
    
    App.js

    ```js
    import React from 'react';
    import { ShopProvider } from './context/ShopContext';

    const App = () => {
        return (
            <ShopProvider>
                <h1>App</h1>
            </ShopProvider>
        )
    }

    export default App;
    ```
   





