import {useState} from "react";

const ItemCount = ({stock, initial, addCart}) => {

    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity< stock){
            setQuantity(quantity+1);
        }
    }

    const decrement = () => {
        if (quantity>0){
            setQuantity(quantity-1);
        }
    }

    const addCartButton = () => {
        if(quantity>0){
            addCart(quantity)
        }
    }
    return(

        <div>
            <div>
                <button onClick={increment}>+</button>
                <h3>{quantity}</h3>
                <button onClick={decrement}>-</button>
            </div>

            <div>
                <button onClick={addCartButton}>Agregar al carro</button>
            </div>

        </div>

    );



}

export default ItemCount;