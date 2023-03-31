const products = [
    { nombre: 'Stitch', precio: 1500, idProd: 1, imagen: '/img/imagen1.jpg', stock: 10, tipo: 1, descripcion: 'Hermoso mate Stitch' },
    { nombre: 'Piston', precio: 2500, idProd: 2, imagen: '/img/piston.jpg', stock: 10, tipo: 1, descripcion: 'Hermoso mate Piston' },
    { nombre: 'Grogu', precio: 3500, idProd: 3, imagen: '/img/grogu.jpg', stock: 10, tipo: 1, descripcion: 'Hermoso mate Grogu' },
    { nombre: 'Gokú', precio: 4500, idProd: 4, imagen: '/img/Deadpool.jpg', stock: 10, tipo: 1, descripcion: 'Hermoso mate Gokú' },
    { nombre: 'Deadpool', precio: 4500, idProd: 5, imagen: '/img/GOKU.jpg', stock: 10, tipo: 1, descripcion: 'Hermoso mate Deadpool' },
    { nombre: 'Storm Trooper', precio: 5500, idProd: 6, imagen: '/img/storm.jpg', stock: 10, tipo: 1, descripcion: 'Hermoso mate Storm Trooper' },
    { nombre: 'Lunar', precio: 5500, idProd: 7, imagen: '/img/lunar.jpg', stock: 10, tipo: 2, descripcion: 'Hermosa Lámpara Lunar' },
    { nombre: 'Auto', precio: 5500, idProd: 8, imagen: '/img/auto.jpg', stock: 10, tipo: 3, descripcion: 'Hermoso Auto impreso en 3D' }
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProductsByTipo = (tipo) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.tipo == tipo))
        }, 1500)
    })
}
export const getProductsById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.idProd == id))

        }, 500)
    })
}

