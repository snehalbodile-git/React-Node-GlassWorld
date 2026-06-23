
import { createUser,updateUser } from "../../services/userService";
import { useState } from "react";
import { toast } from "react-toastify";
import {UserModalProps} from "../../components/UserModal";
export const useUserSubmit = ({closeUserModal,refreshUsers,selectedUser}:UserModalProps)=>{
    const [errors, setErrors] = useState<Record<string, string>>({});
    const handleSubmit = async ({e,formData}:any) => {
    e.preventDefault();
    
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
    if(selectedUser?._id){
    await updateUser({id: selectedUser?._id,
  data:formData});
 toast.success("user updated");
    }else{
    await createUser(formData);
 toast.success("New user Created ");
    }
    closeUserModal();
    refreshUsers();
  };
  return {handleSubmit,errors}
}