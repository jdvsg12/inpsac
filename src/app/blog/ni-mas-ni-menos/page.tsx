import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import banner from "@/assets/blog/ni-mas-ni-menos.jpg"
import ShareButton from "@/components/ui/shareButton"


export const metadata = {
    title: "Psicología y Cultura | Ni más, ni menos.",
    description: "Imagina por un momento que aparece un demonio, tal como lo suponemos ahora: maligno y portador de desgracias. Este demonio te dice: vas a ser en tu vida lo que tu nombre signifique en mi libro de significados, ni más, ni menos. Recién iniciamos 2025 y no podríamos esperar menos de un demonio sino que trabaje con las herramientas que brinda nuestra era de las tecnologías de información y comunicación; su libro de significados, por supuesto, es ChatGPT.",
    keywords: 'Psicoanálisis moderno, Lacan y el Otro ,Significado del nombre ,Construcción de identidad ,Filosofía y psicología,Búsqueda del deseo,Psicología cultural,Falta en psicoanálisis,Interpretación simbólica,Gabriel García Márquez psicoanálisis'
}


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
                        <CardTitle className="text-3xl font-bold max-w-3xl mx-auto pt-20 mb-8">Así es tu nombre. Ni más, ni menos.</CardTitle>

                        <div className="space-y-4 max-w-3xl mx-auto" >
                            <p>Imagina por un momento que aparece un demonio, tal como lo suponemos ahora: maligno y portador de desgracias. Este demonio te dice: vas a ser en tu vida lo que tu nombre signifique en mi libro de significados, ni más, ni menos. Recién iniciamos 2025 y no podríamos esperar menos de un demonio sino que trabaje con las herramientas que brinda nuestra era de las tecnologías de información y comunicación; su libro de significados, por supuesto, es ChatGPT.</p>

                            <p>En mi caso, sucede una tentadora desgracia. Cuando pregunto por Eduardo a esta majestuosa inteligencia me responde: Guardián de la riqueza. Tentador, pienso. La idea de proteger, cuidar, guardar me resulta agradable, bastante acorde con quien soy. Pero ¿de la riqueza? Eso lo tienen los reyes, y lo más cercano que estoy a un rey es al que canta el maestro Jorge Veloza en su Rey Pobre.</p>

                            <p>Bueno no está tal mal, total ¿Quién dice que la riqueza está en la plata? pregunto. Cierro el chat y me dispongo a trabajar, coloco el título de esta columna. Aquí comienza la desgracia. Lo único que puedo hacer, según dicta el demonio es ser guardián de la riqueza, ni más, ni menos. Adiós a las ideas que aún no habían germinado, a mi trabajo clínico, a los talleres y clases donde comparto y aprendo. Todo lo que me define se convierte en un guardián inmóvil, incapaz de tocar aquello que custodio. Incluso mi cuerpo es declarado una posesión, y cualquier acción que ponga en riesgo esta riqueza está prohibida. Estoy atrapado en el significado que me asignaron, incapaz de ser algo diferente a lo que el demonio ha decretado; la trampa, acepté que el significado que ofrece de mi nombre es todo lo que como sujeto puedo llegar a ser.</p>

                            <p>Para el sujeto, como tu o como yo, es muy sencillo caer en esta trampa, constantemente buscamos “eso” que daría la solución a todos los problemas, lo que nos haría completamente felices, lo que llenaría tanto que ya no faltaría nada, el sentido o significado definitivo de la vida. Para Lacan esto sucede porque como sujetos estamos estructurados por una falta que surge cuando hemos sido inscritos en el campo del Otro, en otras palabras quiere decir que como no estamos completos, y por desagradable fortuna nunca vamos a estarlo, entonces suponemos que hay algo o alguien, cualquier cosa que simbolice un Otro completo, que nos ofrecerá la completud.</p>

                            <p>Ejemplo de ello es el amor bajo la forma engañosa de “la media naranja” o “la naranja completa”. Platón en El banquete, específicamente en el discurso de Aristófanes, menciona que al principio existíamos como Andróginos: seres que tenían los dos sexos, una unidad total que luego fue separada por los dioses; se supone que desde entonces vamos en búsqueda de la otra mitad perdida, de ese pedazo de yo que está en otro lugar. Nótese como germina la trampa en la que dichosos caemos, la búsqueda del otro es en realidad una búsqueda del yo perdido, levantamos espejos para ver nuestro reflejo, la imagen que nos consuela porque allí “lo que me falta lo tiene el otro, lo que le falta al otro lo tengo yo”.</p>

                            <p>El amor, tal como lo describe Aristófanes en El Banquete, no se agota en su discurso. Hay mucho más por decir, pero este apartado nos sirve para exponer cómo la pretensión de unidad, de totalidad, el uno para el otro, representa más un peligro que una posibilidad. Lacan toma distancia de esta idea de unidad al recordarnos que el sujeto está marcado por una falta estructural que lo aleja de cualquier ideal de completud.</p>

                            <p className="text-lg lg:text-xl xl:text-3xl font-light text-center text-balance py-6 md:py-12">El Otro no es el demonio, sino la estructura en la que emergen nuestras preguntas sobre cómo se articula la falta y el deseo.</p>

                            <p>En un intento por simplificar el concepto de Otro, con mayúscula, podríamos pensarlo como el orden simbólico en el que estamos inscritos. Este orden abarca la cultura, las normas y todos los significantes que nos sitúan como sujetos. Así, cuando nuestros padres nos asignan un nombre, no solo están eligiendo una combinación de vocales y consonantes. Ese nombre viene cargado de ideales, pretensiones y deseos que ellos mismos han heredado del Otro. En este sentido, mi nombre, Eduardo, no es únicamente lo que aparece en un libro de significados. Está vinculado a otros significantes que, quizás, nunca llegue a conocer del todo. ¿Importa esto? Puede que no. El Otro no es el demonio del principio, sino la estructura en la que emergen nuestras preguntas sobre cómo se articula la falta y el deseo. Y, sin embargo, qué tentador fue saber que soy un guardián de la riqueza, ni más, ni menos.</p>

                            <p>En mi caso fui yo quien, ansioso por encontrar mi destino, por saber cuándo y dónde iba a “completarme”, terminé cayendo en la trampa de aceptar la definición del demonio como verdad absoluta. La tentación era fuerte: la palabra impuesta por el Otro parecía ofrecerme un sentido definitivo, algo que yo no sabía que deseaba. Lo único que restaba era guardar silencio y aceptar.</p>

                            <p>Esta dinámica no es exclusiva; si retóricamente pudiera desmantelar a este demonio, vería que se trata del momento en el que el otro, con minúscula, el semejante, personifica para mí al Otro y se constituye en una verdad inescapable. Algo similar a lo que le sucedió a la niña de doce años encarcelada en el convento de Santa Clara por “posesión demoníaca”. Muerta en un sueño mientras comía uvas pretendiendo vencer el paso del tiempo, Sierva María de Todos los Ángeles, como lo relata Gabriel García Márquez en Del amor y otros demonios, fue lo que cada voz a su alrededor dijo que debía ser: “santa” para una esclava, “puta” para su padre, “negra” para su madre, “endemoniada” para un obispo, “amor” para un sacerdote. Nunca fue más allá de lo que le permitieron como nombre.</p>

                            <p>No es que Sierva María no estuviera inscrita como cualquier sujeto en el campo del Otro. En principio, la niña rechazada por la madre fue adoptada por las esclavas negras de quienes hereda su idioma, cantos, lengua, códigos, cultura. ¿Cómo es que termina poseída por el demonio? En el momento en que la despojan de su palabra, cuando le dejan de reconocer como un sujeto deseante con la posibilidad de producir un saber distinto al que le fue asignado. Sierva María fue condenada por otro quien encarnando el lugar de Otro le dijo: ni más ni menos. Ella acepta: “estoy endemoniada” sin saber que significaba.</p>

                            <p>Si la historia de Sierva María nos impacta, no caigamos en el error de pensar que es solo una ficción nacida de la pluma de una mente prodigiosa. En agosto de 2024, los talibanes impusieron un nuevo edicto: la voz de las mujeres es prohibida en espacios públicos. Según una interpretación ultraconservadora de la Sharia, la voz femenina, como otras partes del cuerpo, debe permanecer oculta para preservar la virtud. Pero, a diferencia de Sierva María, decenas de mujeres afganas se han negado a aceptar esta imposición. Sus cantos, transformados en protesta, circulan en redes sociales desafiando el veto, aunque el impacto de estas acciones sigue siendo menor frente a la magnitud del veto mismo. Sin embargo, su canto nos recuerda una verdad inquietante: cuando cualquier otro reclama para sí la verdad del Otro, lo primero que hace es despojarte de tu palabra para imponer la suya.</p>

                            <p>Si pude escribir esta columna fue porque la tentación de aceptarme como guardián de la riqueza no tuvo efecto de verdad absoluta. ¿Qué hacer con este demonio cuyo dictamen es que solo podemos ser lo que por nombre nos asigna, ni más, ni menos? Por ahora, estar advertidos. No hay en la estructura del lenguaje un otro, semejante, ni Otro, como estructura, que tenga tal completud, tal felicidad y dicha a la cual podamos aspirar obtener como regalo. Insisto el Otro en sí mismo no es un demonio, solo es la estructura a la cual, como sujetos estamos inscritos, gracias a esto tenemos la posibilidad de desear, deseamos justamente lo que nos falta, entonces, por qué no plantear la posibilidad también de reconocer esta falta en vez de taparla con significados provenientes de la “verdad absoluta del otro”.</p>

                            <p>Tal vez no se trata de llenar el espacio con verdades absolutas ni de buscar espejos que nos devuelvan imágenes idealizadas, sino de caminar con la incertidumbre como compañera. Si el demonio insiste en definirnos, tal vez la respuesta sea devolverle una pregunta, una que no acepte clausuras ni límites. Porque ahí, en el margen que dejamos para lo que aún no hemos dicho, se encuentra la riqueza que vale la pena custodiar: la posibilidad de producir un significado diferente al que el demonio nos dice como ni más, ni menos.</p>
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
                    <p className="text-xs text-gray-500 mb-10 max-w-[750px] px-4 text-center mx-auto">Te invito a charlar sobre tus dudas, preguntas, aportes o críticas. Escríbeme a WhatsApp, el botón de acceso lo encuentras en la página de inicio.</p>
                </Card>
            </div>
        </div>
    )
}