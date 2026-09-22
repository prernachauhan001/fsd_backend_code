import {useState,useEffect} from 'react'

const App = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState(" ");
  const [price, setPrice] = useState(" ");

  //Get all products
  const getProduct = async () => {
    await fetch("http://localhost:5000/products")
  }


  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  )
}