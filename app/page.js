"use client";


import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

function useInView() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

export default function DoldanBotanaHome() {
  useEffect(() => {
    // Manejador suave para scroll a anchors
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href?.startsWith("#")) {
        e.preventDefault();
        const targetId = href.slice(1);
        const element = document.getElementById(targetId);
        
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    // Agregar listener a todos los links internos
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener("click", handleAnchorClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  const fade = (visible) =>
    `transition-all duration-700 ease-out ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`;

  const [heroRef, heroVisible] = useInView();
  const [quienesRef, quienesVisible] = useInView();
  const [hacemosRef, hacemosVisible] = useInView();
  const [elegirnosRef, elegirnosVisible] = useInView();
  const [contactoRef, contactoVisible] = useInView();

  const serviciosJuridicos = [
    "Derecho civil",
    "Derecho de familia",
    "Sucesiones",
    "Contratos",
    "Asesoramiento laboral",
    "Asesoramiento a empresas",
  ];

  const serviciosNotariales = [
    "Compraventa de bienes",
    "Hipotecas",
    "Cesiones",
    "Poderes",
    "Certificados",
    "Actas notariales",
    "Reglamento de copropiedad",
    "Sucesiones",
    "Constitución de sociedades comerciales",
    "Comunicaciones al BCU",
  ];

  return (
    <main className="min-h-screen bg-[#0F2A20] text-[#F5F2E9] font-sans">
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[#0F2A20]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.08),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(212,175,55,0.05),transparent_30%)]" />
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0F2A20]/90">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between relative">
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <a href="/" className="flex items-center gap-3 group">
            <Image src="/logo4.png" alt="Doldan Botana" width={40} height={40} />

            <div>
              <p className="font-semibold tracking-[0.18em] text-sm text-[#F5F2E9] group-hover:text-[#D4AF37] transition-colors duration-300">
                DOLDAN BOTANA
              </p>
              <p className="text-xs text-[#CFC7B5]">
                Estudio jurídico y notarial
              </p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-[#CFC7B5]">
            {[
              ["#quienes", "Quiénes somos"],
              ["#hacemos", "Qué hacemos"],
              ["#elegirnos", "Por qué elegirnos"],
              ["#contacto", "Contacto"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="relative group transition-all duration-300"
              >
                <span className="group-hover:text-[#F5F2E9] transition-colors duration-300">
                  {label}
                </span>
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section
        ref={heroRef}
        className={`mx-auto max-w-7xl px-6 pt-28 pb-32 ${fade(heroVisible)}`}
      >
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
          <div className="relative z-10">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[#D4AF37]" />
              <p className="text-xs tracking-[0.32em] uppercase text-[#D4AF37]">
                Estudio jurídico y notarial
              </p>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.98] font-medium tracking-tight max-w-3xl">
              Respaldo legal para decisiones importantes.
            </h1>

            <p className="mt-8 text-lg md:text-xl text-[#CFC7B5] max-w-xl leading-relaxed">
              Acompañamos procesos legales y notariales con precisión técnica,
              claridad en cada etapa y un enfoque cercano en cada caso.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="bg-[#D4AF37] text-[#0F2A20] px-7 py-3.5 rounded-full font-medium text-center transition-all duration-400 ease-out hover:bg-[#E6C766] hover:-translate-y-[1px] hover:shadow-lg hover:shadow-[#D4AF37]/20"
              >
                Coordinar consulta
              </a>

              <a
                href="#hacemos"
                className="border border-[#D4AF37]/30 px-7 py-3.5 rounded-full text-[#D4AF37] text-center transition-all duration-400 ease-out hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/10"
              >
                Ver servicios
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg border-t border-[#D4AF37]/15 pt-6">
              {[
                ["01", "Atención personalizada"],
                ["02", "Claridad técnica"],
                ["03", "Confidencialidad"],
              ].map(([n, t]) => (
                <div key={n}>
                  <p className="font-serif text-2xl text-[#D4AF37]">{n}</p>
                  <p className="mt-2 text-sm text-[#CFC7B5]">{t}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] border border-[#D4AF37]/10" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 shadow-2xl shadow-black/30 transition-all duration-500 ease-out hover:scale-[1.01]">
              <Image
                src="/law-office2.jpg"
                alt="Estudio jurídico"
                width={900}
                height={650}
                className="h-[520px] w-full object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A20] via-[#0F2A20]/60 to-transparent" />
              <div className="absolute inset-0 bg-[#0F2A20]/25" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
  <p className="text-xs text-[#D4AF37]/80">Doldan Botana</p>
  <p className="text-lg text-[#F5F2E9]">
    Soluciones jurídicas y notariales con enfoque integral.
  </p>
</div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={quienesRef}
        id="quienes"
        className={`max-w-7xl mx-auto px-6 py-24 scroll-mt-24 ${fade(quienesVisible)}`}
      >
        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12">
          Quiénes somos
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="transition-all duration-500 ease-out hover:-translate-y-1">
            <h3 className="font-serif text-2xl font-medium">Laura Botana</h3>
            <p className="text-[#D4AF37] mt-1">Abogada</p>
            <p className="mt-4 text-[#CFC7B5] leading-relaxed">
              Asesoramiento jurídico con enfoque claro y cercano.
            </p>
          </div>

          <div className="transition-all duration-500 ease-out hover:-translate-y-1">
            <h3 className="font-serif text-2xl font-medium">Ana Doldán</h3>
            <p className="text-[#D4AF37] mt-1">Escribana</p>
            <p className="mt-4 text-[#CFC7B5] leading-relaxed">
              Seguridad jurídica en actos y documentación.
            </p>
          </div>
        </div>
      </section>

      <section
  ref={hacemosRef}
  id="hacemos"
  className={`max-w-7xl mx-auto px-6 py-24 scroll-mt-24 ${fade(hacemosVisible)}`}
>

  <h2 className="font-serif text-3xl md:text-4xl font-medium mb-14">
    Qué hacemos
  </h2>

  <div className="grid lg:grid-cols-2 gap-8">

    {/* JURÍDICO */}
    <div className="rounded-[2rem] bg-[#D4AF37] text-[#0F2A20] p-8
    transition-all duration-500 ease-out
    hover:bg-[#E6C766] hover:-translate-y-1 hover:shadow-xl">

      <h3 className="font-serif text-2xl mb-6">
        Área Jurídica
      </h3>

      <div className="grid sm:grid-cols-2 gap-3">
        {serviciosJuridicos.map((item) => (
          <div
            key={item}
            className="bg-[#0F2A20] text-[#F5F2E9] border border-[#D4AF37]/30
            rounded-xl p-4 text-sm
            transition-all duration-300 ease-out
            hover:bg-[#122F25] hover:border-[#D4AF37] hover:-translate-y-[2px]"
          >
            {item}
          </div>
        ))}
      </div>

    </div>

    {/* NOTARIAL */}
    <div className="rounded-[2rem] bg-[#D4AF37] text-[#0F2A20] p-8
    transition-all duration-500 ease-out
    hover:bg-[#E6C766] hover:-translate-y-1 hover:shadow-xl">

      <h3 className="font-serif text-2xl mb-6">
        Área Notarial
      </h3>

      <div className="grid sm:grid-cols-2 gap-3">
        {serviciosNotariales.map((item) => (
          <div
            key={item}
            className="bg-[#0F2A20] text-[#F5F2E9] border border-[#D4AF37]/30
            rounded-xl p-4 text-sm
            transition-all duration-300 ease-out
            hover:bg-[#122F25] hover:border-[#D4AF37] hover:-translate-y-[2px]"
          >
            {item}
          </div>
        ))}
      </div>

    </div>

  </div>
</section>

      <section
  ref={elegirnosRef}
  id="elegirnos"
  className={`max-w-7xl mx-auto px-6 py-24 scroll-mt-24 ${fade(elegirnosVisible)}`}
>

  <h2 className="font-serif text-3xl md:text-4xl font-medium mb-14">
    Por qué elegirnos
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      "Atención personalizada",
      "Claridad",
      "Confidencialidad",
      "Enfoque integral"
    ].map((t, i) => (
      <div
        key={i}
        className="p-6 rounded-2xl bg-[#D4AF37] text-[#0F2A20]
        transition-all duration-500 ease-out
        hover:bg-[#E6C766] hover:-translate-y-1 hover:shadow-xl"
      >
        <h3 className="font-serif text-lg mb-3">
          {t}
        </h3>
      </div>
    ))}
  </div>

</section>

      <section
  ref={contactoRef}
  id="contacto"
  className={`max-w-7xl mx-auto px-6 py-24 scroll-mt-24 ${fade(contactoVisible)}`}
>

  <h2 className="font-serif text-3xl md:text-4xl font-medium mb-14">
    Contacto
  </h2>

  <div className="grid lg:grid-cols-2 gap-10 items-center">

    {/* INFO */}
    <div className="space-y-6">

      <p className="text-[#CFC7B5] text-lg leading-relaxed max-w-md">
        Estamos disponibles para asesorarte en temas jurídicos y notariales.
        Coordiná una consulta o acercate a nuestra oficina.
      </p>

      <div className="space-y-4 text-sm">

        <div>
          <p className="text-[#D4AF37] mb-1">Dirección</p>
          <p className="text-[#F5F2E9]">
            Dr. Enrique Tarigo 1335, oficina 315<br />
            Montevideo, Uruguay
          </p>
        </div>

        <div>
          <p className="text-[#D4AF37] mb-1">Email</p>
          <p className="text-[#F5F2E9]">
            dra.laurabotana@gmail.com
          </p>
        </div>

      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">

        <a
          href="https://wa.me/598091457941"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#D4AF37] text-[#0F2A20] px-6 py-3 rounded-full text-center font-medium
          transition-all duration-400 ease-out
          hover:bg-[#E6C766] hover:-translate-y-[1px] hover:shadow-lg"
        >
          Escribir por WhatsApp
        </a>

        <a
          href="mailto:dra.laurabotana@gmail.com"
          className="border border-[#D4AF37]/30 px-6 py-3 rounded-full text-[#D4AF37] text-center
          transition-all duration-400 ease-out
          hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/10"
        >
          Enviar email
        </a>

      </div>

    </div>

    {/* MAPA */}
    <div className="relative rounded-[2rem] overflow-hidden border border-[#D4AF37]/15 shadow-2xl shadow-black/20">

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.7767427634797!2d-56.19161728716588!3d-34.90600021801366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81cd53e1a5c1%3A0x3b518fa04dec32f5!2soficina%20315%2C%20Dr.%20Enrique%20Tarigo%201335%2C%2011100%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses!2suy!4v1777781371140!5m2!1ses!2suy"
    width="100%"
    height="420"
    style={{ border: 0 }}
    loading="lazy"
  />

  {/* overlay dorado sutil */}
  <div className="pointer-events-none absolute inset-0 bg-[#D4AF37]/90 mix-blend-overlay" />

</div>

  </div>

</section>

     

<footer className="py-10 text-[#CFC7B5]">
  <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">

    {/* IZQUIERDA */}
    <p className="text-xs">
      © {new Date().getFullYear()} Doldan Botana
    </p>

    {/* DERECHA */}
    <a
      href="https://www.instagram.com/dra.esc.anadoldan"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 text-sm transition-all duration-300 hover:text-[#F5F2E9]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#D4AF37] group-hover:scale-110 transition-transform duration-300"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>

      <span>@dra.esc.anadoldan</span>
    </a>

  </div>
</footer>
    </main>
  );
}