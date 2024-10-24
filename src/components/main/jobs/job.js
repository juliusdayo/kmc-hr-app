import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { MonitorSmartphone } from 'lucide-react';
import { MapPin } from 'lucide-react';

export function Job({ posting }) {
    const { title, salaryRange, shiftSchedule } = posting
    return (
        <Card className="my-4 text-[#757575]">
            <CardHeader>
                <CardTitle className="text-xl" > {title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col font-bold  gap-3">
                <div className="flex flex-row w-full gap-8"><Sun /> <p>{shiftSchedule}</p></div>
                <div className="flex flex-row gap-8"><MonitorSmartphone /> <p>{salaryRange}</p></div>
                <div className="flex flex-row gap-8"><MapPin /> <p>Taguig, Philippines</p></div>
                <div className="flex flex-row justify-end "><p>10 hours ago</p></div>

            </CardContent>
            <CardFooter>
                {/* <p>Card Footer</p> */}
            </CardFooter>
        </Card>
    )
}
