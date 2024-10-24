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
import { Textarea } from "@/components/ui/textarea"

export function AIFinder() {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>AI Talent Finder</DialogTitle>
                <DialogDescription>
                   Type someone you need
                </DialogDescription>
                </DialogHeader>
                <Textarea placeholder={"I want someone who previously worked at Company A with skills of Python and Java..."}/>
                <DialogFooter>
                <Button type="submit">Find</Button>
                </DialogFooter>
        </DialogContent>
    )
  }
