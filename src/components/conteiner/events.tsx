import imgRe from "@/assets/hero/desktop.jpg"
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
import { ChevronsRight } from "lucide-react"


const Events = () => {
    return (
        <section className="h-full lg:h-[80svh] bg-backgroundSecondary py-10 md:py-12 md:px-28 flex flex-col justify-center">
            <h2 className="text-5xl text-center md:text-left text-secondary font-bold capitalize">Eventos</h2>
            <Card className="rounded-md mx-auto border-0 mt-12 grid grid-cols-1 lg:grid-cols-[2fr_1fr] w-10/12 xl:w-full">
                <CardContent className="flex flex-col justify-around">
                    <CardTitle className="my-2 text-lg md:text-2xl">Psicoterapia</CardTitle>
                    <CardDescription className="text-lg md:text-xl">
                        La psicoterapia es un espacio seguro donde puedes explorar tus emociones, pensamientos y comportamientos. A través de técnicas especializadas, te ayudo a entender y superar desafíos, promoviendo bienestar emocional y crecimiento personal. Juntos, trabajaremos para alcanzar una vida más equilibrada y satisfactoria.,
                    </CardDescription>
                    <Button variant='ghost' className="text-lg md:text-2xl text-secondary hover:bg-secondary-foreground flex flex-row justify-center items-center w-fit px-0">
                        <Link href="/">Leer</Link>
                        <ChevronsRight className="h-10 w-10" />
                    </Button>
                </CardContent>
                <Image
                    width="410"
                    height="600"
                    className="object-fill rounded-full h-[400px] mx-auto transition-all hover:scale-105 p-7"
                    src={imgRe}
                    alt="imagen de relleno" />
            </Card>
        </section>
    )
}

export default Events
