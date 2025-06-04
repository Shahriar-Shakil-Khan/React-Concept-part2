import Batsman from './Batsman'
import Counter from './Counter'
import Users from './Users'
import './App.css'
import Friends from './Friends'
import Army from './Army'
import { Suspense } from 'react'
import Post from './Post'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())

// const fetchUsers1=fetch('https://jsonplaceholder.typicode.com/users')
// .then(res=>res.json())

// const fetchArmy =async()=>{
//    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
//    return res.json();
// }

const fetchAlbum=async()=>{
  const res=await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json();
}



function App() {

  // const ArmyPromise=fetchArmy();
  const AlbumPromise=fetchAlbum();
  
  
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
        
        <Suspense fallback={<h3>Album.....</h3>}>
            <Post AlbumPromise={AlbumPromise}></Post>
        </Suspense>

        {/* <Suspense fallback={<h3>Friends.......</h3>}>
            <Friends fetchUsers1={fetchUsers1}></Friends>
        </Suspense> */}

        {/* <Suspense fallback={<h2>Army.......</h2>}>
              <Army ArmyPromise={ArmyPromise}></Army>
        </Suspense> */}
        
        <Suspense fallback={<h1>Album...</h1>}>
             <Post AlbumPromise={AlbumPromise}></Post> 
        </Suspense>
        
        <Batsman></Batsman>
          <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={()=>handleAdd5(2)}>Click Me 2</button>

     
    </>
  )
}
export default App
