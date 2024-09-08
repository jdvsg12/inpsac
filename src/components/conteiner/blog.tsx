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


const Blog = () => {
    return (
        <section className="md:h-svh py-12 md:py-12  lg:px-16 xl:px-28 flex flex-col justify-center">
            <h2 className="text-5xl text-center md:text-left text-secondary font-bold capitalize">Blog</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center md:gap-10">
                <Card className="w-11/12 md:w-full mt-12 border-4 flex flex-col justify-between xl:py-14 h-[500px] transition-all hover:scale-105">
                    <CardHeader>
                        <CardTitle className="my-2 text-xl md:text-3xl text-center capitalize">terapia grupal</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="text-lg md:text-xl text-center line-clamp-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsa ex libero! Dolorem excepturi voluptatibus animi saepe, quos odio consequatur unde corrupti incidunt reiciendis aliquam quas cumque quisquam cupiditate.
                        </CardDescription>
                    </CardContent>
                    <CardFooter>
                        <Button variant='ghost' className="text-lg md:text-2xl hover:bg-secondary-foreground text-secondary w-full flex flex-row justify-center items-center">
                            <Link href="/">Leer</Link>
                            <ChevronsRight className="h-10 w-10" />
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="max-lg:hidden w-11/12 md:w-full mt-12 border-4 flex flex-col justify-between py-14 h-[500px] bg-slate-100/30 transition-all hover:scale-105">
                    <CardHeader>
                        <CardTitle className="my-2 text-xl md:text-3xl text-center capitalize text-secondary-foreground">terapia grupal</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="text-lg md:text-xl text-center text-balance text-secondary-foreground">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsa ex libero! Dolorem excepturi voluptatibus animi saepe, quos odio consequatur unde corrupti incidunt reiciendis aliquam quas cumque quisquam cupiditate.
                        </CardDescription>
                    </CardContent>
                    <CardFooter>
                        <Button variant='ghost' className="text-lg md:text-2xl hover:bg-secondary-foreground text-secondary-foreground w-full flex flex-row justify-center items-center">
                            <Link href="/">Leer</Link>
                            <ChevronsRight className="h-10 w-10" />
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="max-lg:hidden w-11/12 md:w-full mt-12 border-4 flex flex-col justify-between py-14 h-[500px] bg-slate-100/30 transition-all hover:scale-105">
                    <CardHeader>
                        <CardTitle className="my-2 text-xl md:text-3xl text-center capitalize text-secondary-foreground">terapia grupal</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="text-lg md:text-xl text-center text-balance text-secondary-foreground">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsa ex libero! Dolorem excepturi voluptatibus animi saepe, quos odio consequatur unde corrupti incidunt reiciendis aliquam quas cumque quisquam cupiditate.
                        </CardDescription>
                    </CardContent>
                    <CardFooter>
                        <Button variant='ghost' className="text-lg md:text-2xl hover:bg-secondary-foreground text-secondary-foreground w-full flex flex-row justify-center items-center">
                            <Link href="/">Leer</Link>
                            <ChevronsRight className="h-10 w-10" />
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
}

export default Blog
