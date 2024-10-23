import About from '../About/About';
import Cart from '../Cart/Cart';
import './CartContainer.css'
import PropTypes from 'prop-types';

const CartContainer = ({ handleIsActiveState, isActive }) => {
    // console.log(handleIsActiveState);
    // console.log(isActive);
    return (
        <div>
            <h1 className="text-4xl font-bold">Cart Container</h1>
            <div className="flex justify-around mt-4">

                <button onClick={() => handleIsActiveState('cart')} 
                    className={`${isActive ? 'font-bold p-4 bg-yellow-200 text-gray-700' : 'font-bold p-4'}`} >Cart</button>
                
                <button onClick={() => handleIsActiveState('about')} className={`${isActive ? 'font-bold p-4' : 'font-bold p-4 bg-yellow-200 text-gray-700'}`}>About</button>
            </div>
            {isActive? <Cart></Cart> : <About></About>}
        </div>
    );
};

CartContainer.propTypes = {
    handleIsActiveState: PropTypes.func,
    isActive: PropTypes.func
};

export default CartContainer;
