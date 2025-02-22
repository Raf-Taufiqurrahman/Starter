import { Users2, UserCog, UserRoundCheck } from "lucide-react";
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "@inertiajs/react";
import hasAnyPermission from '@/utils/has-permissions'

export function SideUserManagement({ url, setOpenMobile } : { url: string, setOpenMobile: any }) {
    return (
        <SidebarGroup>
            {(hasAnyPermission(['permissions-data']) || hasAnyPermission(['users-data']) || hasAnyPermission(['roles-data'])) && (
                <SidebarGroupLabel>Manajemen Pengguna</SidebarGroupLabel>
            )}
            <SidebarGroupContent>
                <SidebarMenu>
                    {hasAnyPermission(['permissions-data']) &&
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild tooltip={"Hak Akses"} isActive={url.startsWith('/apps/permissions') && true}>
                                <Link href={route('apps.permissions.index')} onClick={() => setOpenMobile(false)}>
                                    <UserRoundCheck/>
                                    <span>Hak Akses</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    }
                    {hasAnyPermission(['roles-data']) &&
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild tooltip={"Akses Group"} isActive={url.startsWith('/apps/roles') && true}>
                                <Link href={route('apps.roles.index')} onClick={() => setOpenMobile(false)}>
                                    <UserCog/>
                                    <span>Akses Group</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    }
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}
