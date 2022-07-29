import { useState } from 'react'
import './App.css'
import { Cart } from './components/Cart'
import Header from './components/Header'



export type storeItemsType = {
  id: number;
  name: string;
  price: number;
  stock: number;
  inCard: number;

}

let storeItems = [
  {
    id: 1,
    name: "beetroot",
    price: 0.35,
    stock: 1,
    inCard: 0

  },

  {
    id: 2,
    name: "carrot",
    price: 0.52,
    inCard: 0,
    stock: 2
  },

  {
    id: 3,
    name: "apple",
    price: 0.15,
    inCard: 0,
    stock: 3
  },

  {
    id: 4,
    name: "apricot",
    price: 1.5,
    inCard: 0,
    stock: 4
  },

  {
    id: 5,
    name: "avocado",
    price: 2.5,
    inCard: 0,
    stock: 3

  },

  {
    id: 6,
    name: "bananas",
    price: 1.2,
    inCard: 0,
    stock: 2

  },

  {
    id: 7,
    name: "bell-pepper",
    price: 1.75,
    inCard: 0,
    stock: 1
  },

  {
    id: 8,
    name: "berry",
    price: 1.75,
    inCard: 0,
    stock: 4
  },

  {
    id: 9,
    name: "bluberry",
    price: 3.5,
    inCard: 0,
    stock: 3
  },

  {
    id: 10,
    name: "eggplant",
    price: 2.15,
    inCard: 0,
    stock: 6
  },
]




function App() {
  const [store, setStoreItems] = useState(storeItems)

  return (
    <div className="App">


      <Header />
      <Cart />





    </div >
  );
}

export default App