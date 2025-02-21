import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { usePage, Link } from '@inertiajs/react'

export default function AppNavbar() {
    const { url } = usePage();

    const BreadcrumbItems = [
        {
            name: 'Stats',
            isActive: url === '/apps/dashboard',
            subItems: [
                {
                    name: 'Dashboard',
                    isActive: url === '/apps/dashboard',
                    href: route('apps.dashboard')
                }
            ],
        },
        {
            name: 'Manajemen Pengguna',
            isActive: url.startsWith('/apps/permissions'),
            subItems: [
                {
                    name: 'Hak Akses',
                    isActive: url.startsWith('/apps/permissions'),
                    href: route('apps.permissions.index')
                }
            ],
        }
    ];
    return (
        <div className="flex items-center gap-2 px-4 w-full">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
                <BreadcrumbList>
                    {BreadcrumbItems.map((item, index) => (
                        item.isActive && item.subItems.find(subItem => subItem.isActive) && (
                            <React.Fragment key={index}>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <div>{item.name}</div>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator/>
                                {item.subItems
                                    .filter(subItem => subItem.isActive)
                                    .map((subItem, subIndex) => (
                                        <BreadcrumbItem key={subIndex}>
                                            <BreadcrumbLink asChild>
                                                <div>{subItem.name}</div>
                                            </BreadcrumbLink>
                                        </BreadcrumbItem>
                                    ))
                                }
                            </React.Fragment>
                        )
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}
