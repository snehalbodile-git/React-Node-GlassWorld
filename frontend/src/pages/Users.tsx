
import { useEffect, useState } from "react"

function Users(){

  const [users,setUsers] = useState([])

  useEffect(()=>{

    fetch("http://localhost:5000/users")
    .then(res=>res.json())
    .then(data=>setUsers(data))

  },[])

  return(

    <div>
      <h2>Users</h2>

      <ul>
      {users.map((u:any,i:number)=>(
        <li key={i}>{u.name}</li>
      ))}
      </ul>

    </div>

  )
}

export default Users
