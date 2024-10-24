import {
    Card,
    CardContent,
  } from "@/components/ui/card"
  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

  export function Header({children}) {
    return (
        <Card className="w-full">
            <CardContent className="flex items-center justify-between">
                {children}
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </CardContent>
        </Card>
    )
  }
