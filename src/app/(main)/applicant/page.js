import { AppSidebar } from "@/components/layout/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { hiringManager } from "@/constants";

const Index = () => {
    return (
        <SidebarProvider>
            <AppSidebar screens={hiringManager}/>
            <main>
                <SidebarTrigger />
                <div className="p-8">
                    Applicant UI
                </div>
            </main>
        </SidebarProvider>

    );
}
export default Index;
