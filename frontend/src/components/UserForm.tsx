import { useState } from "react";
import { useRef } from "react";
import { createUser } from "../services/userService";
import { toast } from "react-toastify";

const UserForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const role = useRef<HTMLSelectElement>(null);
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const address = useRef<HTMLTextAreaElement>(null);
  const status = useRef<HTMLSelectElement>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Calling hand submit");
    const formData = {
      role: role.current?.value,
      firstName: firstName.current?.value || "",
      lastName: lastName.current?.value || "",
      email: email.current?.value || "",
      phone: phone.current?.value || "",
      address: address.current?.value || "",
      status: status.current?.value,
    };
    const newErrors: Record<string, string> = {};
    if (!formData.role) {
      newErrors.role = "Role is required";
    }

    if (!formData?.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData?.lastName.trim()) {
      newErrors.lastName = "First name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.status) {
      newErrors.status = "Status is required";
    }

    // 🔴 Email format
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // 🔴 Phone validation
    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }
    //  if (!/^[0-9]{10}$/.test(formData.altPhone)) {
    //   newErrors.altPhone = "Phone must be 10 digits";
    // }

    // ❌ Stop if errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill out correct data");
      return;
    }

    // ✅ Clear errors
    setErrors({});
    await createUser(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
            name="firstName"
            ref={firstName}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
            name="lastName"
            ref={lastName}
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
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            name="phone"
            ref={phone}
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
            defaultValue="customer"
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
            defaultValue="active"
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
            rows={3}
          />
        </div>
      </div>

      <div className="mt-3 text-end">
        <button type="submit" className="btn btn-primary">
          Save User
        </button>
      </div>
    </form>
  );
};

export default UserForm;
