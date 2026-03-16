import api from "./api";


export interface User {
  id: number
  role: string
  firstName: string
  lastName: string
  email: string
  phone: string
  altPhone: string
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