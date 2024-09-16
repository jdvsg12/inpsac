import Blog from "@/components/conteiner/blog";
import Events from "@/components/conteiner/events";
import Services from "@/components/conteiner/services";
import Hero from "@/components/main/hero";


export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <p className="max-w-[900px] my-20 w-10/12 mx-auto text-center text-balance text-3xl font-light">Estamos comprometidos en promover una cultura de la escucha para que ninguna forma de sufrimiento sea considerada insignificante.</p>
      <Services />
      <Blog />
      <Events />
    </main>
  );
}
