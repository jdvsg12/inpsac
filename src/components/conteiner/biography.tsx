import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import imgPerfil from '../../../public/biografia.jpeg'
import Image from 'next/image'

const Biography = () => {
    return (
        <section className="h-full  py-10 md:py-12 md:px-28 flex flex-col justify-center">
            <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                <Card className="rounded-md mx-auto border-0 grid w-11/12 md:w-full h-full ">
                    <h2 className="text-5xl text-center md:text-left text-secondary font-bold uppercase">EDUARDO MONTENEGRO FLÓREZ</h2>
                    <CardHeader>
                        <CardTitle className="my-2 text-lg md:text-2xl text-backgroundGreen">Psicólogo</CardTitle>
                        <CardTitle className="my-2 text-base md:text-xl text-backgroundGreen capitalize">
                            Esp. Mg. Psicopatología y Salud Mental</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-around">
                        <CardDescription className="text-lg md:text-xl">
                            Psicólogo en el área clínica desde el ámbito privado en modalidad presencial y online en distintos países del continente americano y europeo. Magister y Especialista en Psicopatología y Salud Mental, ex-secretario del departamento de investigación del Instituto Universitario de Salud Mental (IUSAM-APdeBA), Revisor/corrector del libro “Galaxia Inter: “Una introducción a las problemáticas interdisciplinarias” (UNICEN). Miembro del consejo editorial de la Revista Argentina de Humanidades y Ciencias Sociales.
                        </CardDescription>
                    </CardContent>
                </Card>
                <Image
                    src={imgPerfil}
                    alt='foto de Eduardo Montenegro'
                    className='rounded-xl aspect-auto w-10/12 max-w-[400px] border'
                />
            </div>
        </section>
    )
}

export default Biography