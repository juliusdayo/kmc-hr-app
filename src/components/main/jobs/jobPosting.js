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
import { AddJobModal } from "./addjob"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

export function JobPosting() {
    return (
        <Dialog>
            <Card>
                <CardHeader className="flex-row justify-between">
                    <div>
                        <CardTitle>Job Posting</CardTitle>
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
                    <div className="bg-gray-50 grid grid-cols-[350px_1fr] gap-3">
                        <ScrollArea className="h-[500px] rounded-md border p-4">
                            <Job/>
                            <Job/>
                            <Job/>
                            <Job/>
                        </ScrollArea>
                        <div className="w-full">
                            <Card className="h-full">
                                <CardHeader>
                                    <CardTitle className="text-3xl"> Developer</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>Night Shift</p>
                                    <p>Onsite</p>
                                    <p>Taguig, Philippines</p>
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
            <AddJobModal/>
        </Dialog>
    )
  }
