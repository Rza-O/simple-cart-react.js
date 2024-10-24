import { useState } from 'react';
import './App.css'
import AllProducts from './Components/AllProducts/AllProducts'
import CartContainer from './Components/CartContainer/CartContainer'
import Navbar from './Components/Navbar/Navbar'

function App() {

  // const [isActive, setIsActive] = useState({
  //   cart: true,
  //   status: 'active'
  // });

  // const handleIsActiveState = (status) => {
  //   if(status == 'cart'){
  //     setIsActive({
  //       cart: true,
  //       status: 'cart'
  //     })
  //   }
  //   else{
  //     setIsActive({
  //       cart: false,
  //       status: 'about'
  //     })
  //   }
  // }
  const [isActive, setIsActive] = useState(true);

  const handleIsActiveState = (status) => {
    if(status == 'cart'){
      setIsActive(true);
    }
    else{
      setIsActive(false)
    }
  }

  // console.log(isActive);


  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSelectedProduct = (product) => {
    const isExist = selectedProducts.find((p)=> p.id == product.id);
    if(isExist){
      alert('Already Added')
    }
    else{
      handleIncreasePrice(product.price)
      const newProducts = [...selectedProducts, product];
      setSelectedProducts(newProducts);
    }
    
  }

  // console.log(selectedProducts);

  const handleDelete = (id) => {
    handleDecreasePrice(id);
    const remainingProducts = selectedProducts.filter((p)=> p.id !== id);
    setSelectedProducts(remainingProducts);
  }


  const [price, setPrice] = useState(500);

  const handleIncreasePrice = (pr) => {
    setPrice(price + pr)
  }

  const handleDecreasePrice =(id) => {
    const product = selectedProducts.find(p=> p.id == id);
    setPrice(price - product.price)
  }



  return (
    <>
      <Navbar price={price} selectedProducts={selectedProducts}></Navbar>

      <div className='flex justify-between w-11/12 mx-auto mt-6'>
        <AllProducts handleSelectedProduct={handleSelectedProduct}></AllProducts>
        
        <CartContainer handleDelete={handleDelete} selectedProducts={selectedProducts} isActive={isActive} handleIsActiveState={handleIsActiveState}></CartContainer>
      </div>
    </>
  )
}

export default App
