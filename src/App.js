import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/main/Main';
import { useEffect, useState } from 'react';
import Checkout from './pages/checkout/Checkout';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { initialOptions } from './data/payPalData';

function App() {
  const [products, setProducts] = useState([]);
  const [prod, setProd] = useState({});

  useEffect(() => {
    fetch('https://fakestoreapiserver.reactbd.com/amazonproducts')
    .then(res => res.json())
    .then(data => {
      setProducts(data);
    })
  }, []);



  return (
    <PayPalScriptProvider options={initialOptions}>
    <div className="App">
      <Routes>
        <Route path='/' element={<Main 
        products={products}
        setProd={setProd}

        />} 
        />
        <Route path='/checkout' element={<Checkout prod={prod}/>} />
      </Routes>
    </div>
    </PayPalScriptProvider>
  );
}

export default App;
