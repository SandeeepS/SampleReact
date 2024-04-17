import './App.css';
import Header from './components/Header';
import React,{useState} from 'react';
import Employee from './Employee';
import Counter from './Counter';

function App() {

      const data = 'Sandeep';
      const [count,setCount] = useState(0)

      const addCount = () => {
          setCount(count+1)
      }

      let emp = [
        {name:'Sandeep',age:21},
        {name:'Arjun',age:21},
        {name:'Unni',age:24},
      ]
      return (
        <div>
            <Header data={data}/>
            <p>this is a sample data {data}</p>
            <button onClick={addCount}>Add</button>
            { 
              emp.map((obj,index) => {
                return(
                    <Employee key={index}  name={obj.name} age={obj.age} />
                )
              })
            }
            
            <Counter />

        </div>
      );
}



export default App;
