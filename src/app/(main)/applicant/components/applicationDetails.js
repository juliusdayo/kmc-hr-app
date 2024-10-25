import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose
  } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

export function ApplicationDetails() {
    const [date, setDate] = useState(new Date())

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Do you want to accept invitation for interview?</DialogTitle>
            </DialogHeader>
            <div className="text-center py-4 space-y-4">

                <div className="flex flex-col justify-center">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                         className="rounded-md border h-auto text-xl mx-auto mb-4"
                    />

                    <p>The hr invites you to an interview, October 25 at 5:00pm</p>
                </div>

            </div>
            <DialogFooter>
                <Button type="submit" variant="outline">Decline</Button>
                <DialogClose asChild>
                    <Button type="submit">Accept</Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    )
  }
