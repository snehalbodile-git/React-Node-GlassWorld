import { useEffect, useState } from "react";
import { getUsers, User, deleteUser } from "../services/userService";
import UserModal from "./UserModal";
import UserDeleteModal from "./UserDeleteModal";
import { toast } from "react-toastify";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const feachUsers = async () => {
    const apiUserData = await getUsers();
    setUsers(apiUserData.data);
  };
  useEffect(() => {
    feachUsers();
  }, []);
  const confirmDeleteUser = async () => {
    if (!selectedUser) return;
    try {
      const apiResponse = await deleteUser(selectedUser._id);
      // Refresh the user list
      feachUsers();
      // Clear selected user
      setSelectedUser(null);
      //Close modal
      setShowDeleteModal(false);
      toast.success("User deleted successfully!");
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };
  return (
    <>
      {showModal && (
        <UserModal
          closeUserModal={() => setShowModal(false)}
          refreshUsers={feachUsers}
          selectedUser={selectedUser}
        />
      )}
      {showDeleteModal && (
        <UserDeleteModal
          user={selectedUser}
          setShowDeleteModal={setShowDeleteModal}
          confirmDeleteUser={confirmDeleteUser}
        />
      )}
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <h2>Users</h2>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              (setShowModal(true), setSelectedUser(null));
            }}
          >
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  <td>{user.phone}</td>
                  <td>{user.address}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.status}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary me-2"
                      onClick={() => {
                        setShowModal(true);
                        setSelectedUser(user);
                      }}
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => {
                        setShowDeleteModal(true);
                        setSelectedUser(user);
                      }}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;
