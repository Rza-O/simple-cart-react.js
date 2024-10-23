import { useEffect, useState } from "react";
import Product from "../Product/Product";

function AllProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
        
    }, []);

    return (
        <div>
            <h1 className='text-4xl font-bold'>All Products.JSX</h1>
            {
                products.map((product) => <Product key={product.id} product={product}></Product>)
            }
        </div>
    );
}

export default AllProducts;