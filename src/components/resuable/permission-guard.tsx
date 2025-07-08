import React from "react";
import { PermissionType } from "@/constant";
import { useAppSelector } from "@/hooks/redux-hooks";
import { selectHasPermission } from "@/features/auth/authSelectors";

type PermissionsGuardProps = {
  requiredPermission: PermissionType;
  children: React.ReactNode;
  showMessage?: boolean;
};

const PermissionsGuard: React.FC<PermissionsGuardProps> = ({
  requiredPermission,
  showMessage = false,
  children,
}) => {
  const canAccess = useAppSelector((state) =>
    selectHasPermission(state, requiredPermission)
  );

  if (!canAccess) {
    return (
      showMessage && (
        <div
          className="text-center 
        text-sm pt-3
        italic
        w-full
        text-muted-foreground"
        >
          You do not have the permission to view this
        </div>
      )
    );
  }

  return <>{children}</>;
};

export default PermissionsGuard;
