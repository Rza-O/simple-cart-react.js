import PropTypes from 'prop-types';
const Navbar = ({ selectedProducts, price }) => {
    return (
        <div className="flex items-center justify-around bg-amber-300">
            <div>
                <img className="w-20" src="../../../public/shopping-cart-logo-1.jpg" alt="" />
                </div>
            <div className="flex space-x-4 items-center">
                <h4 className="font-bold text-2xl">Home</h4>
                <h5 className="font-bold text-xl">Product</h5>
                <h5 className="font-bold text-xl">Cart {selectedProducts.length}</h5>
                <h5 className="font-bold text-xl">${price}</h5>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    selectedProducts: PropTypes.array,
    price: PropTypes.number
}

export default Navbar;