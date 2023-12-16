// import logo from './logo.svg';
import './App.css';
import Test from './components/Test1';
import Card from './components/Card';
import { useState,useEffect } from 'react';


function App() {
const array = [{title:"film1"},{title:"film2"}, {title:"film3"}, {title:"film4"}];
const [number, setNumber] = useState(0);

function increase() {
  setNumber(number+1);
}
function deccrease() {
  setNumber(number-1);
}
useEffect(()=> {
  console.log("Say hi");
}, [number])

  return (
    // <div className="App">
    //   hello world
    //   {/* hello {x} */}
    //   {/* <Test/> */}
    //   {/* <Card title={"film1"}/>
    //   <Card title={"film2"}/>
    //   <Card title={"film3"}/>
    //   <Card title={"film4"}/> */}
    //   {
    //   array.map((element,index)=> 
    //     (
    //       <Card title={element.title} key={index} />
    //       // console.log(element);
    //       // <Card title={element.title}/>
    //   ) 
    //   ) 
    //   }
    // </div>
    <div>
      <h1> React Hooks ; Use State</h1>
      <button onClick={increase}>+</button>
      <p>{number}</p>
      <button onClick={deccrease}>-</button>
    </div>
  );
}

export default App;
