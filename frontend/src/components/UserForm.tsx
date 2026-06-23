
import { useRef } from "react";
import { createUser } from "../services/userService";

import {UserModalProps} from "./UserModal";
import {useUserSubmit} from "../hook/user/useUserSubmit";

const UserForm = ({ closeUserModal,refreshUsers,selectedUser }:UserModalProps) => {
  const {handleSubmit,errors} = useUserSubmit({closeUserModal,refreshUsers,selectedUser} );
  const role = useRef<HTMLSelectElement>(null);
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const address = useRef<HTMLTextAreaElement>(null);
  const status = useRef<HTMLSelectElement>(null);
  

  return (
    <form onSubmit={(e)=>{
      const formData = {
      role: role.current?.value,
      firstName: firstName.current?.value || "",
      lastName: lastName.current?.value || "",
      email: email.current?.value || "",
      phone: phone.current?.value || "",
      address: address.current?.value || "",
      status: status.current?.value,
    };handleSubmit({ e, formData })}}>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
            name="firstName"
            ref={firstName}
            defaultValue={selectedUser?.firstName ? selectedUser.firstName : ""}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
            name="lastName"
            ref={lastName}
           defaultValue={selectedUser?.lastName ? selectedUser.lastName : ""}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            name="email"
            ref={email}
            defaultValue={selectedUser?.email ? selectedUser.email : ""}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            name="phone"
            ref={phone}
            defaultValue={selectedUser?.phone ? selectedUser.phone : ""}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Role</label>
          <select
            className="form-select"
            name="role"
            ref={role}
            defaultValue={selectedUser?.role ? selectedUser.role : "customer"}
          >
            <option value="admin">Admin</option>
            <option value="vendor">Vendor</option>
            <option value="customer">Customer</option>
          </select>
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Status</label>
          <select
            className="form-select"
            name="status"
            ref={status}
            defaultValue={selectedUser?.status ? selectedUser.status : "active"}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Address</label>
          <textarea
            className={`form-control ${errors.address ? "is-invalid" : ""}`}
            name="address"
            ref={address}
            defaultValue={selectedUser?.address ? selectedUser.address : ""}
            rows={3}
          />
        </div>
      </div>

      <div className="mt-3 text-end">
        <button type="submit" className="btn btn-primary">
         {selectedUser?._id ? "Update User" : "Save User"}
        </button>
      </div>
    </form>
  );
};

export default UserForm;
