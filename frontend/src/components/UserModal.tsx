import UserForm from "./UserForm";

const UserModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <>
      <div className="modal fade show d-block">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {/* {selectedUser.id ? "Update User" : "Add User"} */}
                Add User
              </h5>

              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>

            <div className="modal-body">
              <UserForm></UserForm>
            </div>
          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show"></div>
    </>
  );
};
export default UserModal;
