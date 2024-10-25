import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose
  } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Transcriptor() {

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Transcriptor AI</DialogTitle>
            </DialogHeader>
            <div className="text-center py-4 space-y-4">

                <div className="flex flex-col justify-center space-y-4">
                    <img src="/meet.png" alt="" className="aspect-video w-[500px]"/>
                    <p className="text-left">Interviewee: Thank you so much.</p>
                </div>

            </div>
            <DialogFooter>
                <DialogClose asChild>
                    <Button type="submit">Auto Summarize</Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    )
  }
