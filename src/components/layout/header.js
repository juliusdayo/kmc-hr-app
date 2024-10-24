import {
    Card,
    CardContent,
  } from "@/components/ui/card"
  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

  export function Header({children}) {
    return (
        <Card className="p-3 bg-[#1A202C]">
            <CardContent className="px-2 py-0 flex justify-between items-center">
                {children}
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      <AvatarImage src="https://avatars.githubusercontent.com/u/103874277?v=4?s=400" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="right">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <a href="/hr" className="w-full">Hiring Manager</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a href="/client" className="w-full">Client</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a href="/applicant" className="w-full">Applicant</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a href="/login" className="w-full">Log out</a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
            </CardContent>
        </Card>
    )
  }
