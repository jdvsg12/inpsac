import { LogoWhite } from "@/assets/logos/logo-inpsac"
import { Instagram, Phone } from "lucide-react"
import Link from "next/link"
import { Mail } from "lucide-react"

const links = [
    {
        label: 'Inicio',
        href: '/',
    },
    {
        label: 'Blog',
        href: '/contact',
    },
    {
        label: 'Contato',
        href: '/contact',
    },
]



const Footer = () => {
    return (
        <footer className="h-full bg-backgroundGreen lg:px-16 xl:px-28">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center py-4">
                <div className="flex flex-col justify-around max-md:items-center gap-2">
                    <LogoWhite height={48} width={250} className="text-white w-fit py-2 box-content" />
                    <p className="text-secondary-foreground text-base flex flex-row items-center gap-3">
                        <span className="bg-white h-6 w-6 rounded-full flex justify-center items-center"><Mail className="fill-secondary w-4 h-4" /></span>   formacion@psicologiaycultura.com
                    </p>
                    <p className="text-secondary-foreground text-base flex flex-row items-center gap-3">
                        <span className="bg-white h-6 w-6 rounded-full flex justify-center items-center"><Phone className="fill-secondary w-4 h-4" /></span>  +57 3142793431
                    </p>
                </div>
                <ul className="flex flex-row list-none mt-4 gap-8 [&_li]:md:text-xl mr-0 ml-auto">
                    {links.map(({ label, href }) => (
                        <li key={label}><Link href={href} className="text-secondary-foreground hover:text-secondary/70">{label}</Link></li>
                    ))}
                </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center border-white border-t py-2">
                <p className="text-secondary-foreground text-2xl font-light py-4">
                    &copy; 2024 Psicología y Cultura
                </p>
                <div className="flex flex-row gap-8 justify-center items-center mr-0 ml-auto">
                    <Link href="https://www.instagram.com/psico_y_cultura/" className="text-secondary-foreground hover:text-secondary/70">
                        <span className="bg-white h-10 w-10 rounded-full flex justify-center items-center transition-all hover:scale-105">
                            <Instagram className="fill-secondary w-8 h-8" />
                        </span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer