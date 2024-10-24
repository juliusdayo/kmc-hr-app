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

export function Applicant() {
    return (
            <Card>
                <CardHeader className="text-center">
                    <Avatar className="w-[200px] h-[200px] mx-auto">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <CardTitle>Juan Dela Cruz</CardTitle>
                    <CardDescription>Full Stack Web Developer</CardDescription>
                    <small>Antipolo, Calabarzon Philippines</small>
                    <StarRating value={3} setValue={3} iconProps={{ className: 'fill-yellow-500 stroke-yellow-500' }} />
                </CardHeader>
                <CardContent>
                </CardContent>
            </Card>
    )
  }
