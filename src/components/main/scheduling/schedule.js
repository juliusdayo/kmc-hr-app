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
                        <Input type="text" placeholder="Search" />
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
                        className="rounded-md border"
                    />
                </CardContent>
            </Card>
            <AddScheduleModal/>
        </Dialog>
    )
  }
