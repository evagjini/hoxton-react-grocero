import { useState } from 'react'
import './App.css'
import { Cart } from './components/Cart'
import Header from './components/Header'
import StoreItem from './components/StoreItem'



export type storeItemsType = {
  id: number;
  name: string;
  price: number;
  stock: number;
  inCard: number;

}


// / input: item
// action: generates a path for this item's image
// output: the path

function getItemImagePath(item: any) {
  let id = String(item.id).padStart(3, '0')
  return `assets/icons/${id}-${item.name}.svg`



}



function App() {
  const [store, setStore] = useState([
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

  )

  const cart = getCartitem()


  function getCartitem() {
    return store.filter(item => item.inCard > 0)
  }


  function totalPrice() {

    let total = 0
    for (let item of cart) {

      total += item.inCard * item.price

    }

    return total

  }

  function increaseCartQuantity(item) {


    if (item.stock === 0) return
    // don't change the original, make a copy
    const storeCopy = structuredClone(store)


    //change the copy 
    const match = storeCopy.find(target => target.id === target.id)
    match.inCard++
    match.inCard--

    //UPDATE STATE

    setStore(storeCopy)


  }


  function decreaseQuantity(item) {

    // to not make silly decisions
    if (item.stock < 1) return

    const storeCopy = structuredClone(store)

    const match = storeCopy.find(target => target.id === target.id)
    match.inCard--
    match.inCard++

    setStore(storeCopy)

  }





  return (
    <div className="App">


      <Header />
      <Cart />





    </div >
  );






}

export default App