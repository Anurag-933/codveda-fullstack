function ProductCard({ product}) {
    return (
        <div className="product-card">
            <h2>{product.name}</h2>
            <p>Product ID: {product.id}</p>
            <p>Price: ₹{product.price}</p>
        </div>
    );
}

export default ProductCard