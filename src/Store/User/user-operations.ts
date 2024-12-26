import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestUser,
  getUserByID,
  updateInfoById,
  updatePasswortById,
  delUserById,
  updatePhotoById,
} from "Api/user-api";
import { UserUpdate } from "../../Components/UserItem/UserInfo/EditUser/Form/Form"
import { User } from "./user-slice";

interface Pagination {
  current_page: number;
  total_page: number;
  total_results: number;
}

interface ApiResponse {
  result: {
    user: User[]; 
    users: User[]; 
    pagination: Pagination;
  };
}

export interface ApiResponseUserBuid {
  result:User
  status_code?: number; 
  detail?: string; 
}

export const fetchUsers = createAsyncThunk<
  ApiResponse,
  { page: number; page_size: number },
  { rejectValue: string }
>("user/fetch", async ({ page, page_size }, { rejectWithValue }) => {
  try {
    const data = await requestUser(page, page_size);
    return data;
  } catch (error) {
    const errorMessage = (error as Error).message;
    return rejectWithValue(errorMessage);
  }
});

export const fetchUsersById = createAsyncThunk<
  ApiResponseUserBuid,
  { id: number },
  { rejectValue: string }
>("userByID/fetch", async ({ id }, { rejectWithValue }) => {
  try {
    const data = await getUserByID(id);
    return data;
  } catch (error) {
    const errorMessage = (error as Error).message;
    return rejectWithValue(errorMessage);
  }
});

export const updateUsersById = createAsyncThunk<
  ApiResponseUserBuid,
  { id: number; body: UserUpdate },
  { rejectValue: string }
>("updateMe/fetch", async ({ id, body }, { rejectWithValue }) => {
  try {
    const data = await updateInfoById(id, body);
    return data;
  } catch (error) {
    const errorMessage = (error as Error).message;
    return rejectWithValue(errorMessage);
  }
});


export const upPasswordById = createAsyncThunk<
  ApiResponseUserBuid,
  { id: number; body: UserUpdate },
  { rejectValue: string }
>("updatePassword/fetch", async ({ id, body }, { rejectWithValue }) => {
  try {
    const data = await updatePasswortById(id, body);
    return data;
  } catch (error) {
    const errorMessage = (error as Error).message;
    return rejectWithValue(errorMessage);
  }
});
export const delUsersById = createAsyncThunk<
  ApiResponseUserBuid,
  { id: number },
  { rejectValue: string }
>("userByID/del", async ({ id }, { rejectWithValue }) => {
  try {
    const data = await delUserById(id);
    return data;
  } catch (error) {
    const errorMessage = (error as Error).message;
    return rejectWithValue(errorMessage);
  }
});

export const updatePhoto = createAsyncThunk<
  ApiResponseUserBuid,
  { id: number; body: FormData },
  { rejectValue: string }
>("updatePhoto/fetch", async ({ id, body }, { rejectWithValue }) => {
  try {
    const data = await updatePhotoById(id, body);
    return data;
  } catch (error) {
    const errorMessage = (error as Error).message;
    return rejectWithValue(errorMessage);
  }
});
