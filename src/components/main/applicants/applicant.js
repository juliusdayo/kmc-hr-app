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

export function Applicant({ applicant }) {
    console.log(applicant)
    const [rating, setRating] = useState(3);
    return (
            <Card>
                <CardHeader className="text-center flex justify-center items-center">
                    <Avatar className="w-[200px] h-[200px] mx-auto">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <CardTitle>Juan Dela Cruz</CardTitle>
                    <CardDescription className="text-lg font-bold ">Full Stack Web Developer</CardDescription>
                    <small>Antipolo, Calabarzon Philippines</small>
                    <StarRating value={rating} setValue={setRating} iconProps={{ className: 'fill-yellow-500 stroke-yellow-500' }} />
                </CardHeader>
                <CardContent>
                </CardContent>
            </Card>
    )
}
