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
        date: '6 Noviembre',
        subtitle: 'El fin de la vida y su cuestionamiento en el análisis',
        description: ' En momentos de profundo malestar, los pacientes llegan a cuestionar el sentido de la vida al no encontrar una vía que les ofrezca alivio. ¿Se trata de un deseo inconsciente relacionado con la idea de poner fin a la vida? ¿Es un llamado al analista para que intervenga? ¿Debe el psicoanalista seguir un protocolo específico ante estas situaciones? A lo largo de dos encuentros exploraremos estas y otras preguntas, combinando teoría y clínica, para reflexionar sobre el papel del analista en estos momentos cruciales del proceso analítico.',
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
                                                <DrawerTitle>Encuentro 1</DrawerTitle>
                                                El sujeto frente al fin de la vida, exploración desde el psicoanálisis lacaniano
                                            </DrawerDescription>
                                            <DrawerDescription>
                                                <DrawerTitle>Encuentro 2</DrawerTitle>
                                                Articulación de caso clínico
                                            </DrawerDescription>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <DrawerTitle>Fechas</DrawerTitle>
                                            <DrawerDescription className="flex flex-row gap-3">
                                                <div className="flex flex-col gap-2">
                                                    <strong>noviembre 6 y 20</strong>
                                                    <DrawerTitle>Hora:</DrawerTitle>
                                                    <ul>
                                                        <li>20:30 (Col.)</li>
                                                        <li>20:30 (Ec.)</li>
                                                        <li>19:30 (Mex.)</li>
                                                        <li>22:30 (Arg.)</li>
                                                    </ul>
                                                </div>
                                            </DrawerDescription>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <DrawerTitle>Costos</DrawerTitle>
                                            <DrawerDescription>
                                                <DrawerTitle>Colombia:</DrawerTitle>
                                                COP50000
                                            </DrawerDescription>
                                            <DrawerDescription>
                                                <DrawerTitle>México:</DrawerTitle>
                                                MXN300
                                            </DrawerDescription>
                                            <DrawerDescription>
                                                <DrawerTitle>Ecuador:</DrawerTitle>
                                                USD15
                                            </DrawerDescription>
                                            <DrawerDescription>
                                                <DrawerTitle>Argentina:</DrawerTitle>
                                                ARS21000
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


