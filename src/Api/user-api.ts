import { apiInstance } from "./api";
import { UserUpdate } from "Components/UserItem/UserInfo/EditUser/Form/Form";
export const requestUser = async (page: number, page_size: number) => {
  const { data } = await apiInstance.get(
    `users/?page=${page}&page_size=${page_size}`
  );
  return data;
};

export const getUserByID = async (id: number) => {
  const { data } = await apiInstance.get(
    `user/${id}`
  );
  return data;
};

export const updateInfoById = async (id: number, body: UserUpdate) => {
  const { data } = await apiInstance.put(`user/${id}/update_info/`, body);
  return data;
};

export const updatePasswortById = async (id: number, body: UserUpdate) => {
  const { data } = await apiInstance.put(`user/${id}/update_password/`, body);
  return data;
};
export const delUserById = async (id: number) => {
  const { data } = await apiInstance.delete(`user/${id}`);
  return data;
};
export const updatePhotoById = async (id: number, body: FormData) => {
  const { data } = await apiInstance.put(
    `user/${id}/update_avatar/`, body,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );  
  return data;
}