import { useState } from 'react'
import './App.css'
import { Cart } from './components/Cart'
import Header from './components/Header'
import storeItems from './data'



function App() {
  const [items, setItems] = useState(storeItems)

  return (
    <div className="App">


      <Header />
      <Cart />





    </div >
  );
}

export default App
