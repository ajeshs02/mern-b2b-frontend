/* eslint-disable @typescript-eslint/no-explicit-any */
import { PermissionType } from "@/constant";
import {
  selectAuthLoading,
  selectHasPermission,
  selectUser,
} from "@/features/auth/authSelectors";
import { useAppSelector } from "@/hooks/redux-hooks";
import useWorkspaceId from "@/hooks/use-workspace-id";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withPermission = (
  WrappedComponent: React.ComponentType,
  requiredPermission: PermissionType
) => {
  const WithPermission = (props: any) => {
    const user = useAppSelector(selectUser);
    const isLoading = useAppSelector(selectAuthLoading);

    const canAccess = useAppSelector((state) =>
      selectHasPermission(state, requiredPermission)
    );

    const navigate = useNavigate();
    const workspaceId = useWorkspaceId();

    useEffect(() => {
      if (!user || !canAccess) {
        navigate(`/workspace/${workspaceId}`);
      }
    }, [user, canAccess, navigate, workspaceId]);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    // Check if user has the required permission
    if (!user || !canAccess) {
      return;
    }
    // If the user has permission, render the wrapped component
    return <WrappedComponent {...props} />;
  };
  return WithPermission;
};

export default withPermission;
