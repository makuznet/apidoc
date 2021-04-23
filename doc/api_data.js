define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "/Users/makuznet/Documents/rebrain/apidoc/doc/main.js",
    "groupTitle": "/Users/makuznet/Documents/rebrain/apidoc/doc/main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/products/carts",
    "title": "Add products to a cart",
    "name": "UpdateProduct",
    "group": "Cart",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST \"https://api.fakestoreapi.com/v1/carts\" \\\n    --header \"Content-Type: application/json\" \\\n    --data-raw '{\n                \"userId\": 5,\n                \"date\": \"2020-02-03\",\n                \"products\": [\n                    {\n                        \"productId\": 5,\n                        \"quantity\": 1\n                    },\n                    {\n                        \"productId\": 1,\n                        \"quantity\": 5\n                    }\n                ]\n    }'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "productId",
            "description": "<p>Id of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Product quantity.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Order date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "productId",
            "description": "<p>Id of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Product quantity.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n       id:21\n       userId:5,\n       date:2020-02-03,\n       products:[{productId:5,quantity:1},{productId:1,quantity:5}]\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductNotFound",
            "description": "<p>Product not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n   {\n       \"error\": \"ProductNotFound\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "Cart"
  },
  {
    "type": "get",
    "url": "/products/:id",
    "title": "Get product information",
    "name": "GetProduct",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Product unique id.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET \"https://api.fakestoreapi.com/v1/products/:id\" \\\n    --header \"Content-Type: application/json\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Product title.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Product description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Product category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Product image link.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"id\": 2,\n       \"title\": \"Mens Casual Premium Slim Fit T-Shirts \",\n       \"price\": 22.3,\n       \"description\": \"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.\",\n       \"category\": \"men's clothing\",\n       \"image\": \"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductNotFound",
            "description": "<p>Product not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n   {\n       \"error\": \"ProductNotFound\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/products",
    "title": "Get all products information",
    "name": "GetProducts",
    "group": "Product",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET \"https://api.fakestoreapi.com/v1/products\" \\\n    --header \"Content-Type: application/json\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Product title.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Product description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Product category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Product image link.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"id\": 1,\n       \"title\": \"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops\",\n       \"price\": 109.95,\n       \"description\": \"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday\",\n       \"category\": \"men's clothing\",\n       \"image\": \"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg\"\n   }\n   {\n       \"id\": 2,\n       ...\n       output omitted\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductsNotFound",
            "description": "<p>Products not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n   {\n       \"error\": \"ProductsNotFound\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "Product"
  },
  {
    "type": "put",
    "url": "/products/",
    "title": "Update product information",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "name": "UpdateProduct",
    "group": "Product",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X PUT \"https://api.fakestoreapi.com/v1/products/:id\" \\\n    --header \"Content-Type: application/json\" \\\n    --data-raw '{\n                \"title\": \"test product\",\n                \"price\": 13.5,\n                \"description\": \"lorem ipsum set\",\n                \"image\": \"https://i.pravatar.cc\",\n                \"category\": \"electronic\"\n    }'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Product unique id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>New title.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>New price.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>New description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>New category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>New image link.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>New title.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>New price.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>New description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>New category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>New image link.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n       id:7,\n       title:'new title',\n       price:'new price',\n       category:'new category',\n       description:'new description',\n       image:'new image url'\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductNotFound",
            "description": "<p>Product not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n   {\n       \"error\": \"ProductNotFound\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api.php",
    "groupTitle": "Product"
  }
] });
