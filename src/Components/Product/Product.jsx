import PropTypes from 'prop-types';

Product.propTypes = {
    product: PropTypes.object
};

function Product({ product }) {
    console.log(product);
    return (
        <div>
            <h1>Single Product</h1>
        </div>
    );
}

export default Product;