import './App.css';
import Counter from './Counter';
import Header from './components/Header';
import React,{useState} from 'react';

function App() {

  const data = 'Sandeep';
  const [count,setCount] = useState(0)

 const addCount = () => {
    setCount(count+1)
 }
  return (
    <div>
         <Header data={data}/>
         <p>this is a sample data {data}</p>
         <button onClick={addCount}>Add</button>
         <Counter title="1st Counter" count={count}/>
         <Counter title="2nd Counter" count={count}/>
    </div>
  );
}



export default App;
