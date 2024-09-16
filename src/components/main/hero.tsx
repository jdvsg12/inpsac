"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import banner from "@/assets/hero/banner.png"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import Link from "next/link"



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
                        <div className="h-full md:h-[400px] lg:h-[500px] xl:h-[600px] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 place-items-center px-11 md:px-16 lg:px-16 xl:px-28 ">
                            <div className="flex flex-col justify-center py-16 md:py-0 md:h-full mt-10 md:mt-0 capitalize text-secondary gap-6">
                                <h1 className="font-bold tracking-tighter text-4xl md:text-2xl lg:text-4xl xl:text-6xl text-pretty">
                                    Habla,<br />será maravilloso
                                </h1>
                                <p className="text-gray-500 md:text-base lg:text-x text-right">
                                    Jacques Lacan (1901 - 1981)                                </p>
                                <Button className="text-lg md:text-2x py-4 px-6 w-fit transition-all hover:scale-105">
                                    <Link target="_blank" href='https://api.whatsapp.com/send/?phone=573142793431&text&app_absent=0&text=Hola%2C%20escribo%20para%20solicitar%20atenci%C3%B3n%20psicol%C3%B3gica'>Agenda tu cita</Link>
                                </Button>
                            </div>
                            <Image
                                src={banner}
                                className="w-11/12"
                                alt="Hero Image"
                            />
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <div />
            </Carousel>
        </section >)
}

export default Hero