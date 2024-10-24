import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter
  } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function AddScheduleModal() {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Create Schedule</DialogTitle>
                <DialogDescription>
                    Make changes to your profile here. Click save when you&apos;re done.
                </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                    Sched
                    </Label>
                    <Input
                    id="name"
                    defaultValue="123"
                    className="col-span-3"
                    />
                </div>

                </div>
                <DialogFooter>
                <Button type="submit">Add changes</Button>
                </DialogFooter>
        </DialogContent>
    )
  }
