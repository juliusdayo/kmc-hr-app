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
import ApplicantProfileDynamic from "../applicant/[id]/page";

const Index = () => {
    const [nav, setNav] = useState("JobListings")
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
        <SidebarProvider className="w-full">
            <AppSidebar screens={client} setNav={handleNav} currentNav={nav}/>
            <main className="w-full">
                <div className="p-8 w-full space-y-5">
                    <Header>
                        <SidebarTrigger><Menu /></SidebarTrigger>
                    </Header>
                    <div>
                        {nav === "JobListings" ? <JobPosting postings={postings} setNav={handleNav}/> :
                            nav === "ApplicantRatings" ? <ApplicantPool /> :
                                nav === "Scheduling" ? <Schedule /> :
                                    nav === "ApplicantProfile" ? <ApplicantProfileDynamic/> : null}
                    </div>
                </div>
            </main>
        </SidebarProvider>
    );
}
export default Index;
