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
import { User } from 'lucide-react';
import { useState } from "react";
import { RateApplicantModal } from "../components/rateApplicant";
import { usePathname } from "next/navigation";

const ApplicantProfileDynamic = () => {
    const [rating, setRating] = useState(3);
    const pathname = usePathname()

    return (

        <Dialog>
            <Card className="overflow-hidden">
                <div className="bg-orange-600 h-[200px]">
                </div>
                <div className="grid grid-cols-[300px_1fr] bg-gray-100 gap-4 pb-4">
                    <CardHeader className="bg-white">
                        <Avatar className="-mt-32 w-[200px] h-[200px] mx-auto">
                            <AvatarImage src="https://i.pinimg.com/originals/40/2f/e4/402fe4473f1b29109259566ee004bf96.jpg" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <CardTitle className="pt-3 uppercase mx-auto text-[#4F4F4F]">Jane Doe</CardTitle>
                        <CardDescription className="uppercase mx-auto text-lg font-bold text-[#4F4F4F]">Full Stack Developer</CardDescription>
                        <small className="uppercase font-bold mx-auto">Antipolo, Calabarzon</small>
                        <div className="w-full justify-center flex py-3 gap-4">
                            <p className="text-6xl">4.7</p>
                            <div className="w-full">
                            <div className="w-full justify-center flex">
                                <StarRating value={rating} setValue={setRating} iconProps={{ className: 'fill-yellow-500 stroke-yellow-500' }} />
                            </div>
                            <div  className="w-full items-center flex">
                                <User />
                                <div>
                                    56
                                    total
                                </div>
                            </div>

                        </div>
                        </div>

                        <DialogTrigger asChild>
                            <Button className="text-blue-500 my-3" variant="link">
                                Add a Review
                            </Button>
                        </DialogTrigger>
                        <Button className="text-blue-500 my-3" variant="link">
                            Invite to an interview
                        </Button>
                        {pathname == "/hr" && <Button className="text-blue-500 my-3" variant="link">
                            Endorse to client
                        </Button>}
                        <div className="flex flex-col pt-3 items-center gap-2">
                            <div>
                                <div className="flex justify-between gap-2">
                                    <span>Communication</span>
                                    <StarRating value={5} setValue={setRating} iconProps={{ className: 'fill-yellow-500 stroke-yellow-500' }} />
                                </div>
                                <div className="flex justify-between gap-2">
                                    <span>Coordination</span>
                                    <StarRating value={4} setValue={setRating} iconProps={{ className: 'fill-yellow-500 stroke-yellow-500' }} />
                                </div>
                                <div className="flex justify-between gap-2">
                                    <span>Skills</span>
                                    <StarRating value={3} setValue={setRating} iconProps={{ className: 'fill-yellow-500 stroke-yellow-500' }} />
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
export default ApplicantProfileDynamic;
