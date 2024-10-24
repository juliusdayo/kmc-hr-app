"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    Dialog,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { AddScheduleModal } from "./addSchedule"
import { Search } from "lucide-react"

export function Schedule() {
    const [date, setDate] = useState(new Date())

    return (
        <Dialog>
            <Card>
                <CardHeader className="flex-row justify-between">
                    <div>
                        <CardTitle>Interview Scheduling</CardTitle>
                        <CardDescription>schedule an interview</CardDescription>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-row items-center justify-center rounded-l-full bg-[#F1F1F1] pl-3 gap-3 border border-input" >
                        <Search />
                        <Input type="text" placeholder="Search" className="rounded-none" />
                        </div>

                        <DialogTrigger asChild>
                            <Button>
                                 Add new Schedule
                            </Button>
                        </DialogTrigger>
                    </div>
                </CardHeader>
                <CardContent>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                         className="rounded-md border p-12 w-full h-auto text-xl"
                    />
                </CardContent>
            </Card>
            <AddScheduleModal/>
        </Dialog>
    )
  }
