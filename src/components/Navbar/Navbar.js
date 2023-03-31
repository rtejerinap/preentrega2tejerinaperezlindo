import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="NavBar">
            <h1>Venta de Mates</h1>
            <div>
                <Link to='/tipo/1' className='btn btn-outline-success'>Mates</Link>
                <Link to='/tipo/2' className='btn btn-outline-success'>Lámparas</Link>
                <Link to='/tipo/3' className='btn btn-outline-success'>Juguetes</Link>
            </div>
        </nav>
    )
}
export default Navbar