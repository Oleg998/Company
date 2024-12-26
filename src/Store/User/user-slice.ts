import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchUsers,
  fetchUsersById,
  updateUsersById,
  upPasswordById,
  updatePhoto,
} from "./user-operations";

export interface User {
  user_id: number;
  user_email: string;
  user_firstname: string;
  user_lastname: string;
  user_avatar?: string | null;
  user_status?: string | null ;
  user_city?: string | null;
  user_phone?: string | null;
  user_links?: string[] | null;
  is_superuser: boolean;
}

type UserState = {
  user: User | null;
  users: User[];
  isLoading: boolean;
  error: string | null;
  requestStatus: string;
  total_results: number;

};

const initialState: UserState = {
  user: null,
  users: [],
  isLoading: false,
  error: null,
  requestStatus: "",
  total_results: 0,
};

const statusPending = (state: UserState) => {
  state.isLoading = true;
  state.error = null;
  state.requestStatus = "Pending";
};

const statusRejected = (
  state: UserState,
  action: PayloadAction<string | undefined>
) => {
  state.isLoading = false;
  state.error = action.payload ?? "error";
  state.requestStatus = "Rejected";
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, statusPending)
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.users = payload.result.users;
        state.total_results = payload.result.pagination.total_results;
        state.requestStatus = "fetchFulfilled";
      })
      .addCase(fetchUsers.rejected, statusRejected)

      .addCase(fetchUsersById.pending, statusPending)
      .addCase(fetchUsersById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = payload.result;
        state.requestStatus = "fetchFulfilled";
      })
      .addCase(fetchUsersById.rejected, statusRejected)

      .addCase(updateUsersById.pending, statusPending)
      .addCase(updateUsersById.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.requestStatus = "fetchFulfilled";
      })
      .addCase(updateUsersById.rejected, statusRejected)

      .addCase(upPasswordById.pending, statusPending)
      .addCase(upPasswordById.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.requestStatus = "fetchFulfilled";
      })
      .addCase(upPasswordById.rejected, statusRejected)

      .addCase(updatePhoto.pending, statusPending)
      .addCase(updatePhoto.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.requestStatus = "fetchFulfilled";
      })
      .addCase(updatePhoto.rejected, statusRejected);

      
    
  },
});

export default userSlice.reducer;
