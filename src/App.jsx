import Batsman from './Batsman'
import Counter from './Counter'
import './App.css'

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
        <Batsman></Batsman>
          <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={()=>handleAdd5(2)}>Click Me 2</button>

     
    </>
  )
}
export default App
