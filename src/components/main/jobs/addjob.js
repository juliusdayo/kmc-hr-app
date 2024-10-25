"use client";
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import { Textarea } from "@/components/ui/textarea"
import { useEffect, useState } from "react"

export function AddJobModal() {


    const ListItem = ({ item, onRemove }) => (
        <div className="flex justify-between items-center p-2 border-b">
            <span>{item}</span>
            <button onClick={() => onRemove(item)} className="text-red-500">x</button>
        </div>
    );
    const [sections, setSections] = useState([]);

    const handleRemove = (item) => {
        setSections(sections.filter(section => section !== item));
    };
    const generateJob = async (description) => {
        const response = await fetch('/api/job/categorize',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: 'I want someone who can make me a website for my clothing store' })
            }
        )
        const { data } = await response.json()
        const parsed = JSON.parse(data)
        const mapped = parsed.map((item) => {
            return item.jobTitle
        })
        setSections(mapped)
    }




    return (
        <DialogContent>
            <Tabs defaultValue="manual" className=" pt-2">
                <TabsList className="grid w-full grid-cols-2 bg-[#F99D3A]">
                    <TabsTrigger value="manual" >Manual</TabsTrigger>
                    <TabsTrigger value="automated">AI</TabsTrigger>
                </TabsList>
                <TabsContent value="manual">
                    <DialogHeader className="pt-2">
                        <DialogTitle>Job Details</DialogTitle>
                        <DialogDescription>
                            Creating job post has never been easy.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-right">
                                Role of the position:
                            </Label>
                            <Input
                                id="name"
                                placeholder="eg: Software Developer"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="username" className="text-right">
                                Description:
                            </Label>
                            <Textarea placeholder="Type your message here." />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="username" className="text-right">
                                Responsibilities:
                            </Label>
                            <Textarea placeholder="Type your message here." />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="username" className="text-right">
                                Qualifications:
                            </Label>
                            <Textarea placeholder="Type your message here." />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="username" className="text-right">
                                Benefits:
                            </Label>
                            <Textarea placeholder="Type your message here." />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Add Job</Button>
                    </DialogFooter>
                </TabsContent>
                <TabsContent value="automated">
                    <DialogHeader className="pt-2">
                        <DialogTitle>AI Job Posting</DialogTitle>
                        <DialogDescription>
                            Creating job post has never been easy.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-right">
                                Role of the position:
                            </Label>
                            <Input
                                id="name"
                                placeholder="eg: Software Developer"
                            />
                        </div>
                        <div className="space-y-2">asdasd
                            <Label htmlFor="username" className="text-right">
                                Sections needed:
                            </Label>
                            <Input
                                id="username"
                                placeholder="eg: Job Description, Responsibilities"
                            />
                            {Array.isArray(sections) && sections.map((section, index) => (
                                <ListItem key={index} item={section} onRemove={handleRemove} />
                            ))}

                        </div>
                    </div>

                    <DialogFooter>
                        <Button type="submit" onClick={generateJob}>Generate</Button>
                    </DialogFooter>
                </TabsContent>
            </Tabs>
        </DialogContent>
    )
}
