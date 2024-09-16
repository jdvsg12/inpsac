import IconoPsicoterapy from "@/assets/icons/iconoPsicoterapy"
import imgPsicoterapia from "@/assets/services/psicoterapia.png"
import imgSupervision from "@/assets/services/supervision.jpg"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

const servicesInfo = [
    {
        title: "Psicoterapia Online",
        description: "Tomar un camino distinto al que te ha llevado a la situación actual es posible. Desde el Psicoanálisis, se ofrece un espacio de escucha donde puedas hablar, acompañándote en el proceso de atravesar y transformar aquello que te causa sufrimiento.",
        imgSrc: imgPsicoterapia,

    },
    {
        title: "Supervisión clínica - profesionales",
        description: "Como parte del proceso de supervisión clínica para profesionales, se abordan los casos que generan angustia en el psicoanalista. También se facilita la reflexión sobre su función dentro del dispositivo analítico. Este enfoque contribuye a una orientación en la dirección de la cura, fortaleciendo la práctica profesional.",
        imgSrc: imgSupervision,

    }
]


const Services = () => {
    return (
        <section className="h-auto md:h-full bg-backgroundSecondary py-8  lg:px-16 xl:px-28 flex flex-col justify-center gap-8">
            <h2 className="text-5xl text-center md:text-left text-secondary font-bold capitalize">servicios</h2>
            {servicesInfo.map(({ title, description, imgSrc }, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] place-items-center gap-10">
                    <Card className="border-0 w-10/12 md:w-full">
                        <CardHeader>
                            <IconoPsicoterapy />
                            <CardTitle className="my-2 text-lg md:text-2xl">{title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-lg md:text-xl">
                                {description}
                            </CardDescription>
                        </CardContent>
                    </Card>
                    <Image
                        className="aspect-square object-fill w-11/12 max-w-[350px] rounded-full mx-auto transition-all hover:scale-105 p-7"
                        src={imgSrc}
                        alt="imagen de relleno" />
                </div>
            ))}
        </section>
    )
}

export default Services
