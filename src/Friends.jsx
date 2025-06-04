import { use } from "react"
import Friend from './Friend'

export default function Friends({fetchUsers1}){
    const users=use(fetchUsers1)
    return(
        <div className="card">
            <h1>Friends : {users.length}</h1>
            {
               users.map(user=><Friend key={user.id} user={user}></Friend>) 
            }
        </div>
    )
} 