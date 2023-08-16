import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Row,Col} from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  const[playerTrue, SetPlayerTrue]=useState(<button>Attack!💫</button>)

 const player1 = {
    name: "Shaka",
    color: "orchid",
    hitpoints: 100,
    turn: playerTrue,
};
  
 const  player2 = {
    name: "Jamal",
    color: "cornflowerblue",
    hitpoints: 100,
    turn: false,
  };
  
  const dice = 0;
  
  const player1Turn = true;

  return (
    <>
      <div>
        <header>
    <h1>Color Battle ?</h1>

        </header>
      </div>


      <div className='p1'>
        
         
          
          <h1>{player1.name}</h1>
          <h2>HitPoints:{player1.hitpoints}</h2>
          <h1>{player1.turn}</h1>
       
          
      </div>
          
          
      <div className='p2'>
        
         
          
        <h1>{player2.name}</h1>
        <h2>HitPoints:{player2.hitpoints}</h2>
     
        
    </div>
        
        
          
          
       






        







      
      <div className="card">
        <button onClick={() => setCount((count) => count + 4)}>
          count is {count}
        </button>
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
