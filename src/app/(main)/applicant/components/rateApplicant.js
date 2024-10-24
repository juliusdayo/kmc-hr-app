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

export function RateApplicantModal() {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle></DialogTitle>
                {/* dont remove title tag */}
            </DialogHeader>
            <div className="text-center py-4 space-y-4">
                <Avatar className="w-[200px] h-[200px] mx-auto">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
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

                <div>
                    <h5>How would you rate communication between Juan?</h5>
                    <StarRating value={3} setValue={3} iconProps={{ className: 'fill-yellow-500 stroke-yellow-500' }} />
                </div>
            </div>
            <DialogFooter>
                <DialogClose asChild>
                    <Button type="submit">Skip</Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    )
  }
