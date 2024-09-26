import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import banner from "@/assets/blog/banner.jpg"
import ShareButton from "@/components/ui/shareButton"
import type { Metadata } from "next";


export const metadata: Metadata = {
    openGraph: {
        title: "Psicología y Cultura | ¿Qué hago doctor?",
        description: "Cualquier camino es imposible cuando se espera que sea otro el que camine. Esta es una confesión, la hago al inicio de este blog ahora más estructurado que hace nueve años. Era 2015 cuando decidí iniciar alguna formación en Psicoanálisis en Buenos Aires (Argentina), para ese entonces ya era profesional en Psicología y tenía 23 años.",
    },
};

export default function page() {

    return (
        <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
            <div className="mx-auto">
                <Image
                    src={banner}
                    alt='foto de Eduardo Montenegro'
                    className='object-cover overflow-hidden max-h-[600px] object-top rounded-xl aspect-auto mb-4 mx-auto border'
                />
                <Card className="mb-8">
                    <CardHeader className="max-w-5xl mx-auto">
                        <div className="flex items-center mt-4">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Eduardo Montenegro Flórez" />
                                <AvatarFallback>EM</AvatarFallback>
                            </Avatar>
                            <div className="ml-4">
                                <p className="text-sm font-medium">Eduardo Montenegro Flórez</p>
                                <p className="text-sm text-gray-500">Psicólogo, Esp. Mg. Psicopatología y Salud Mental</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <CardTitle className="text-3xl font-bold max-w-3xl mx-auto pt-20 mb-8">¿Qué hago doctor?</CardTitle>

                        <div className="space-y-4 max-w-3xl mx-auto" >
                            <p>Cualquier camino es imposible cuando se espera que sea otro el que camine. Esta es una confesión, la hago al inicio de este blog ahora más estructurado que hace nueve años. Era 2015 cuando decidí iniciar alguna formación en Psicoanálisis en Buenos Aires (Argentina), para ese entonces ya era profesional en Psicología y tenía 23 años. Inocentes 23 años. ¿Qué pretendía? Ser psicoanalista ¿Para qué? Ser psicoanalista ¿En qué institución? Ser psicoanalista ¿Tendría el presupuesto necesario? Ser psicoanalista. Por lo menos puedo decir que deseo había, pero a qué se articulaba, Ser… Psicoanalista, la más grosera pero inocente incompatibilidad.</p>

                            <p>No repartiré culpas de tal propósito, ni a mí ni a los demás. Después de todo, la pregunta por el ser está desde la infancia en nuestra cultura &quot;¿Qué quieres ser cuando grande?&quot; Ser psicoa… ¡basta! Esta pregunta tiene una trampa. Mientras buscamos una respuesta que apunte al ser en términos de algo que nos transforme (policía, bombero, astronauta), no consideramos que esto sólo se puede lograr una vez &quot;seamos grandes&quot;. Hay que ser grande para ser lo que sea que se nos ocurra. En ese punto me encontraba: queriendo ser el más grande psicoanalista sin saber muy bien que era un psicoanalista ¿un viejo intelectual, calvo y de barba que fuma habano y que lo acusan &quot;los más intelectuales de nuestra época&quot; de desarrollar su invento mientras le pegaba duro a la nieve del diablo?</p>

                            <p>Cómo muchas historias, todo inició con una imagen que tuvo que caer para enterarme que &quot;ser&quot; y &quot;psicoanalista&quot; no son compatibles, al menos no durante la sesión con el paciente. Es lógico pensar que, si se rompe la ducha, lo mejor es llamar a un plomero o aprender a arreglarla viendo tutoriales en YouTube o TikTok. En tal caso se acude al que sabe cómo arreglar la ducha y que todo vuelva a estar como antes. Algo similar sucede con los profesionales en salud mental cuando, con diagnóstico, intervención y tratamiento en mano van al combate para restaurar al paciente a un estado previo a su padecimiento. Pero ¿Por qué querría regresar al estado que me llevó a sufrir en primer lugar? No tiene sentido, ¿verdad?, Es como apagarlo y volver a encenderlo, sin cuestionar nada más. Habría que preguntarle a un Ingeniero en sistemas a ver si esto funciona o es solo un mito.</p>

                            <p>La imagen que cayó no fue la de papi Freud, ni más adelante la de papi Lacan, ellos ya hace rato dejaron este mundo y su legado no podemos más que trabajarlo y cuestionarlo. La imagen que tuvo que caer fue la mía: no soy un intelectual, ni respetado en las asociaciones psicoanalíticas, ni tampoco un lector experto de las obras originales en francés y alemán, pero suponía que tenía que ser eso y así estuve inhibido un tiempo considerable. En mi cabeza yo suponía que, si me convertía en un intelectual, respetado y erudito yo iba a poder resolverle mejor la vida a mis futuros pacientes, así que un día se me ocurrió contactar a un respetado psicoanalista freudiano —de esos que se disfrazan tanto que morfológicamente se parecen a su dios— para que me diera clases particulares.</p>

                            <p className="text-lg lg:text-xl xl:text-3xl font-light text-center text-balance py-6 md:py-12">Que impases se cometen cuando se tiene algún presupuesto para transformarse en otra cosa</p>

                            <p>¿Qué hago doctor? Le pregunté con la esperanza de que me dijera como llegar a ser psicoanalista. &quot;Analízate con un psicoanalista de la asociación, atiende pacientes, ve a supervisión y por cierto me debes 50 dólares&quot;. Que impases se cometen cuando se tiene algún presupuesto para transformarse en otra cosa, lo que aquel hijo de Freud mencionó me resultó imposible no porque dentro de la comunidad analítica no esté instaurado el hecho de analizarse, atender y supervisar, sino porque estaba recibiendo una fórmula que respondía a mi pregunta ¿qué hago doctor? Como quien se entrega al barbero o al cirujano para que le gobierne los pelos y las tripas.</p>

                            <p>El punto de corte fue la imposibilidad de que otro me allanara el camino. Buscaba un gobernante para no dar cuenta de mi deseo. La pregunta por el &quot;qué hacer&quot; resuena bastante cuando alguien está aquejado por el sufrimiento, tanto que Freud y Lacan citaron aquel verso del poema de Wilhem Busch: &quot;en la estrecha cavidad de su muela dolorida se recluye el alma toda&quot; refiriéndose a que, cuando un dolor aparece, molesta tanto que lo único que emerge es la idea de sacárselo de encima, de una vez y para siempre. No es reprochable que el sujeto neurótico, como cualquiera de nosotros, busque con esmero una fórmula que lo alivie. Aun así, nadie sabe mejor del propio padecimiento que uno mismo, esto hace que la tarea de pedirle a otro que nos dé sea equivalente al mandato de gobernarnos</p>

                            <p>¿Qué hay de malo esto? Nada en realidad, no es una cuestión moral. Sin embargo, la apuesta del psicoanálisis no es dirigir la vida del paciente, en su lugar pretende producir un saber distinto respecto de aquello que hace sufrir; un saber que parte del paciente, porque es él quien mejor lo conoce, aunque lo ignora, de esta manera lo que cambia es la relación que se tiene con ese sufrimiento (no se olvida a quien ya no está, se le recuerda de otra manera). Ahí encontré un camino, si el paciente sabe sobre su padecer, si el paciente dice más de lo que cree decir cuando habla en sesión, de nada me sirve atragantarme de libros con el objetivo de encasillar su habla a la teoría. Eso equivaldría a taparme los oídos o pedirle a otro que escuche por mi. Encontré que el psicoanalista &quot;no es&quot;, más bien cumple una función y esta función es limitada porque no llega a dar formulas, que el análisis es una puerta que se toca cuando se abre una pregunta alrededor del sufrimiento y que, si el psicoanalista termina siendo algo, es un deshecho, porque los pacientes no son eternos y tienen que irse en algún momento.</p>

                            <p>Mencioné que mi imagen cayó, pero no se puede vivir sin una imagen, después de todo estoy escribiendo un blog sobre mí y mis experiencias fuera de las sesiones con mis pacientes, Te invito a indagar, interrogar al sufrimiento. Las soluciones rápidas son tentadoras, pero ¿qué garantía hay de que el gobernante no se vuelva un tirano?</p>

                            <p>¿Tú también has enfrentado situaciones en las que buscaste una fórmula mágica? Comparte tu experiencia y hablemos en los comentarios.</p>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center max-w-5xl mx-auto my-8">
                        <div className="flex items-center">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Eduardo Montenegro Flórez" />
                                <AvatarFallback>EM</AvatarFallback>
                            </Avatar>
                            <div className="ml-4">
                                <p className="text-sm font-medium">Eduardo Montenegro Flórez</p>
                                <p className="text-sm text-gray-500">Psicólogo, Esp. Mg. Psicopatología y Salud Mental</p>
                            </div>
                        </div>
                        <ShareButton />
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}