import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserType, CurrentUserResponseType } from "@/types/api.type";
import API from "@/lib/axios-client";

export const fetchCurrentUser = createAsyncThunk<
  UserType,
  void,
  { rejectValue: string }
>("auth/fetchCurrentUser", async (_, thunkAPI) => {
  try {
    const response = await API.get<CurrentUserResponseType>("/user/current");
    return response.data.user; // Assuming API returns { user }
  } catch (err: any) {
    return thunkAPI.rejectWithValue(
      err.response?.data?.message || "Failed to fetch user"
    );
  }
});
