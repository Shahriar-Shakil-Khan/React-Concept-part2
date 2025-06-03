import Batsman from './Batsman'
import Counter from './Counter'
import Users from './Users'
import './App.css'
import { Suspense } from 'react'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())


function App() {
  function handleClick(){
    alert('I am Clicked.')
  }
  const handleAdd5 =(num)=>{
    const newNum=num+100;
    alert(newNum);
  }
 

  return (
    <>
      <h1>Vite + React</h1>

        <Suspense fallback={<h3>Loading...</h3>}>
            <Users fetchUsers={fetchUsers}></Users>
        </Suspense>
        
        
        <Batsman></Batsman>
          <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={()=>handleAdd5(2)}>Click Me 2</button>

     
    </>
  )
}
export default App
