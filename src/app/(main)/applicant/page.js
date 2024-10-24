"use client"

import { Header } from "@/components/layout/header";
import { AppSidebar } from "@/components/layout/sidebar";
import { JobPosting } from "@/components/main/jobs/jobPosting";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { applicant } from "@/constants";
import ApplicantProfile from "./(tabs)/profile/page";
import { useEffect, useState } from "react";
import Applications from "./(tabs)/applications/page";
import { usePathname } from "next/navigation";

const Index = () => {
    const [nav, setNav] = useState("JobListings")
    const pathname = usePathname()
    const [postings, setPostings] = useState([])

    const handleNav = (screen) => {
        setNav(screen)
    }
    const fetchJobs = async () => {
        const response = await fetch('/api/job')
        const { data } = await response.json()
        setPostings(data)
    }

    useEffect(() => {
        fetchJobs()
    }, [])

    return (
        <SidebarProvider>
            <AppSidebar screens={applicant} setNav={handleNav}  currentNav={nav}/>
            <main className="w-full">
                <div className="p-8 w-full space-y-5">
                    <Header>
                        <SidebarTrigger />
                    </Header>
                    <div>
                        {nav === "JobListings" ? <JobPosting postings={postings} pathname={pathname}/> :
                         nav === "Applications" ? <Applications/> :
                         nav === "Profile" ? <ApplicantProfile/> : null }
                    </div>
                </div>
            </main>
        </SidebarProvider>
    );
}
export default Index;
