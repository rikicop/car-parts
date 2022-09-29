Nota: 

Con el objetivo de entender esto de manera mas óptima recomiendo ver la siguiente documentación: 

- [Guía de React Context ](https://www.freecodecamp.org/news/react-context-for-beginners/) 
- [Learn useContext In 13 Minutes](https://www.youtube.com/watch?v=5LrDIWkK_Bc&t=107s)   , más conveniente desde el minuto 5:45
- [Online Shopping Cart](https://www.youtube.com/watch?v=awGFsGc9oCM&t=946s) 
1. useContext

Es un Hook de React capaz de guardar el estado de manera global,  gracias a este hook este estado queda habilitado a  través de los componentes, es decir a través de toda la aplicación si se desea.

useContext en sí mismo **NO es una herramienta de administración de estado**(Ej: actualizar, eliminar...). mientras que con la ayuda de useReducer si puede cumplir esa función. 

2. **Context.Provider // Ej:**  **LoqueseaContext.Provider**

**function Main() {**

**const value = 'My Context Value';**

**return (**

`               `**<Context.Provider value={value}>**

**<MyComponent />**

`    `**</Context.Provider>**

**);**

**}**

El **Context.Provider** es el que debes usar para envolver todo el código que necesita acceso a la información del contexto y en este ejemplo tiene una sola propiedad llamada valor que va a ser el "valor" que tiene el contexto.  

De nuevo, lo importante aquí es que todos los componentes(y todos sus componentes hijos, y así sucesivamente) que quieran consumir posteriormente el contexto tienen que estar envueltos dentro del componente proveedor.

3. useReducer

El Hook useReducer permite que el componente de react tenga un estado similar a redux.

Si no has usado Redux, entonces lo expreso de la siguiente manera: El Hook useReducer se usa para manipulaciones de estado complejas y transiciones de estado,  es una función de React que acepta una función **Reducer** y un **estado inicial**.

4. Reducer

Como podemos observar en el código de abajo el reducer contiene un **switch** donde se definen todas las acciones posibles que Context puede realizar, actualizando solo la parte del estado global relacionada a la acción específica. 

**function reducer(state, action) {**

`  `**switch (action.type) {**

`    `**case 'increment':**

`      `**return {count: state.count + 1};     case 'decrement':**

`      `**return {count: state.count - 1};     default:**

`      `**throw new Error();**

`  `**}**

**}**

**Que es payload action?**

Mientras que los **action types**  te permiten indicar a tu reducer qué acción debe realizar, **payload** son los datos que tu reducer utilizará para actualizar el estado. 

Shopping Cart Project Vas a tomar el código inicial de este repositorio de Github [useReducer Hook Starter](https://github.com/rikicop/v0-shp-cart-ctx-rdcr.git)

Vamos a crear un archivo llamado ShopContext.js

import { **createContext** } from "react"

import { initialState } from "./shopReducer"

**//1. Te va a pedir que le pases un valor inicial. //Lo vas a crear en shopReducer.js**

const ShopContext = **createContext**(initialState)

\2.

export const initialState = {      total: 0,

`     `products: []

}

3. Ya tenemos nuestro Context Iniciado!!, ahora a crear el reducer:
- Aquí estarán todas las acciones posibles que puede realizar un context.
- Y solo actualizará la parte del estado global relacionada con la acción.

` `const shopReducer = (state, action) => {     const { type, payload } = action

`    `switch (type) {

`        `case "ADD\_TO\_CART":

`            `console.log("ADD\_TO\_CART", payload)

`            `return {

`                `...state,

`                `products: payload.products 

`               `**//Aceptamos los productos actualizados haciendo payload a productos.**

`            `}       }

}

4. Una vez terminado todos los cases del switch, volvemos a Context.
4. Procedemos a crear nuestro Provider

Un Provider permite que todos sus componentes hijos se suscriban a los cambios del context. export const ShopProvider = ({ children }) => { }

6. Dentro de nuestro Provider utilizaremos otro hook, useReducer()

**export** **const** ShopProvider = ({ children }) => {     const [state, dispatch] = useReducer()

}

` `Y useReducer requerirá dos argumentos:

1. Reducer
1. Estado Inicial

import { createContext } from "react"

import shopReducer, { initialState } from "./shopReducer"

const ShopContext = createContext(initialState)

export const ShopProvider = ({ children }) => {

`  `const [state, dispatch] = useReducer(shopReducer, initialState) }

7. Ahora necesitaremos crear las funciones dentro de nuestro provider, una por cada type de acción que hayamos añadido en nuestro shop reducer.
7. **Dispatch**: Es** una función que permite lanzar acciones (actions) al store, con la intención de afectar el estado.

Nota:

Un ejemplo con typescript

[useReducer and useContext  with Typescript ](https://dev.to/hellomuthu23/how-to-use-usereducer-and-usecontext-hooks-with-typescript-in-react-14d1) 
