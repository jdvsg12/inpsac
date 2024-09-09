import { LogoWhite } from "@/assets/logos/logo-inpsac"
import { Facebook, Instagram, Phone, Twitter } from "lucide-react"
import Link from "next/link"
import { Mail } from "lucide-react"



const Footer = () => {
    return (
        <footer className="h-full bg-backgroundGreen grid grid-cols-1 lg:grid-cols-3 gap-12 place-items-center">
            <div className="flex flex-col justify-around max-md:items-center gap-4">
                <LogoWhite height={48} width={250} className="text-white w-11/12 py-8 box-content" />
                <p className="text-secondary-foreground text-lg flex flex-row items-center gap-3">
                    <span className="bg-white h-8 w-8 rounded-full flex justify-center items-center"><Mail className="fill-secondary w-6 h-6" /></span>   nahehot947@sofrge.com
                </p>
                <p className="text-secondary-foreground text-lg flex flex-row items-center gap-3">
                    <span className="bg-white h-8 w-8 rounded-full flex justify-center items-center"><Phone className="fill-secondary w-6 h-6" /></span>  315 268 9412
                </p>
            </div>
            <div className="flex flex-row gap-8 justify-center items-center">
                <Link href="#" className="text-secondary-foreground hover:text-secondary/70">
                    <span className="bg-white h-10 w-10 rounded-full flex justify-center items-center transition-all hover:scale-95">
                        <Facebook className="fill-secondary w-8 h-8 stroke-none" />
                    </span>
                </Link>
                <Link href="#" className="text-secondary-foreground hover:text-secondary/70">
                    <span className="bg-white h-10 w-10 rounded-full flex justify-center items-center transition-all hover:scale-95">
                        <Instagram className="fill-secondary w-8 h-8" />
                    </span>
                </Link>
                <Link href="#" className="text-secondary-foreground hover:text-secondary/70">
                    <span className="bg-white h-10 w-10 rounded-full flex justify-center items-center transition-all hover:scale-95">
                        <Twitter className="fill-secondary w-8 h-8 stroke-none" />
                    </span>
                </Link>
            </div>
            <ul className="flex flex-row lg:flex-col list-none mt-4 gap-4 [&_li]:md:text-xl">
                <li><Link href="#" className="text-secondary-foreground hover:text-secondary/70">Inicio</Link></li>
                <li><Link href="#" className="text-secondary-foreground hover:text-secondary/70">Blog</Link></li>
                <li><Link href="#" className="text-secondary-foreground hover:text-secondary/70">Contacto</Link></li>
            </ul>
            <p className="text-secondary-foreground text-2xl lg:col-span-3 font-light pb-7">
                &copy; 2024 INPSAC
            </p>
        </footer>
    )
}

export default Footer