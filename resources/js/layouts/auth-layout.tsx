import { ThemeProvider } from '@/components/theme-provider'
import Placholder from '@/assets/placeholder.svg'
import Logo from '@/assets/logo.svg'
import React from 'react'

export default function AuthLayout({children} : {children: React.ReactNode}) {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                 <div className="grid min-h-svh lg:grid-cols-2">
                <div className="flex flex-col gap-4 p-6 md:p-10">
                    <div className="flex justify-center gap-2 md:justify-start">
                    <a href="#" className="flex items-center gap-2 font-medium">
                        <div className="flex h-14 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <img
                                src={Logo}
                                alt="Image"
                                className="h-full w-full object-cover bg-[#F5F8FC] dark:bg-gray-800"
                            />
                        </div>
                    </a>
                    </div>
                    <div className="flex flex-1 items-center justify-center">
                        <div className="w-full max-w-xs">
                            {children}
                        </div>
                    </div>
                </div>
                <div className="relative hidden bg-muted lg:block">
                    <img
                        src={Placholder}
                        alt="Image"
                        className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                    />
                </div>
            </div>
        </ThemeProvider>
    )
}
