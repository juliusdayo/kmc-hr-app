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

export function AddJobModal() {
    return (
        <DialogContent>
            <Tabs defaultValue="manual" className=" pt-2">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="manual">Manual</TabsTrigger>
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
                        <div className="space-y-2">
                            <Label htmlFor="username" className="text-right">
                            Sections needed:
                            </Label>
                            <Input
                                id="username"
                                placeholder="eg: Job Description, Responsibilities"
                            />
                        </div>
                        </div>
                    <DialogFooter>
                        <Button type="submit">Generate</Button>
                    </DialogFooter>
                </TabsContent>
            </Tabs>
        </DialogContent>
    )
  }
