

import { useEffect, useState } from "react"
import {getUsers,User} from "../services/userService";
import UserModal  from "./UserModal";

const UserList = ()=>{
const [users,setUsers] = useState<User[]>([])
const [showModal, setShowModal] = useState(false)

  useEffect(()=>{
      const feachUser = async ()=>{
        const apiUserData = await getUsers();
        setUsers(apiUserData.data);
      }
      feachUser();
  },[]);
  return(
    <>
     {showModal && (
        <UserModal onClose={() => setShowModal(false)} />
      )}
    <div>
      <div className="d-flex justify-content-between align-items-center">
      <h2>Users</h2>
      <button type="button" className="btn btn-primary" onClick={() => setShowModal(true)}>
        <i className="fas fa-plus"></i> Add User
      </button>
      
    </div>

  <table className="table table-bordered">

        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile No</th>
            <th>Address</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user,index)=>{
              return(
                  <tr key={index}>
                    <td>{user.firstName} {user.lastName}</td>
                    <td>{user.phone}</td>
                    <td>{user.address}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.status}</td>
                  </tr>
              );
            })
          }
        </tbody>
        </table>
    </div>

    </>

  )

}

export default UserList;