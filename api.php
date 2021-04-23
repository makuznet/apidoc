/**
 *
 * @api {get} /products Get all products information
 * @apiName GetProducts
 * @apiGroup Product
 * 
 * @apiExample {curl} Example usage:
 *     curl -X GET "https://api.fakestoreapi.com/v1/products" \
        --header "Content-Type: application/json" 
 *
 * @apiSuccess {Number} id Id of the product.
 * @apiSuccess {String} title Product title.
 * @apiSuccess {Number} price Price of the product.
 * @apiSuccess {String} description Product description.
 * @apiSuccess {String} category Product category.
 * @apiSuccess {String} image Product image link.
 * 
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
        {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        }
        {
            "id": 2,
            ...
            output omitted
        }
 *
 * @apiError ProductsNotFound Products not found.
 * 
 * @apiErrorExample Error-Response:
 *      HTTP/1.1 404 Not found
        {
            "error": "ProductsNotFound"
        }       
 */
 
 /**
 * @api {get} /products/:id Get product information
 * @apiName GetProduct
 * @apiGroup Product
 *
 * @apiParam {Number} id Product unique id.
 * 
 * @apiExample {curl} Example usage:
 *     curl -X GET "https://api.fakestoreapi.com/v1/products/:id" \
        --header "Content-Type: application/json" 
 *
 * @apiSuccess {Number} id Id of the product.
 * @apiSuccess {String} title Product title.
 * @apiSuccess {Number} price Price of the product.
 * @apiSuccess {String} description Product description.
 * @apiSuccess {String} category Product category.
 * @apiSuccess {String} image Product image link.
 * 
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
        {
            "id": 2,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
        }
 *
 * @apiError ProductNotFound Product not found.
 * 
 * @apiErrorExample Error-Response:
 *      HTTP/1.1 404 Not found
        {
            "error": "ProductNotFound"
        }
 */
 
 /**
 * @api {put} /products/ Update product information
 * @apiPermission admin
 * @apiName UpdateProduct
 * @apiGroup Product
 * 
 * @apiExample {curl} Example usage:
 *     curl -X PUT "https://api.fakestoreapi.com/v1/products/:id" \
        --header "Content-Type: application/json" \
        --data-raw '{
                    "title": "test product",
                    "price": 13.5,
                    "description": "lorem ipsum set",
                    "image": "https://i.pravatar.cc",
                    "category": "electronic"
        }'
 * 
 * @apiParam {Number} id Product unique id.
 * @apiParam {String} title New title.
 * @apiParam {Number} price New price.
 * @apiParam {String} description New description.
 * @apiParam {String} category New category.
 * @apiParam {String} image New image link.
 *
 * @apiSuccess {Number} id Id of the product.
 * @apiSuccess {String} title New title.
 * @apiSuccess {Number} price New price.
 * @apiSuccess {String} description New description.
 * @apiSuccess {String} category New category.
 * @apiSuccess {String} image New image link.
 * 
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
        {
            id:7,
            title:'new title',
            price:'new price',
            category:'new category',
            description:'new description',
            image:'new image url'
        }
 *
 * @apiError ProductNotFound Product not found.
 * 
 * @apiErrorExample Error-Response:
 *      HTTP/1.1 404 Not found
        {
            "error": "ProductNotFound"
        }
 */              
 
 /**
 * @api {post} /products/carts Add products to a cart
 * @apiName UpdateProduct
 * @apiGroup Cart
 *
 * @apiExample {curl} Example usage:
 *     curl -X POST "https://api.fakestoreapi.com/v1/carts" \
        --header "Content-Type: application/json" \
        --data-raw '{
                    "userId": 5,
                    "date": "2020-02-03",
                    "products": [
                        {
                            "productId": 5,
                            "quantity": 1
                        },
                        {
                            "productId": 1,
                            "quantity": 5
                        }
                    ]
        }'
 *
 * @apiParam {Number} userId User id.
 * @apiParam {String} date Date.
 * @apiParam {Number} productId Id of the product.
 * @apiParam {Number} quantity Product quantity.
 *
 * @apiSuccess {Number} userId User id.
 * @apiSuccess {String} date Order date.
 * @apiSuccess {Number} productId Id of the product.
 * @apiSuccess {Number} quantity Product quantity.
 * 
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
        {
            id:21
            userId:5,
            date:2020-02-03,
            products:[{productId:5,quantity:1},{productId:1,quantity:5}]
        }
 *
 * @apiError ProductNotFound Product not found.
 * 
 * @apiErrorExample Error-Response:
 *      HTTP/1.1 404 Not found
        {
            "error": "ProductNotFound"
        }
 *              
 */