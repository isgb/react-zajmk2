import React from 'react';
import { render } from 'react-dom';

const Btn = ()=>{
  return React.createElement("button",{
    onClick: ()=> alert("Hola")
  },"Enviar");
}

const Btn2 = ()=> ( <button onClick={  ()=> alert('Hola') }> Enviar </button>);


const App = () => {
   return (
   <div>
     <h1> Hola Mundo</h1>
     <Btn/>
     <Btn2/>
   </div>
   )
}

render(<App/>, document.getElementById('root'));