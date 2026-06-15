import api from "./api";


export interface User {
  _id: string
  role: string
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  status: string
  createdAt: string
  updatedAt: string
}
export interface UsersList {
  status: boolean
  data: User[]
}

export const getUsers = async ():Promise<UsersList> => {
  const response = await api.get<UsersList>("/users");
  return response.data;
};

export const createUser = async(data:any)=>{
  const response = await api.post(
    "/users",
    data
  );
  return response.data;
}

export const updateUser = async({id,data}:any)=>{
 const response = await api.patch(
    `/users/${id}`,
    data
  );
  return response.data;
}

export const deleteUser = async(id:string)=>{
  const response = await api.delete(
    `/users/${id}`
  );
  return response.data;
}
