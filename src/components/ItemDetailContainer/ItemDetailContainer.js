import { useEffect, useState } from 'react'
import { getProductsById } from "../../asyncMock"
import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const {itemId} = useParams()

    useEffect(() => {
        console.log(itemId)
        getProductsById(itemId)
            .then(response => {
                setProducto(response)
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            }

            )
    }, [itemId]

    )

    return (
        <div>
            <h1>Detalle de Producto</h1>
            <div>
                <h2> {producto.nombre}</h2>
                <img src={producto.imagen} alt={producto.nombre} style={{width:200}}></img>
                <p>Precio: ${producto.precio}</p>
                <p>Stock: {producto.stock}</p>

                <ItemCount></ItemCount>
            
            </div>
        </div>
    )
}
export default ItemDetailContainer