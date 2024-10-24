import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export function Job() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-base"> Developer</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Night Shift</p>
                <p>Onsite</p>
                <p>Taguig, Philippines</p>
            </CardContent>
            <CardFooter>
                {/* <p>Card Footer</p> */}
            </CardFooter>
        </Card>
    )
  }
