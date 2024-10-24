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
import { StarRating } from "@/components/ui/star-rating"
import { Separator } from "@/components/ui/separator"

export function ApplicationDetails() {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Pending Application</DialogTitle>
            </DialogHeader>
            <div className="text-center py-4 space-y-4">
                <div>
                    <h2>JUAN DELA CRUZ</h2>
                    <p>Full Stack Developer</p>
                    <small>Antipolo, Calabarzon Philippines</small>
                </div>

                <Separator/>

                <div>
                    <h5>Help Juan Improve!</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quae ipsum corporis officiis ratione possimus enim quaerat neque obcaecati exercitationem.</p>
                </div>

                <Separator/>

                <p>1/4</p>
            </div>
            <DialogFooter>
                <DialogClose asChild>
                    <Button type="submit">Close</Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    )
  }
