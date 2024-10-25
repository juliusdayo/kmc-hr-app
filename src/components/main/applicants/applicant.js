"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { StarRating } from "@/components/ui/star-rating"
import { useState } from "react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

export function Applicant({ applicant }) {

    const [rating, setRating] = useState(3);

    return (
        <HoverCard>
            <HoverCardTrigger>
                <Card className="cursor-pointer">
                    <CardHeader className="text-center flex justify-center items-center">
                        <Avatar className="w-[100px] h-[100px] mx-auto">
                            <AvatarImage src="https://i.pinimg.com/originals/40/2f/e4/402fe4473f1b29109259566ee004bf96.jpg" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <CardTitle className="line-clamp-1">{applicant?.name}</CardTitle>
                        <CardDescription className="line-clamp-1">{applicant?.jobTitle}</CardDescription>
                        <small className="line-clamp-1">Antipolo, Calabarzon Philippines</small>
                        <StarRating value={rating} setValue={setRating} iconProps={{ className: 'fill-yellow-500 stroke-yellow-500' }} />
                    </CardHeader>
                    <CardContent>
                    </CardContent>
                </Card>
            </HoverCardTrigger>
            <HoverCardContent side="right" className="w-[500px] bg-[#1A202C] text-white border-none">
                <CardTitle >{applicant?.name}</CardTitle>
                <CardDescription>{applicant?.jobTitle}</CardDescription>
                <small >Antipolo, Calabarzon Philippines</small>
                <p className="pt-4 pl-2">{applicant?.reason}</p>
            </HoverCardContent>
        </HoverCard>
    )
}
