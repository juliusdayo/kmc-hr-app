"use client"

import { Header } from "@/components/layout/header";
import { AppSidebar } from "@/components/layout/sidebar";
import { ApplicantPool } from "@/components/main/applicants/applicantPool";
import { JobPosting } from "@/components/main/jobs/jobPosting";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { hiringManager } from "@/constants";
import { useState, useEffect } from "react";

const Index = () => {
    const [nav, setNav] = useState("JobListings")

    const handleNav = (screen) => {
        setNav(screen)
    }

    const fetchApplicant = async () => {
        const response = await fetch('/api/applicant')
        const data = await response.json()
        console.log(data)
    }
    useEffect(() => {
        fetchApplicant()
    }
        , [])
    return (
        <SidebarProvider className="w-full">
            <AppSidebar screens={hiringManager} setNav={handleNav} />
            <main className="w-full">
                <div className="p-8 w-full space-y-5">
                    <Header>
                        <SidebarTrigger />
                    </Header>
                    <div>
                        {nav === "JobListings" ? <JobPosting /> :
                            nav === "ApplicantRatings" ? <ApplicantPool /> : null}
                    </div>
                </div>
            </main>
        </SidebarProvider>
    );
}
export default Index;
