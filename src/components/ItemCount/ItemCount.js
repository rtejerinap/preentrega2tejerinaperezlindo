import { useState } from "react"

const ItemCount=()=>{
    const [count, setCount]= useState(1) 
    const decrement = ()=>setCount(prev=>prev-1)
    const increment = ()=>setCount(prev=>prev+1)

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button>Agregar al Carrito</button>

        </div>
    )
}
export default ItemCount