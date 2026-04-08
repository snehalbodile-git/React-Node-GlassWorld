import api from "./api";


export interface User {
  id: number
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
  console.log("Calling API",data);
  const response = await api.post(
    "/user",
    data
  );
  return response.data;
}