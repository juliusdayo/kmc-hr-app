import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose
  } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RateApplicantModal() {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Create Job</DialogTitle>
                <DialogDescription>
                    Make changes to your profile here. Click save when you&apos;re done.
                </DialogDescription>
            </DialogHeader>
            <div className=" py-4">
                <Avatar className="w-[200px] h-[200px] mx-auto">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <DialogFooter>
                <DialogClose asChild>
                    <Button type="submit">Skip</Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    )
  }
