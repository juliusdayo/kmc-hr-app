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
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { AIFinder } from "./aiFinder"
import { Applicant } from "./applicant"
import { Search } from "lucide-react"

export function ApplicantPool() {
    return (
        <Dialog>
            <Card>
                <CardHeader className="flex-row justify-between">
                    <div>
                        <CardTitle>Explore Top Talents</CardTitle>
                        <CardDescription>Find the best talented people globally</CardDescription>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-row items-center justify-center rounded-l-full bg-[#F1F1F1] pl-3 gap-3 border border-input" >
                        <Search />
                        <Input type="text" placeholder="Search" className="rounded-none" />
                        </div>

                        <DialogTrigger asChild>
                            <Button>
                                 AI Finder
                            </Button>
                        </DialogTrigger>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-3 gap-3">
                        <Applicant/>
                        <Applicant/>
                        <Applicant/>
                        <Applicant/>
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
            <AIFinder/>
        </Dialog>
    )
  }
