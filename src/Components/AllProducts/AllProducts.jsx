import { useEffect, useState } from "react";
import Product from "../Product/Product";
import PropTypes from 'prop-types';

function AllProducts({ handleSelectedProduct }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
        
    }, []);

    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>All Products</h1>
            {
                products.map((product) => <Product handleSelectedProduct={handleSelectedProduct} key={product.id} product={product}></Product>)
            }
        </div>
    );
}
AllProducts.propTypes = {
    handleSelectedProduct: PropTypes.func
}

export default AllProducts;