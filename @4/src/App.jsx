import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Row,Col} from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

   const Shaka= document.querySelector('div.player1')

   const[playerTrue, SetPlayerTrue]=useState("Attack!💫")
  const[playerFalse,SetPlayerFalse]=useState([])
  const[reallyTrue,SetReallyTrue]=useState("true")
  const[reallyFalse,SetReallyFalse]=useState("false")

  const[p1,Setp1]=useState(

{
    name: "Shaka",
    color: "orchid",
    hitpoints: 100,
    turn: reallyTrue,

});

const[p2,Setp2]=useState(
  
{
    name: "Jamal",
    color: "cornflowerblue",
    hitpoints: 100,
    turn: reallyFalse,
  });
  
  const dice = 0;
  
  // const player1Turn = true;

  return (
    <>
      <div>
        <header>
    <h1>Color Battle ?</h1>

        </header>
      </div>


      <div className='p1'>
        
         
          
          <h1>{p1.name}</h1>
          <h2>HitPoints:{p1.hitpoints}</h2>
          <h1>my Turn:{p1.turn ? reallyTrue:reallyFalse}</h1>
          <div className='player1'><button onClick="">{playerTrue}</button></div>
          {/* <button onClick={player2.turn=reallyTrue}>Attack!💫</button> */}
       
          
      </div>
          
          
      <div className='p2'>
        
         
          
        <h1>{p2.name}</h1>
        <h2>HitPoints:{p2.hitpoints}</h2>
        <h1>my Turn: {p2.turn ? reallyFalse:reallyTrue}</h1>
        <div className='player2'><button>{playerFalse}</button></div>
     
        
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
