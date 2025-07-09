import { RootState } from "@/app/store";

export const selectWorkspace = (state: RootState) => state.workspace.workspace;

export const selectWorkspaceLoading = (state: RootState) =>
  state.workspace.isLoading;

export const selectWorkspaceError = (state: RootState) => state.workspace.error;
