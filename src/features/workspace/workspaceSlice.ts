import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WorkspaceWithMembersType } from "@/types/api.type";
import { fetchWorkspaceById } from "./workspaceThunk";

interface WorkspaceState {
  workspace: WorkspaceWithMembersType | null;
  error: string | null;
  isLoading: boolean;
}

const initialState: WorkspaceState = {
  workspace: null,
  error: null,
  isLoading: false,
};

const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    setWorkspace(state, action: PayloadAction<WorkspaceWithMembersType>) {
      state.workspace = action.payload;
    },
    clearWorkspace(state) {
      state.workspace = null;
    },
    setWorkspaceError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    clearWorkspaceError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkspaceById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchWorkspaceById.fulfilled, (state, action) => {
        state.workspace = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchWorkspaceById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to fetch workspace";
      });
  },
});

export const {
  setWorkspace,
  clearWorkspace,
  setWorkspaceError,
  clearWorkspaceError,
} = workspaceSlice.actions;

export default workspaceSlice.reducer;
