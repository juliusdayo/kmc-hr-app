import { Header } from "@/components/layout/header";
import { AppSidebar } from "@/components/layout/sidebar";
import { JobPosting } from "@/components/main/jobs/jobPosting";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { hiringManager } from "@/constants";

const Index = () => {
    return (
        <SidebarProvider>
            <AppSidebar screens={hiringManager}/>
            <main className="w-full">
                <div className="p-8 w-full space-y-5">
                    <Header>
                        <SidebarTrigger />
                    </Header>
                    <JobPosting/>
                </div>
            </main>
        </SidebarProvider>

    );
}
export default Index;
