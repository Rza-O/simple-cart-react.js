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
      const newProducts = [...selectedProducts, product];
      setSelectedProducts(newProducts);
    }
    
  }

  console.log(selectedProducts);






  return (
    <>
      <Navbar></Navbar>

      <div className='flex justify-between w-11/12 mx-auto mt-6'>
        <AllProducts handleSelectedProduct={handleSelectedProduct}></AllProducts>
        
        <CartContainer isActive={isActive} handleIsActiveState={handleIsActiveState}></CartContainer>
      </div>
    </>
  )
}

export default App
