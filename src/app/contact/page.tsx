import Biography from "@/components/conteiner/biography";
import FormContact from "@/components/conteiner/formContact";

export const metadata = {
    title: "Psicología y Cultura | Contacto",
}
export default function page() {
    return (
        <>
            <Biography />
            <FormContact />
        </>
    )
}
