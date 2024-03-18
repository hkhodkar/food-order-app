import { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../store/CartContext';

export default function MealItem({id,name, description, price}) {
    const mealsPrice =`$${price.toFixed(2)}`;
    const cartCtx = useContext(CartContext);

    function handleAddItem(amount) {
        cartCtx.add({
            id: id,
            name: name,
            amount: amount,
            price: price
        })
    }
        
    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{mealsPrice}</div>
            </div>
            <div>
                <MealItemForm id={id} onAddToCart={handleAddItem} />
            </div>
        </li>
    )
}