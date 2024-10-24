
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


  export function AppSidebar({screens, setNav, currentNav}) {
    return (
      <Sidebar collapsible="icon" className="py-4 p-0 border-none">
        <SidebarContent className="bg-[#1A202C] ">
          <SidebarGroup className="p-0 pt-6">
            <SidebarGroupLabel className="font-Inter text-2xl my-4 font-bold text-[#F99D3A]  justify-center">KMC</SidebarGroupLabel>
            <SidebarGroupContent className="pt-14 ">
              <SidebarMenu className="gap-3 p-0 ">

                {screens?.map((item) => (

                  <SidebarMenuItem key={item.name} onClick={() => setNav(item.screen)} className={` ml-3 pl-3 rounded-l-full py-2 cursor-pointer hover:rounded-none hover:rounded-l-full hover:bg-white ${currentNav === item.screen ? "bg-white text-[#1A202C]" : "text-[#F99D3A]"}`}>
                    <SidebarMenuButton className={` hover:bg-transparent active:bg-transparent font-Inter text-base font-bold tracking-wide`} asChild>
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
