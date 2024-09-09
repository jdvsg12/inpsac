'use client'
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Textarea } from "../ui/textarea"

const formSchema = z.object({
    username: z.string().min(2),
    email: z.string().min(2),
    message: z.string().min(2).max(200),
})


const FormContact = () => {
    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            message: "",
        },
    })

    function handleSubmit(values: z.infer<typeof formSchema>) {
        const datetime = z.string().date();

        const currentDate = new Date().toISOString().split('T')[0];

        datetime.parse(currentDate);
        toast({
            title: "Se a Enviado el mensaje",
            description: `${currentDate}`,
        })

        console.log(values)

        form.reset();
    }

    return (
        <section className="h-full  py-10 md:px-28 flex flex-col justify-center">
            <Card className="rounded-md mx-auto grid max-md:w-11/12">
                <CardHeader>
                    <CardTitle className="my-2 text-xl md:text-3xl lg:text-4xl xl:text-5xl text-backgroundGreen">Contacto</CardTitle>
                    <CardDescription className="text-lg md:text-xl">Agenda tu cita o contáctame para cualquier consulta. Estoy aquí para ayudarte. ¡Escríbeme ahora!</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(handleSubmit)}
                            className="w-full flex flex-col gap-4"
                        >
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel className="text-lg md:text-2xl text-secondary">Nombre*</FormLabel>
                                            <FormControl>
                                                <Input
                                                    required
                                                    placeholder="Nombre"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    );
                                }}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel className="text-lg md:text-2xl text-secondary">Email*</FormLabel>
                                            <FormControl>
                                                <Input
                                                    required
                                                    placeholder="Email"
                                                    type="email"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    );
                                }}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel className="text-lg md:text-2xl text-secondary">Mensaje*</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    required
                                                    placeholder="Mensaje"
                                                    {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    );
                                }}
                            />
                            <CardFooter className="p-0">
                                <Button disabled={!form.formState.isValid} type="submit" className="w-full p-0">
                                    Enviar
                                </Button>
                            </CardFooter>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </section>
    )
}

export default FormContact