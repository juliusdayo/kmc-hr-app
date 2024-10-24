"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";
import {
    Dialog,
    DialogTrigger,
 } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { StarRating } from "@/components/ui/star-rating"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RateApplicantModal } from "../../components/rateApplicant";

const ApplicantProfile = () => {
    return (
        <Dialog>
            <Card className="overflow-hidden">
                <div className="bg-orange-600 h-[200px]">
                </div>
                <div className="grid grid-cols-[300px_1fr] bg-gray-100 gap-4 pb-4">
                    <CardHeader className="bg-white">
                        <Avatar className="-mt-32 w-[200px] h-[200px] mx-auto">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <CardTitle className="pt-3">Juan Dela Cruz</CardTitle>
                        <CardDescription>Full Stack Developer</CardDescription>
                        <small>Antipolo, Calabarzon</small>
                        <StarRating value={3} setValue={3} iconProps={{ className: 'fill-yellow-500 stroke-yellow-500' }} />
                        <DialogTrigger asChild>
                                <Button>
                                    Add a Review
                                </Button>
                        </DialogTrigger>
                        <div className="bg-gray-100 p-4 flex items-center gap-4">
                            <p className="text-5xl">4.7</p>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span>Skills</span>
                                    <StarRating value={3} setValue={3} iconProps={{ className: 'fill-yellow-500 stroke-yellow-500' }} />
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>Skills</span>
                                    <StarRating value={3} setValue={3} iconProps={{ className: 'fill-yellow-500 stroke-yellow-500' }} />
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>Skills</span>
                                    <StarRating value={3} setValue={3} iconProps={{ className: 'fill-yellow-500 stroke-yellow-500' }} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5 className="text-xl font-bold">Skills</h5>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="outline">Badge</Badge>
                                <Badge variant="outline">Badge</Badge>
                                <Badge variant="outline">Badge</Badge>
                                <Badge variant="outline">Badge</Badge>
                                <Badge variant="outline">Badge</Badge>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="bg-white p-6 space-y-3">
                        <div>
                            <h5 className="text-xl font-bold">About</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed totam, facilis officiis, a eos aliquid nam molestiae rem numquam atque sequi laudantium similique eum fugiat maxime vero delectus. Quisquam mollitia, iste labore quas quod autem eaque, cumque dolor est eum delectus! Similique rem repellendus cupiditate. Perferendis doloribus iusto laudantium quibusdam.</p>
                        </div>
                        <Separator/>
                        <div className="space-y-4">
                            <h5 className="text-xl font-bold">Experiences</h5>
                            <div>
                                <h6>Full Stack Developer</h6>
                                <small>Company Name</small>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas consequatur iste dolores aut ab ducimus mollitia, dolorum quisquam amet nostrum aliquid sit explicabo. Esse exercitationem sequi nihil velit consectetur possimus suscipit? Quibusdam voluptates beatae voluptatibus numquam! Reprehenderit molestiae atque ipsam eveniet, voluptate sapiente voluptates modi reiciendis sunt necessitatibus quas quasi?</p>
                            </div>
                            <Separator/>
                            <div>
                                <h6>Full Stack Developer</h6>
                                <small>Company Name</small>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas consequatur iste dolores aut ab ducimus mollitia, dolorum quisquam amet nostrum aliquid sit explicabo. Esse exercitationem sequi nihil velit consectetur possimus suscipit? Quibusdam voluptates beatae voluptatibus numquam! Reprehenderit molestiae atque ipsam eveniet, voluptate sapiente voluptates modi reiciendis sunt necessitatibus quas quasi?</p>
                            </div>
                        </div>
                    </CardContent>
                </div>
            </Card>
            <RateApplicantModal/>
        </Dialog>
    );
}
export default ApplicantProfile;
