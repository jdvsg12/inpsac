"use client"

import { Menu, Package2 } from "lucide-react"
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import { Logo } from "@/assets/logos/logo-inpsac"

const links = [
    {
        label: 'Inicio',
        href: '/',
    },
    {
        label: 'Blog',
        href: '/blog',
    },
    {
        label: 'Contacto',
        href: '/contact',
    },
]

export function Nav() {
    const pathname = usePathname()

    return (
        <header className="z-40 sticky top-0 flex justify-between lg:px-16 xl:px-28 h-16 items-center gap-4 border-b border- bg-background px-4">
            <Link href="/" className="w-9/12 md:w-full resize flex items-center gap-2 text-lg font-semibold md:text-base">
                <Logo width={250} height={48} />
                <span className="sr-only">Inicio</span>
            </Link>
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                {links.map(({ label, href }) => (
                    <Link
                        href={href}
                        key={label}
                        className={`text-lg transition-colors hover:text-foreground ${pathname === href ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {label}
                    </Link>
                ))}
            </nav>
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                            <Package2 className="h-6 w-6" />
                            <span className="sr-only">home</span>
                        </Link>
                        {links.map(({ label, href }) => (
                            <Link
                                href={href}
                                key={label}
                                className={`transition-colors hover:text-foreground ${pathname === href ? 'text-foreground' : 'text-muted-foreground'}`}>
                                {label}
                            </Link>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        </header>
    )
}