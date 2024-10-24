import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Badge } from "@/components/ui/badge"

const Index = () => {
    return (
        <Card className="w-[550px]">
        <CardHeader>
            <CardTitle>Onboarding</CardTitle>
            <CardDescription>Upload your resume in pdf file</CardDescription>
        </CardHeader>
        <CardContent>
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="pdf">PDF Format:</Label>
            <Input id="pdf" type="file" />
        </div>
        <div className="w-full space-y-4">
            <h5>Pick roles you wanted to be in:</h5>
            <ToggleGroup type="multiple" className="flex flex-wrap">
                <ToggleGroupItem value="a" className="rounded-full border">
                    <Badge variant="outline" className="border-none">Junior Software Developer</Badge>
                </ToggleGroupItem>
                <ToggleGroupItem value="b" className="rounded-full border">
                    <Badge variant="outline" className="border-none">Senior Software Developer</Badge>
                </ToggleGroupItem>
                <ToggleGroupItem value="c" className="rounded-full border">
                    <Badge variant="outline" className="border-none">Software Developer</Badge>
                </ToggleGroupItem>
                <ToggleGroupItem value="d" className="rounded-full border">
                    <Badge variant="outline" className="border-none">System Analyst</Badge>
                </ToggleGroupItem>
                <ToggleGroupItem value="e" className="rounded-full border">
                    <Badge variant="outline" className="border-none">UI UX</Badge>
                </ToggleGroupItem>
            </ToggleGroup>
        </div>
        </CardContent>
        <CardFooter className="flex justify-between">
            <Button>Lets go</Button>
        </CardFooter>
        </Card>
    );
}
export default Index;
