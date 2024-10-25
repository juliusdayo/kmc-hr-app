import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter
  } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

export function AddScheduleModal() {
    const [date, setDate] = useState(new Date())
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Create Schedule</DialogTitle>
                <DialogDescription>
                    Make changes to your profile here. Click save when you&apos;re done.
                </DialogDescription>
                </DialogHeader>
                <div className="flex justify-center">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                         className="rounded-md border h-auto text-xl mx-auto"
                    />
                </div>
                <DialogFooter>
            <Button type="submit">Add schedule</Button>
            </DialogFooter>
        </DialogContent>
    )
  }
