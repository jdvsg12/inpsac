import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

const Biography = () => {
    return (
        <section className="h-full  py-10 md:py-12 md:px-28 flex flex-col justify-center">
            <h2 className="text-5xl text-center md:text-left text-secondary font-bold uppercase">eduardo montenegro</h2>
            <Card className="rounded-md mx-auto border-0 grid w-full">
                <CardHeader>
                    <CardTitle className="my-2 text-lg md:text-2xl text-backgroundGreen">Psicologo</CardTitle>
                    <CardTitle className="my-2 text-base md:text-xl text-backgroundGreen capitalize">esp. psicopatologia y salud mental</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-around">
                    <CardDescription className="text-lg md:text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae neque at nulla pellentesque ullamcorper. In volutpat sed urna non tincidunt.  viverra tristique. Nunc et pulvinar lectus. Mauris eget lectus vel nisl pharetra cursus. Curabitur ac egestas odio, eu elementum felis. Vestibulum sed commodo risus. Aenean faucibus orci mauris, id sollicitudin sapien semper vitae. Fusce eu pellentesque turpis.
                    </CardDescription>
                </CardContent>
            </Card>
        </section>
    )
}

export default Biography