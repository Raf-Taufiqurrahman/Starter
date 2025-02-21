import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar
} from "@/components/ui/sidebar"
import { SideProfile } from "./side-menu/side-profile"
import Logo from '@/assets/logo.svg'
import { SideStat } from "./side-menu/side-stat"
import { usePage } from "@inertiajs/react"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

    const { url } = usePage();
    const { setOpenMobile } = useSidebar();

  return (
    <Sidebar collapsible="icon" {...props}>
       <SidebarHeader className="border-b group-data-[collapsible=icon]:h-14 h-14 flex flex-row items-center justify-center dark:bg-gray-950 bg-white">
            <img src={Logo} className="size-8 group-data-[collapsible=icon]:h-full"/>
            <h1 className="text-xl group-data-[collapsible=icon]:hidden font-bold">
               PT.MAM
            </h1>
        </SidebarHeader>
        <SidebarContent className="dark:bg-gray-950 scrollbar-hide bg-white">
            <SideStat url={url} setOpenMobile={setOpenMobile}/>
        </SidebarContent>
        <SidebarFooter className="border-t bg-white dark:bg-gray-950">
            <SideProfile/>
        </SidebarFooter>
        <SidebarRail />
    </Sidebar>
  )
}
