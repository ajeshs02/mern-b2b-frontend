import { RootState } from "@/app/store";
import { PermissionType } from "@/constant";

// Select user
export const selectUser = (state: RootState) => state.auth.user;

// Select authentication status
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

// Select loading state
export const selectAuthLoading = (state: RootState) => state.auth.isLoading;

// Select error state
export const selectAuthError = (state: RootState) => state.auth.error;

export const selectUserPermissions = (state: RootState): PermissionType[] => {
  const user = state.auth.user;
  const workspace = state.workspace.workspace;

  if (user && workspace) {
    const member = workspace.members?.find((m) => m.userId === user._id);
    if (member) {
      return member.role?.permissions || [];
    }
  }
  return []; // No permissions if user not in workspace
};

// Derived selector: check if user has specific permission
export const selectHasPermission = (
  state: RootState,
  permission: PermissionType
): boolean => {
  const userPermissions = selectUserPermissions(state);
  return userPermissions.includes(permission);
};
