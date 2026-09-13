
console.log("Script is working");
const API_URL = "http://localhost:5000/api/products";
const productList = document.getElementById("product-list");

    async function fetchProducts(){
        try {
            const response = await fetch(API_URL);

            if(!response.ok) {
                throw new Error("Failed to fetch products");
            }

            const products = await response.json();

            productList.innerHTML = "";
        if(products.length === 0) {
            productList.innerHTML = "<p>No products found.</p>";
            return;
        }

        products.forEach((product) => {
            const card = document.createElement("div");
            card.className = "product-card";

            card.innerHTML = `
                <h2>${product.name}</h2>
                <p>Product ID: ${product.id}</p>
                <p>Price: ₹${product.price}</p>
                `;
                productList.appendChild(card);
        });


        }catch (error) {
            productList.innerHtml = "<p>Unable to load products.</p>";
            console.error(error);
        }
    }

    fetchProducts();