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
        <div className="w-full h-lvh bg-[#1A202C] flex justify-center items-center">
            <Card className="w-[750px] p-10">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-[#F99D3A]">Welcome!</CardTitle>
                    <CardDescription className="text-lg font-semibold">Upload your resume in pdf file to get started</CardDescription>
                </CardHeader>
                <CardContent>
                <div className="grid w-full text-lg font-semibold items-center gap-1.5">
                    <Label htmlFor="pdf">PDF Format:</Label>
                    <br></br>
                    <Input className="hover:cursor-pointer hover:bg-[#dddddd]" id="pdf" type="file" />
                </div>
                <div className="w-full space-y-4">
                    <br></br>
                    <h5>Tell us about the job you'd like to find. This information will help us better match you to prospective jobs.</h5>
                    <br></br>
                    <ToggleGroup type="multiple" className="flex flex-wrap justify-start">
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
                <CardFooter className="flex justify-center ">
                    <a href="/applicant" >
                    <Button className="bg-[#F99D3A] rounded-full">LETS GO</Button></a>
                </CardFooter>
            </Card>
        </div>

    );
}
export default Index;
