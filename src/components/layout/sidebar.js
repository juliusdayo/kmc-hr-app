
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


  export function AppSidebar({screens, setNav}) {
    return (
      <Sidebar collapsible="icon" className="py-4 p-0 ">
        <SidebarContent className="bg-[#1A202C] ">
          <SidebarGroup className="p-0">
            <SidebarGroupLabel className="font-Inter text-2xl my-4 font-bold text-[#F99D3A]  justify-center">KMC</SidebarGroupLabel>
            <SidebarGroupContent className="pt-14 ">
              <SidebarMenu className="gap-6 p-0 ">

                
                <SidebarMenuItem className="ml-3 pl-3 bg-white rounded-l-full py-1 ">
                    <SidebarMenuButton className=" rounded-l-lg font-Inter text-base font-bold tracking-wide text-[#1A202C]" asChild>
                      <div>
                         X
                        <span>ACTIVE</span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                {screens?.map((item) => (

                  <SidebarMenuItem key={item.name} onClick={() => setNav(item.screen)} className="text-[#F99D3A] ml-3 pl-3 rounded-l-full py-1 hover:rounded-none hover:rounded-l-full hover:bg-white ">
                    <SidebarMenuButton className="  font-Inter text-base   font-bold tracking-wide " asChild>
                      <div>
                        <item.icon />
                        <span>{item.name}</span>
                      </div>
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
