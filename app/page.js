import React from "react";
import Image from "next/image";
import { news } from "@/data/news";
import {
  CalendarDays,
  Newspaper,
  Telescope,
  Mail,
  ArrowRight,
  MapPin,
} from "lucide-react";

const activities = [
  {
    date: "15 JUN",
    title: "Observación astronómica abierta",
    text: "Jornada de observación del cielo nocturno con telescopios y guía para público general..",
  },
  {
    date: "22 JUN",
    title: "Charla: Uruguay y la actividad aeroespacial",
    text: "Un encuentro para acercar la astronomía, la ciencia y la exploración espacial a la comunidad.",
  },
  {
    date: "05 JUL",
    title: "Taller introductorio de astronomía",
    text: "Conceptos básicos para quienes quieren comenzar a mirar el cielo con otros ojos.",
  },
];

export default function CIDAEHome() {
  return (
    <main className="min-h-screen bg-[#070B14] text-slate-100 font-sans overflow-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(58,143,193,0.25),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(96,165,250,0.18),transparent_30%),linear-gradient(180deg,#070B14_0%,#0B0F1A_55%,#05070D_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:38px_38px] opacity-20" />
      </div>

      <header className="relative z-10 border-b border-white/10 backdrop-blur-md bg-[#070B14]/70">
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
              Centro de Investigación y Difusión de Astronomía
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] max-w-4xl">
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
            <div className="aspect-[4/3] rounded-[2rem] border border-white/10 bg-[#0B1220] shadow-2xl shadow-black/40 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_35%,rgba(96,165,250,0.28),transparent_28%),linear-gradient(135deg,rgba(58,143,193,0.18),transparent_45%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.24)_1px,transparent_1px)] [background-size:30px_30px] opacity-25" />
              <div className="relative h-full flex items-center justify-center p-10 text-center">
                <div>
                  <Telescope className="mx-auto h-20 w-20 text-[#60A5FA] mb-6" />
                  <p className="text-2xl font-bold">Observación · Ciencia · Comunidad</p>
                  <p className="mt-3 text-slate-400 max-w-sm">
                    Un sitio institucional para comunicar actividades, noticias y contenidos astronómicos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold">Sobre CIDA-E</h2>
      </section>

      <section id="actividades" className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Próximas actividades</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {activities.map((item) => (
            <div key={item.title} className="p-6 bg-[#0B1220] rounded-2xl">
              <p>{item.date}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="noticias" className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Noticias</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {news.map((item) => (
            <div key={item.title} className="p-6 bg-[#0B1220] rounded-2xl">
              <p>{item.tag}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contacto" className="relative z-10 mx-auto max-w-7xl px-6 py-16">
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