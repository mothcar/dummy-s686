import { useState } from 'react'
import { Link } from "react-router-dom";
import './App.css'
import Child from './components/Child.jsx';

function App() {
  const [count, setCount] = useState(0)
  // const ItemsList = [
  //   {
  //     id: 1,
  //     name: "VA-11 Hall-A: Cyberpunk Bartender Action",
  //     price: 110000,
  //     image: "some image",
  //     link: "https://store.steampowered.com/app/447530/VA11_HallA_Cyberpunk_Bartender_Action/?l=koreana",
  //   },
  // ];
  const ItemsList = [
    "David", "Bella"
  ];

  return (
    <>
      <div><Child toChild={ItemsList}/></div>
      <h1>Vite + React</h1>
      <div className="card">
        <Link to="/about" state={ItemsList} >Go About</Link>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
