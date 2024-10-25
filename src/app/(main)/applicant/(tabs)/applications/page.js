"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Dialog,
    DialogTrigger,
 } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ApplicationDetails } from "../../components/applicationDetails";
import { Transcriptor } from "../../components/transcriptor";

const Applications = () => {
    return (
        <Dialog>
            <Card className="overflow-hidden">
                <CardHeader className="bg-white flex-row justify-between">
                    <CardTitle className="pt-3">Application Statuses</CardTitle>
                    <Dialog>
                        <DialogTrigger className="text-blue-500">
                        View Interview History
                        </DialogTrigger>
                        <Transcriptor/>
                    </Dialog>
                </CardHeader>
                <CardContent className="bg-white p-6 space-y-3">
                    <div className="space-y-4">
                        <Card className="flex justify-between items-center">
                                <CardHeader className="bg-white">
                                    <CardTitle className="pt-3">Fullstack Developer Role</CardTitle>
                                    <CardDescription>For Interview</CardDescription>
                                </CardHeader>
                            <CardContent className="bg-white p-6 space-y-3">
                                <DialogTrigger asChild>
                                    <Button>
                                        View Details
                                    </Button>
                                </DialogTrigger>
                            </CardContent>
                        </Card>
                        <Card className="flex justify-between items-center">
                            <CardHeader className="bg-white">
                                <CardTitle className="pt-3">Software Engineer Role</CardTitle>
                                <CardDescription>For Interview</CardDescription>
                            </CardHeader>
                            <CardContent className="bg-white p-6 space-y-3">
                                <DialogTrigger asChild>
                                    <Button>
                                        View Details
                                    </Button>
                                </DialogTrigger>
                            </CardContent>
                        </Card>
                        <Card className="flex justify-between items-center">
                            <CardHeader className="bg-white">
                                <CardTitle className="pt-3">System Analyst Role</CardTitle>
                                <CardDescription>For Interview</CardDescription>
                            </CardHeader>
                            <CardContent className="bg-white p-6 space-y-3">
                                <DialogTrigger asChild>
                                    <Button>
                                        View Details
                                    </Button>
                                </DialogTrigger>
                            </CardContent>
                        </Card>
                    </div>
                </CardContent>
            </Card>
            <ApplicationDetails/>
        </Dialog>
    );
}
export default Applications;
