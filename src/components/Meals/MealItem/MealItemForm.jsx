import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useRef, useState } from 'react';


export default function MealItemForm({id, onAddToCart}) {
    const inputRef = useRef(0);
    const [isValid,setIsValid] = useState(true);

    function submitHandler(event) {
        event.preventDefault();
        const enteredAmount = inputRef.current.value;
        const enteredAmountNumber = +inputRef.current.value;
        if(enteredAmount.trim().length === 0 || enteredAmountNumber<1 || enteredAmountNumber > 5 ){
            setIsValid(false);
            return;
        }
        onAddToCart(enteredAmountNumber);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={inputRef}
                label='amount' input={{
                id: 'amount_' + id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
            }} />
            <button>+ Add</button>
            {!isValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    )
}