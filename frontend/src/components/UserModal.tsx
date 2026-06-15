import { User } from "../services/userService";
import UserForm from "./UserForm";

export type UserModalProps = {
  closeUserModal: () => void;
  refreshUsers: () => void;
  selectedUser: User | null
};
const UserModal = ({ closeUserModal, refreshUsers,selectedUser }: UserModalProps) => {
  return (
    <>
      <div className="modal fade show d-block">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {selectedUser?._id ? "Update User" : "Add User"}
              </h5>

              <button
                type="button"
                className="btn-close"
                onClick={closeUserModal}
              ></button>
            </div>

            <div className="modal-body">
              <UserForm
                closeUserModal={closeUserModal}
                refreshUsers={refreshUsers}
                selectedUser = {selectedUser}
              ></UserForm>
            </div>
          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show"></div>
    </>
  );
};
export default UserModal;
