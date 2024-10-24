
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"



  export function AppSidebar({screens}) {
    return (
      <Sidebar collapsible="icon" className="py-4">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="font-Inter text-2xl my-4 font-bold text-[#F99D3A]  justify-center ">KMC</SidebarGroupLabel>
            <SidebarGroupContent className="pt-14">
              <SidebarMenu className="gap-6">
                {screens?.map((item) => (
                  <SidebarMenuItem  key={item.name}>
                    <SidebarMenuButton className=" rounded-l-lg font-Inter text-md font-bold tracking-widest " asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.name}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  }
