const express = require("express");
const app = express();
const PORT = 5000;

//Middleware 
app.use(express.json());

//Temporary data for products
let products = [
    {
        id: 1,
        name: "Notebook",
        price:50
    },
    {
        id: 2,
        name: "Blue Pen",
        price: 20
    }
];

//Home route
app.get("/", (req, res) => {
    res.json({
        messege: "Codveda PEST API is running"
    });
});

//POST -Create a new product
   app.post("/api/products", (req, res) => {
    const {name, price} = req.body;

    //Validation
    if(!name || price === undefined) {
        return res.status(400).json({
            messege: "Name and price are required"
        });
    }

    const newProduct = {
        id: products.length + 1,
        name: name,
        price: Number(price)
    };

    products.push(newProduct);
    res.status(201).json({
        messege: "Product created successfully",
        product: newProduct
    });
   });

   //PUT  -Update a product
   app.put("/api/products/:id", (req, res) => {
    const id = Number(req.params.id);
    const{ name, price } = req.body;

    const product = products.find((p) => p.id === id);

    if(!product){
        return res.status(404).json({
            messege: "Product not found"
        });
    }

    if(!name || price === undefined){
        return res.status(400).json({
            messege: "Name and price and required"
        });
    }

    product.name = name;
    product.price = Number(price);

    res.status(200).json({
        messege: "Product updated successfully",
        product: product
    });
   });

   //DELETE - Delete a product
   app.delete("/api/products/:id", (req, res) => {
    const id = Number(req.params.id);

    const productIndex = products.findIndex((p) => p.id === id);

    if(productIndex === -1) {
        return res.status(404).json({
            messege: "Product not found"
        });
    }

    const deletedProduct = products.splice(productIndex, 1);

    res.status(200).json({
        messege: "product deleted successfully",
        product: deletedProduct[0]
    });
   });
//Get all products 
app.get("/api/products", (req, res) => {
    res.status(200).json(products);

});

//GET - Get a single product by ID
app.get("/api/products/:id", (req, res) => {
    const id = Number(req.params.id);

    const product = products.find((p) => p.id === id);

    if(!product){
        return res.status(404).json({
            messege: "Product not found"
        });
    }
    res.status(200).json(product);
});

//Start server
app.listen(PORT, () =>{
    console.log(`Server running at http://localhost:${PORT}`);
});