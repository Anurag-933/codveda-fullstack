import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Product Store</h1>

      {loading && <p>Loading products...</p>}

      {error && <p>Error: {error}</p>}

      <div className="product-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      </div>
    </div>
  );
}

export default App;
