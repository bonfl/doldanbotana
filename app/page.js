import React from "react";
import Image from "next/image";
import { news } from "@/data/news";
import { activities } from "@/data/activities";
import {
  CalendarDays,
  Newspaper,
  Telescope,
  Mail,
  ArrowRight,
  MapPin,
} from "lucide-react";



export default function CIDAEHome() {
  return (
    <main className="min-h-screen bg-[#070B14] text-slate-100 font-sans">
      <div className="fixed inset-0 pointer-events-none opacity-40 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(58,143,193,0.25),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(96,165,250,0.18),transparent_30%),linear-gradient(180deg,#070B14_0%,#0B0F1A_55%,#05070D_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:38px_38px] opacity-20" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-md bg-[#070B14]/85 shadow-md shadow-black/20">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl border border-[#3A8FC1]/40 bg-[#0B1220] flex items-center justify-center overflow-hidden shadow-lg shadow-[#3A8FC1]/10">
              <Image
                src="/logo.png"
                alt="CIDA-E"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>

            <div>
              <p className="font-semibold tracking-[0.22em] text-sm text-white">
                CIDA-E
              </p>
              <p className="text-xs text-slate-400">Astronomía · Uruguay</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#sobre" className="hover:text-white">Sobre CIDA-E</a>
            <a href="#historia" className="hover:text-white">Historia</a>
            <a href="#actividades" className="hover:text-white">Actividades</a>
            <a href="#noticias" className="hover:text-white">Noticias</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
          </nav>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-24">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3A8FC1]/30 bg-[#3A8FC1]/10 px-4 py-2 text-sm text-[#93C5FD] mb-7">
              <span className="h-2 w-2 rounded-full bg-[#60A5FA]" />
              Centro de Investigación y Difusión Aeronáutico-Espacial
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] max-w-4xl">
              Un espacio para mirar más lejos desde Uruguay.
            </h1>

            <p className="mt-7 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              CIDA-E promueve la investigación, la divulgación y el acercamiento
              de la astronomía y la actividad aeroespacial a la sociedad.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <a href="#actividades" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3A8FC1] px-6 py-3 font-semibold text-white shadow-xl shadow-[#3A8FC1]/20 hover:bg-[#2F7EAD] transition">
                Ver actividades <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contacto" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-3 font-semibold text-slate-100 hover:bg-white/5 transition">
                Contactar
              </a>
            </div>
          </div>

          <div className="relative">
          <div className="relative aspect-[3/2] rounded-[2rem] border border-white/10 shadow-2xl shadow-black/40 overflow-hidden bg-[#0B1220]">

            {/* IMAGEN REAL */}
            <Image
                src="/stars3.jpg"
                alt="Cielo nocturno estrellado"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-[center_20%] scale-105"
                
                priority
              />  

            {/* OVERLAY OSCURO (CLAVE) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/60 to-[#070B14]/10" />
            <div className="absolute inset-0 bg-[#0B1220]/30" />

            {/* CONTENIDO */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] text-[#93C5FD] uppercase">
                Observación · Ciencia · Comunidad
              </p>

              <h3 className="mt-3 text-2xl md:text-3xl font-black text-white leading-tight">
                Astronomía y actividad aeroespacial desde Uruguay
              </h3>

              <p className="mt-3 text-slate-300 max-w-md leading-relaxed">
                Un espacio institucional para comunicar actividades, noticias y contenidos vinculados al estudio del cielo y el espacio.
              </p>
            </div>

          </div>
        </div>
        </div>
      </section>

      <section id="sobre" className="relative z-10 mx-auto max-w-7xl px-6 py-16 scroll-mt-24">
  <h2 className="text-3xl font-bold mb-6">Sobre CIDA-E</h2>

  <div className="rounded-2xl bg-[#0B1220] border border-white/10 p-6 text-slate-300 leading-relaxed">
    <p>
      El Centro de Investigación y Difusión Aeronáutico-Espacial (CIDA-E) es una institución uruguaya dedicada a la investigación y promoción del estudio de los temas aeronáuticos y espaciales.
    </p>

    <h3 className="mt-6 text-xl font-bold text-white">Objetivos</h3>

    <ul className="mt-4 list-disc list-inside space-y-2">
      <li>Estudiar y promover el estudio de las cuestiones aeronáuticas y espaciales.</li>
      <li>Difundir los resultados de sus investigaciones y estudios.</li>
      <li>Asesorar y colaborar con la Fuerza Aérea Uruguaya, la autoridad de Aviación Civil y otras organizaciones públicas y privadas relacionadas con temas aeroespaciales.</li>
    </ul>
  </div>
</section>

      <section id="historia" className="relative z-10 mx-auto max-w-7xl px-6 py-20 scroll-mt-24">
  <h2 className="text-3xl font-bold mb-12">Historia</h2>

  <div className="relative border-l border-white/10 pl-8 space-y-12">

    {/* ITEM */}
    <div className="relative">
      <div className="absolute -left-[14px] top-1 w-3 h-3 bg-[#60A5FA] rounded-full shadow-md shadow-[#60A5FA]/40" />
      <p className="text-sm text-[#60A5FA] font-semibold">1975</p>
      <h3 className="text-xl font-bold mt-1">Fundación del CIDA-E</h3>
      <p className="mt-2 text-slate-400 leading-relaxed">
        Fue fundado bajo el Decreto N.º 607/975 con el objetivo de estudiar y promover las cuestiones aeronáuticas y espaciales, posicionando a Uruguay en el ámbito internacional.
      </p>
    </div>

    {/* ITEM */}
    <div className="relative">
      <div className="absolute -left-[14px] top-1 w-3 h-3 bg-[#60A5FA] rounded-full shadow-md shadow-[#60A5FA]/40" />
      <p className="text-sm text-[#60A5FA] font-semibold">1996</p>
      <h3 className="text-xl font-bold mt-1">Conferencia Espacial de las Américas</h3>
      <p className="mt-2 text-slate-400 leading-relaxed">
        El CIDA-E organizó y participó en la III Conferencia Espacial de las Américas en Punta del Este, consolidando su rol en la región.
      </p>
    </div>

    {/* ITEM */}
    <div className="relative">
      <div className="absolute -left-[14px] top-1 w-3 h-3 bg-[#60A5FA] rounded-full shadow-md shadow-[#60A5FA]/40" />
      <p className="text-sm text-[#60A5FA] font-semibold">2002</p>
      <h3 className="text-xl font-bold mt-1">Integración institucional</h3>
      <p className="mt-2 text-slate-400 leading-relaxed">
        El organismo pasó a depender de la Dirección Nacional de Aviación Civil e Infraestructura Aeronáutica, convirtiéndose en órgano asesor del Poder Ejecutivo.
      </p>
    </div>

    {/* ITEM */}
    <div className="relative">
      <div className="absolute -left-[14px] top-1 w-3 h-3 bg-[#60A5FA] rounded-full shadow-md shadow-[#60A5FA]/40" />
      <p className="text-sm text-[#60A5FA] font-semibold">Actualidad</p>
      <h3 className="text-xl font-bold mt-1">Desarrollo y proyección</h3>
      <p className="mt-2 text-slate-400 leading-relaxed">
        El CIDA-E continúa desarrollando investigación, publicaciones y actividades académicas, manteniendo vínculos con organizaciones internacionales como IAF, IISL y OACI.
      </p>
    </div>

  </div>
</section>

      <section id="actividades" className="relative z-10 mx-auto max-w-7xl px-6 py-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">Próximas actividades</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {activities.map((item) => (
          <a
            key={item.slug}
            href={`/actividades/${item.slug}`}
            className="p-6 bg-[#0B1220] rounded-2xl border border-white/10 hover:border-[#3A8FC1]/60 hover:bg-[#111827] transition block"
          >
            <p className="text-sm text-[#60A5FA] font-semibold">{item.date}</p>
            <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
            <p className="mt-3 text-slate-400">{item.text}</p>
          </a>
        ))}
        </div>
      </section>

      <section id="noticias" className="relative z-10 mx-auto max-w-7xl px-6 py-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">Noticias</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {news.map((item) => (
            <a
  key={item.title}
  href={`/noticias/${item.slug}`}
  className="p-6 bg-[#0B1220] rounded-2xl border border-white/10 hover:border-[#3A8FC1]/60 hover:bg-[#111827] transition block"
>
  <p className="text-sm text-[#60A5FA] font-semibold">{item.tag}</p>
  <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
  <p className="mt-3 text-slate-400">{item.text}</p>
</a>
          ))}
        </div>
      </section>

      <section id="contacto" className="relative z-10 mx-auto max-w-7xl px-6 py-16 scroll-mt-24">
        <p>contacto@cidae.uy</p>
      </section>
    <footer className="relative z-10 border-t border-white/10 px-6 py-10 text-center text-sm text-slate-500 mt-20">

  <div className="flex flex-col items-center gap-4">

    <Image
      src="/logo.png"
      alt="CIDA-E"
      width={150}
      height={170}
      className="object-contain opacity-90"
    />

    <p>
      © {new Date().getFullYear()} CIDA-E · Centro de Investigación y Difusión de Astronomía
    </p>

  </div>

    </footer>

    </main>
  );
}