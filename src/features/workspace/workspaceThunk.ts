import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  WorkspaceByIdResponseType,
  WorkspaceWithMembersType,
} from "@/types/api.type";
import API from "@/lib/axios-client";

export const fetchWorkspaceById = createAsyncThunk<
  WorkspaceWithMembersType,
  string,
  { rejectValue: string }
>("workspace/fetchWorkspaceById", async (workspaceId, thunkAPI) => {
  try {
    const response = await API.get<WorkspaceByIdResponseType>(
      `/workspace/${workspaceId}`
    );
    return response.data.workspace; // assuming API returns { workspace }
  } catch (err: any) {
    return thunkAPI.rejectWithValue(
      err.response?.data?.message || "Failed to fetch workspace"
    );
  }
});
