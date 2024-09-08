"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import person from "@/assets/persona.png"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"



const Hero = () => {
    return (
        <section className="w-full">
            <Carousel className="overflow-hidde bg-gradient-to-b from-white via-white via-30% to-slate-300"
                plugins={[
                    Autoplay({
                        delay: 5000,
                    }),
                ]}
                opts={{
                    loop: true,
                }}>
                <CarouselContent>
                    <CarouselItem>
                        <div className="md:h-full lg:h-[60svh] xl:h-[90svh] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 place-items-end">
                            <div className="flex flex-col justify-center py-16 md:py-0 md:h-full mt-10 md:mt-0 px-11 md:px-16 lg:px-16 xl:px-28 capitalize text-secondary gap-6">
                                <h1 className="font-bold tracking-tighter text-4xl md:text-2xl lg:text-4xl xl:text-6xl text-pretty">
                                    Tu bienestar mental, nuestra prioridad.
                                </h1>
                                <p className="text-gray-500 md:text-base lg:text-xl">
                                    Descubre herramientas y apoyo para una mente sana.
                                </p>
                                <Button className="text-lg md:text-2xl py-4 px-6 w-fit transition-all hover:scale-105">
                                    Solicita contacto
                                </Button>
                            </div>
                            <Image
                                src={person}
                                width="800"
                                height="600"
                                alt="Hero Image"
                                className="mr-0 ml-auto"
                            />
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <div />
            </Carousel>
        </section >)
}

export default Hero