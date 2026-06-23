const UserDeleteModal = (props: any) => {
  const user = props.user;
  return (
    <>
      <div className="modal fade show d-block" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Confirm Delete {user.firstName + " " + user.lastName}
              </h5>

              <button
                type="button"
                className="btn-close"
                onClick={() => props.setShowDeleteModal(false)}
              ></button>
            </div>

            <div className="modal-body">
              Are you sure you want to delete this user?
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                onClick={() => props.setShowDeleteModal(false)}
              >
                Cancel
              </button>

              <button
                className="btn btn-danger"
                onClick={props.confirmDeleteUser}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default UserDeleteModal;
