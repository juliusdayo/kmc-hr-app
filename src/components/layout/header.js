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
        <Card className="p-3 bg-[#1A202C]">
            <CardContent className="px-2 py-0 flex justify-between items-center">
                {children}

                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </CardContent>
        </Card>
    )
  }
