
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
      <Sidebar collapsible="icon" className="py-4">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="text-2xl my-4">KMC</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {screens?.map((item) => (
                  <SidebarMenuItem key={item.name} onClick={() => setNav(item.screen)}>
                    <SidebarMenuButton asChild>
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
