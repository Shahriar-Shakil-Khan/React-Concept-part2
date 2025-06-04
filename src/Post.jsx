import { use } from "react"
import Posts from './Posts'

export default function Post({AlbumPromise}){
    const users=use(AlbumPromise)
    return(
        
        <div className="card">
            <h3>Album:{users.length}</h3>
            {
                users.map(user=><Posts key={user.id} user={user}></Posts>) 
            }
        </div>
    )
}