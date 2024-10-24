"use client"

import { Header } from "@/components/layout/header";
import { AppSidebar } from "@/components/layout/sidebar";
import { ApplicantPool } from "@/components/main/applicants/applicantPool";
import { JobPosting } from "@/components/main/jobs/jobPosting";
import { Schedule } from "@/components/main/scheduling/schedule";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { client } from "@/constants";
import { Menu } from 'lucide-react';
import { useState, useEffect } from "react";

const Index = () => {
    const [nav, setNav] = useState("JobListings")
    const [postings, setPostings] = useState([])
    const handleNav = (screen) => {
        setNav(screen)
    }

    const fetchApplicant = async () => {
        const response = await fetch('/api/applicant')
        const { data } = await response.json()
        setPostings(data)
    }
    useEffect(() => {
        fetchApplicant()
    }, [])
    return (
        <SidebarProvider className="w-full">
            <AppSidebar screens={client} setNav={handleNav} />
            <main className="w-full">
                <div className="p-8 w-full space-y-5">
                    <Header>
                        <SidebarTrigger><Menu /></SidebarTrigger>
                    </Header>
                    <div>
                        {nav === "JobListings" ? <JobPosting postings={postings} /> :
                            nav === "ApplicantRatings" ? <ApplicantPool /> :
                                nav === "Scheduling" ? <Schedule /> : null}
                    </div>
                </div>
            </main>
        </SidebarProvider>
    );
}
export default Index;
