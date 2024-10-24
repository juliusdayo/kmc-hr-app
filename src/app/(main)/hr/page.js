"use client"

import { Header } from "@/components/layout/header";
import { AppSidebar } from "@/components/layout/sidebar";
import { JobPosting } from "@/components/main/jobs/jobPosting";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { hiringManager } from "@/constants";
import { useState } from "react";

const Index = () => {
    const [nav, setNav] = useState("JobListings")

    const handleNav = (screen) => {
        setNav(screen)
    }
    return (
        <SidebarProvider className="w-full">
            <AppSidebar screens={hiringManager} setNav={handleNav}/>
            <main className="w-full">
                <div className="p-8 w-full space-y-5">
                    <Header>
                        <SidebarTrigger />
                    </Header>
                    <div>
                        {nav === "JobListings" ? <JobPosting/> : null }
                    </div>
                </div>
            </main>
        </SidebarProvider>
    );
}
export default Index;
