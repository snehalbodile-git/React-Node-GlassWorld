
import { use, useEffect, useState } from "react"
import {getUsers,User} from "../services/userService";

function Users(){

  const [users,setUsers] = useState<User[]>([])

  useEffect(()=>{
      const feachUser = async ()=>{
        const apiUserData = await getUsers();
        setUsers(apiUserData.data);
        console.table(apiUserData.data);
      }
      feachUser();
  },[]);
  return(

    <div>
      <h2>Users</h2>

      {/* <ul>
      {users.map((u:any,i:number)=>(
        <li key={i}>{u.firstName}</li>
      ))}
      </ul> */}
      
        <table className="table table-bordered">

        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile No</th>
            <th>Alternate No</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user)=>{
              return(
                <>
                  <tr>
                    <td>{user.firstName} {user.lastName}</td>
                    <td>{user.phone}</td>
                    <td>{user.altPhone}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.status}</td>
                  </tr>
                </>
              );
            })
          }
            <tr></tr>
        </tbody>
        </table>
    </div>

  )
}

export default Users
