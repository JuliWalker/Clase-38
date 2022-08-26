import dotenv from 'dotenv'
dotenv.config()

// Aca estoy haciendo 3 swichts distintos porque asumo que podria llegar a manejar una base de datos diferente para cada uno y por lo tanto uso una variable de entorno para cada uno.  

let productsDao

switch (process.env.DB_PRODUCTS_NAME) {
    case 'mongoDB':
        import('./products/mongoDBProducts.js').then(({ MongoDBProducts }) => {
            productsDao = new MongoDBProducts()
        })
        break;

    default:
        console.log("switch de databases para products en default")
        break;
}
export { productsDao }


let usersDao

switch (process.env.DB_USERS_NAME) {
    case 'mongoDB':
        import('./users/mongoDBUsers.js').then(({ MongoDBUsers }) => {
            usersDao = new MongoDBUsers()
        })
        break;

    default:
        console.log("switch de databases para users en default")
        break;
}
export { usersDao }


let cartsDao

switch (process.env.DB_CARTS_NAME) {
    case 'mongoDB':
        import('./carts/mongoDBCarts.js').then(({ MongoDBCarritos }) => {
            cartsDao = new MongoDBCarritos()
        })
        break;

    default:
        console.log("switch de databases para carritos en default")
        break;
}
export { cartsDao }