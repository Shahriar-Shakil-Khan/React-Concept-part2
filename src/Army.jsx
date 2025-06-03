import { use } from "react"

export default function Army({ArmyPromise}){
    const users=use(ArmyPromise)
    console.log(users);
    return(
        <div className="card">
            <h2>Army:{users.length}</h2>
        </div>
    )
}