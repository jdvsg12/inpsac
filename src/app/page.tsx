import Blog from "@/components/conteiner/blog";
import Events from "@/components/conteiner/events";
import Services from "@/components/conteiner/services";

export default function Home() {
  return (
    <main className="flex flex-col">
      <p className="max-w-[900px] my-20 capitalize w-10/12 mx-auto text-center text-balance text-3xl font-light">nos dedicamos a tu salud mental. Ofrecemos terapias personalizadas y recursos útiles para ayudarte a vivir una vida equilibrada y feliz. Descubre el bienestar hoy mismo.</p>
      <Services />
      <Blog />
      <Events />
    </main>
  );
}
