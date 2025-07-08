import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { fetchCurrentUser } from "@/features/auth/authThunk";
import { selectWorkspaceError } from "@/features/workspace/workspaceSelectors";
import useWorkspaceId from "@/hooks/use-workspace-id";
import { fetchWorkspaceById } from "@/features/workspace/workspaceThunk";

const AppLoader = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const workspaceId = useWorkspaceId();

  const workspaceError = useAppSelector(selectWorkspaceError);

  // Fetch user and workspace on app load
  useEffect(() => {
    dispatch(fetchCurrentUser());
    if (workspaceId) {
      dispatch(fetchWorkspaceById(workspaceId));
    }
  }, [dispatch, workspaceId]);

  // Redirect unauthorized users
  useEffect(() => {
    if (workspaceError === "ACCESS_UNAUTHORIZED") {
      navigate("/");
    }
  }, [workspaceError, navigate]);

  return <>{children}</>;
};

export default AppLoader;
