import imgRe from "@/assets/eventos/evento.png"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import Image from "next/image"
import { ChevronsRight } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"

const EventInfo = [
    {
        title: 'Taller teórico-clínico.',
        date: 'Diciembre 10',
        subtitle: 'El fin de la vida y su cuestionamiento en el análisis',
        description: 'Cuando un paciente consulta con preocupaciones en torno a ideas, impulsos o intentos relacionados con el fin de su vida, la escucha del analista requiere una agudeza particular. Desde el psicoanálisis, si bien no se pretende imponer una dirección específica a la vida del paciente, existe una apuesta por la preservación de la vida en su sentido más ético. ¿Cómo entonces articular la dirección de la cura con la posibilidad de sostener el deseo de vivir en quien acude al analista? A lo largo de dos sesiones, exploraremos esta pregunta y construiremos herramientas teóricas y prácticas que faciliten el abordaje analítico cuando el pensamiento, el impulso o el acto de poner fin a la vida se hace presente en el consultorio.',
    }

]
const Events = () => {
    return (
        <section className="h-full bg-backgroundSecondary py-10 md:py-12 md:px-28 flex flex-col justify-center">
            <h2 className="text-5xl text-center md:text-left text-secondary font-bold capitalize">Formación</h2>
            {EventInfo.map(({ title, date, subtitle, description }, index) => (
                <Card key={index} className="rounded-md mx-auto border-0 mt-12 grid grid-cols-1 lg:grid-cols-[2fr_1fr] w-10/12 xl:w-full">
                    <div>
                        <CardHeader>
                            <CardTitle className="mt-2 flex flex-col md:flex-row justify-between items-center">
                                <span className="text-lg md:text-2xl">{title}</span>
                                <span className="text-base md:text-lg">{date}</span>
                            </CardTitle>
                            <CardDescription className="mb-2 text-base md:text-lg">{subtitle}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col justify-around">
                            <CardDescription className="text-lg md:text-xl">
                                {description}
                            </CardDescription>
                            <Drawer>
                                <DrawerTrigger className="text-lg md:text-2xl text-secondary hover:bg-secondary-foreground flex flex-row justify-center items-center w-fit px-0 mt-5">
                                    Ver más
                                    <ChevronsRight className="h-10 w-10" />
                                </DrawerTrigger>
                                <DrawerContent className="my-2">
                                    <div className="flex flex-col max-lg:h-[40svh] max-md:gap-4 max-lg:overflow-scroll lg:flex-row md:justify-between my-5 lg:w-8/12 mx-auto">
                                        <div className="flex flex-col gap-4 justify-start items-start max-w-xs">
                                            <DrawerTitle>Contenidos</DrawerTitle>
                                            <DrawerDescription className="flex flex-col gap-2">
                                                <DrawerTitle>Sesión 1</DrawerTitle>
                                                <ul className="list-disc">
                                                    <li>El cuestionamiento de la vida como motivo de consulta</li>
                                                    <li>La ideación y planeación suicida</li>
                                                    <li>Pasaje al acto y acting out</li>
                                                </ul>
                                            </DrawerDescription>
                                            <DrawerDescription>
                                                <DrawerTitle>Sesión 2</DrawerTitle>
                                                Articulación de caso clínico
                                            </DrawerDescription>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <DrawerTitle>Fechas</DrawerTitle>
                                            <DrawerDescription className="flex flex-row gap-3">
                                                <div className="flex flex-col gap-2">
                                                    <strong>Diciembre 10 y 12</strong>
                                                    <DrawerTitle>Hora:</DrawerTitle>
                                                    <ul>
                                                        <li>19:00 (Col.)</li>
                                                        <li>19:00 (Ec.)</li>
                                                        <li>18:00 (Mex.)</li>
                                                        <li>21:00 (Arg.)</li>
                                                    </ul>
                                                </div>
                                            </DrawerDescription>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <DrawerTitle>Costos</DrawerTitle>
                                            <DrawerDescription>
                                                <DrawerTitle>Colombia:</DrawerTitle>
                                                COP $100.000
                                            </DrawerDescription>
                                            <DrawerDescription>
                                                <DrawerTitle>México:</DrawerTitle>
                                                MXN $520
                                            </DrawerDescription>
                                            <DrawerDescription>
                                                <DrawerTitle>Ecuador:</DrawerTitle>
                                                USD $25
                                            </DrawerDescription>
                                            <DrawerDescription>
                                                <DrawerTitle>Argentina:</DrawerTitle>
                                                ARS $30.000
                                            </DrawerDescription>
                                            <DrawerDescription>
                                                <DrawerTitle>Otro país:</DrawerTitle>
                                                consultar costo
                                            </DrawerDescription>
                                        </div>
                                        <div className="flex flex-col justify-center gap-4">
                                            <DrawerTitle>Inscríbete</DrawerTitle>
                                            <DrawerDescription className="flex flex-col gap-2">
                                                <Image
                                                    width="200"
                                                    className="aspect-square"
                                                    src={imgRe}
                                                    alt="imagen de relleno" />
                                                <Button>
                                                    <Link target="_blank" href="https://api.whatsapp.com/send/?phone=573142793431&text&app_absent=0&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20curso%20%E2%80%9Cel%20fin%20de%20la%20vida%20y%20su%20cuestionamiento%20en%20el%20an%C3%A1lisis%E2%80%9D">Consultar</Link>
                                                </Button>
                                            </DrawerDescription>
                                        </div>
                                    </div>
                                    <DrawerFooter>
                                        <DrawerClose>
                                            <Button className="capitalize">cerrar</Button>
                                        </DrawerClose>
                                    </DrawerFooter>
                                </DrawerContent>
                            </Drawer>
                        </CardContent>
                    </div>
                    <Image
                        width="200"
                        className="aspect-square object-fill w-11/12 max-w-[350px] rounded-full mx-auto transition-all hover:scale-105 p-7"
                        src={imgRe}
                        alt="imagen de relleno" />
                </Card>
            ))}
        </section>
    )
}

export default Events


