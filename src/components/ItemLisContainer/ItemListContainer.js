import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProducts, getProductsByTipo } from '../../asyncMock'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const {tipoID} = useParams()
    
    useEffect(() => {
        const asynFunction=tipoID? getProductsByTipo : getProducts
        asynFunction(tipoID)
            .then(res => {
                setProducts(res)
            })
            .catch(error => {
                console.log(error)
            }

            )
    }, [tipoID]

    )
    return (
        <div>
            <h1>{greeting}</h1>
            <div>
                {
                    products.map(produ => {
                        return (
                            <div key={produ.idProd}>
                                <h3>{produ.nombre}</h3>
                                <Link to={`/item/${produ.idProd}`}>ver detalle</Link>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
export default ItemListContainer