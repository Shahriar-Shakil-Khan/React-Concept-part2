import { use } from "react"

export default function Friends({fetchUsers1}){
    const users=use(fetchUsers1)
    return(
        <div className="card">
            <h1>Friends : {users.length}</h1>
        </div>
    )
} 