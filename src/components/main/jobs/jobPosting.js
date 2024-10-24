"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Dialog,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Job } from "./job"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { FileUser, Share } from 'lucide-react';
import { AddJobModal } from "./addJob"
import { Toggle } from "@/components/ui/toggle"
import { useState } from "react"

export function JobPosting({ postings }) {
    console.log(postings)
    const [currentJob, setCurrentJob] = useState({})

    return (
        <Dialog>
            <Card>
                <CardHeader className="flex-row justify-between">
                    <div>
                        <CardTitle>JOB LISTINGS</CardTitle>
                        <CardDescription>Post a job to find a talent</CardDescription>
                    </div>
                    <div className="flex gap-4">
                        <Input type="text" placeholder="Search" />
                        <DialogTrigger asChild>
                            <Button>
                                Create Job Listing
                            </Button>
                        </DialogTrigger>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="bg-gray-50 grid grid-cols-[450px_1fr] gap-3">
                        <ScrollArea className="rounded-md border p-4">
                            {Array.isArray(postings) && postings.map((posting, index) => (
                                <div key={`${posting.title}${index}`}  onClick={() => setCurrentJob(posting)} className={`cursor-pointer mb-4 border ${currentJob == posting && " rounded-lg border-[#F99D3A] bg-[#F99D3A] bg-opacity-90"}`}>
                                    <Job posting={posting}/>
                                </div>
                            ))}
                        </ScrollArea>
                        <div className="w-full">
                            <Card className="h-full">
                                <CardHeader className="border-b-2">
                                    <CardTitle className="flex justify-between">
                                        <div>
                                            <p className="text-xl uppercase ">{currentJob?.title}</p>
                                            <p className="text-sm uppercase font-medium">{currentJob?.shiftSchedule}</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <Button className="bg-white text-[#757575] font-bold border-[#d2d2d2] border-[0.5px]">
                                                            <Share />
                                                        </Button>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>SHARE</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                            <Button className="bg-[#F99D3A] font-bold">
                                                <FileUser />  VIEW TALENTS
                                            </Button>
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-10 h-[500px] overflow-auto">
                                    <h2 className="text-xl font-semibold mt-4 mb-2">Job Summary:</h2>
                                    <p className="text-gray-600 mb-4">
                                    {currentJob?.description}
                                    </p>

                                    <h2 className="text-xl font-semibold mt-4 mb-2">Key Responsibilities:</h2>
                                    <ul className="list-disc list-inside mb-4">
                                        <li>Collaborate with [insert teams or departments] to achieve [insert goals].</li>
                                        <li>Manage and oversee [insert specific tasks or projects].</li>
                                        <li>Assist in the development of [insert initiatives or strategies].</li>
                                        <li>Provide support and guidance to [insert relevant stakeholders].</li>
                                        <li>Ensure compliance with [insert relevant regulations or policies].</li>
                                    </ul>

                                    <h2 className="text-xl font-semibold mt-4 mb-2">Qualifications:</h2>
                                    <ul className="list-disc list-inside mb-4">
                                        <li>Bachelor’s degree in [insert relevant field] or equivalent experience.</li>
                                        <li>[Insert number] years of experience in [insert relevant experience].</li>
                                        <li>Strong knowledge of [insert relevant tools, technologies, or practices].</li>
                                        <li>Excellent interpersonal and communication skills.</li>
                                        <li>Ability to work independently and as part of a team.</li>
                                    </ul>

                                    <h2 className="text-xl font-semibold mt-4 mb-2">Benefits:</h2>
                                    <ul className="list-disc list-inside mb-4">
                                        <li>Competitive salary and performance-based incentives.</li>
                                        <li>Health, dental, and vision insurance.</li>
                                        <li>[Insert additional benefits, e.g., retirement plans, paid time off, professional development opportunities].</li>
                                    </ul>

                                    <h2 className="text-xl font-semibold mt-4 mb-2">How to Apply:</h2>
                                    <p className="text-gray-600 mb-4">
                                        If you are interested in this position, please submit your resume and a cover letter outlining your qualifications to [insert application instructions or email address].
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    {/* <p>Card Footer</p> */}
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </CardFooter>
            </Card>
            <AddJobModal />
        </Dialog>
    )
}
