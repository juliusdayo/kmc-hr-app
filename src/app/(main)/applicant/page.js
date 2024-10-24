"use client"

import { Header } from "@/components/layout/header";
import { AppSidebar } from "@/components/layout/sidebar";
import { JobPosting } from "@/components/main/jobs/jobPosting";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { applicant } from "@/constants";
import ApplicantProfile from "./(tabs)/profile/page";
import { useState } from "react";
import Applications from "./(tabs)/applications/page";

const Index = () => {
    const [nav, setNav] = useState("Profile")

    const handleNav = (screen) => {
        setNav(screen)
    }
    return (
        <SidebarProvider>
            <AppSidebar screens={applicant} setNav={handleNav}/>
            <main className="w-full">
                <div className="p-8 w-full space-y-5">
                    <Header>
                        <SidebarTrigger />
                    </Header>
                    <div>
                        {nav === "JobListings" ? <JobPosting/> :
                         nav === "Applications" ? <Applications/> :
                         nav === "Profile" ? <ApplicantProfile/> : null }
                    </div>
                </div>
            </main>
        </SidebarProvider>
    );
}
export default Index;
