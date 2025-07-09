import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import Asidebar from "@/components/asidebar/asidebar";
import Header from "@/components/header";
import CreateWorkspaceDialog from "@/components/workspace/create-workspace-dialog";
import CreateProjectDialog from "@/components/workspace/project/create-project-dialog";
import AppLoader from "@/components/common/app-loader";
import { Provider } from "react-redux";
import { store } from "../app/store";

const AppLayout = () => {
  return (
    <Provider store={store}>
      <AppLoader>
        <SidebarProvider>
          <Asidebar />
          <SidebarInset className="overflow-x-hidden">
            <div className="w-full">
              <>
                <Header />
                <div className="px-3 lg:px-20 py-3">
                  <Outlet />
                </div>
              </>
              <CreateWorkspaceDialog />
              <CreateProjectDialog />
            </div>
          </SidebarInset>
        </SidebarProvider>
      </AppLoader>
    </Provider>
  );
};

export default AppLayout;
