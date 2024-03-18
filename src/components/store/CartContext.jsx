import { createContext } from "react";

const CartContext = createContext({
    items: [],
    total: 0,
    add: () => {},
    remove: () => {},
})

export default CartContext;