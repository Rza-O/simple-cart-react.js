import PropTypes from 'prop-types';

Product.propTypes = {
    product: PropTypes.object
};

function Product({ product }) {
    const { id, name, image, description, price, isFeature } = product
    console.log(product);
    return (
        <div className='w-80 border-2 border-solid border-gray-400 m-4 p-4 text-center shadow-xl rounded-lg'>
            <img className='mb-4 h-64 w-full' src={image} alt="" />
            <h2 className='text-2xl font-bold mb-4' >{name}</h2>
            <p className='mb-4'>{description}</p>
            <div className='space-y-3 p-1'>
                <p className='font-extrabold'>${price}</p>
                <p className='font-extralight'>{isFeature? 'Featured' : 'Not Featured'}</p>
            </div>
            <button className='btn bg-yellow-200 p-2 rounded-lg font-semibold'> Add to Cart</button>
        </div>
    );
}

export default Product;