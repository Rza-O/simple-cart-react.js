import PropTypes from 'prop-types';

const Cart = ({ selectedProducts }) => {
    // console.log(selectedProducts);
    return (
        <div>
            {
                selectedProducts.map((product) => 
                <div className='mb-4' key={product.id}>
                    <div className='flex justify-between space-x-4 items-center'>
                        <img className='w-14 h-12' src={product.image} alt="" />
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <button className='btn border border-yellow-400 bg-yellow-200 p-2 text-sm font-medium'>Delete</button>
                    </div>
                </div>)
            }
        </div>
    );
};

Cart.propTypes = {
    selectedProducts: PropTypes.array
}

export default Cart;