import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount;

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload.id)
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.payload.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.payload);
        }
        return {
            state,
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if (action.type === "REMOVE") {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload);
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        let updatedItems;
        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.payload);
        } else {
            const updateItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updateItem;
        }

        return {
            ...state,
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }

    }
    return defaultCartState;
}

export default function CartProvider({ children }) {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    function addItemHandler(item) {
        return dispatchCartAction({ type: 'ADD', payload: item });
    }

    function removeItemHandler(id) {
        return dispatchCartAction({ type: 'REMOVE', payload: id });
    }

    const cartContext = {
        items: cartState.items,
        total: cartState.totalAmount,
        add: addItemHandler,
        remove: removeItemHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    )
}