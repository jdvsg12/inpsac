import IconoPsicoterapy from "@/assets/icons/logo-inpsac"
import imgRe from "@/assets/hero/desktop.jpg"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"


const Services = () => {
    return (
        <section className="h-auto md:h-full lg:h-[60svh] bg-backgroundSecondary py-8  lg:px-16 xl:px-28 flex flex-col justify-center">
            <h2 className="text-5xl text-center md:text-left text-secondary font-bold capitalize">services</h2>
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] place-items-center gap-10">
                <Card className="border-0 mt-12 w-10/12 md:w-full">
                    <CardHeader>
                        <IconoPsicoterapy />
                        <CardTitle className="my-2 text-lg md:text-2xl">Psicoterapia</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="text-lg md:text-xl">
                            La psicoterapia es un espacio seguro donde puedes explorar tus emociones, pensamientos y comportamientos. A través de técnicas especializadas, te ayudo a entender y superar desafíos, promoviendo bienestar emocional y crecimiento personal. Juntos, trabajaremos para alcanzar una vida más equilibrada y satisfactoria.,
                        </CardDescription>
                    </CardContent>
                </Card>
                <Image
                    width="410"
                    height="600"
                    className="object-fill rounded-full md:h-[400px] transition-all hover:scale-105 w-8/12 h-[250px] md:w-full"
                    src={imgRe}
                    alt="imagen de relleno" />
            </div>
        </section>
    )
}

export default Services
