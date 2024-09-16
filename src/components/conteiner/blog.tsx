import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronsRight } from "lucide-react"

const blogCards = [
    {
        title: '¿Qué hago doctor?',
        description: 'Cualquier camino es imposible cuando se espera que sea otro el que camine. Esta es una confesión, la hago al inicio de este blog ahora más estructurado que hace nueve años. Era 2015 cuando decidí iniciar alguna formación en Psicoanálisis en Buenos Aires (Argentina), para ese entonces ya era profesional en Psicología y tenía 23 años. Inocentes 23 años. ¿Qué pretendía? Ser psicoanalista ¿Para qué? Ser psicoanalista ¿En qué institución? Ser psicoanalista ¿Tendría el presupuesto necesario? Ser psicoanalista. Por lo menos puedo decir que deseo había, pero a qué se articulaba, Ser… Psicoanalista, la más grosera pero inocente incompatibilidad.',
        button: 'leer',
        link: '/contact',
    },
    {
        title: '',
        description: '',
        link: '/',
    },
    {
        title: '',
        description: '',
        link: '/',
    }
]

const Blog = () => {
    return (
        <section className="bg-white h-full py-12 md:py-12  lg:px-16 xl:px-28 flex flex-col justify-center">
            <h2 className="text-5xl text-center md:text-left text-secondary font-bold capitalize">Blog</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center md:gap-10">
                {blogCards.map(({ title, description, button, link }, index) => (
                    <Card key={index} className={`${button ? "flex" : "max-md:hidden"} w-11/12 md:w-full mt-12 border-4 flex-col justify-between xl:py-14 h-[500px] transition-all hover:scale-105`}>
                        <CardHeader>
                            <CardTitle className="my-2 text-xl md:text-3xl text-center">{title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-lg md:text-xl text-center line-clamp-6">
                                {description}
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Button variant='ghost' className="text-lg md:text-2xl hover:bg-secondary-foreground text-secondary w-full flex flex-row justify-center items-center">
                                <Link href={link}>{button}</Link>
                                {button ? <ChevronsRight className="h-10 w-10" /> : null}
                            </Button>
                        </CardFooter>
                    </Card>
                ))}

            </div>
        </section>
    )
}

export default Blog
