import Link from "next/link";
import { activities } from "@/data/activities";

export default async function ActivityDetail({ params }) {
  const { slug } = await params;

  const item = activities.find((a) => a.slug === slug);

  if (!item) {
    return (
      <main className="min-h-screen bg-[#070B14] text-slate-100 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold">Actividad no encontrada</h1>
          <Link href="/#actividades" className="text-[#60A5FA] mt-6 inline-block">
            ← Volver a actividades
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#070B14] text-slate-100 px-6 py-20">
      <article className="mx-auto max-w-3xl">
        <Link href="/#actividades" className="text-[#60A5FA] text-sm">
          ← Volver a actividades
        </Link>

        <p className="mt-10 text-sm text-[#60A5FA] font-semibold uppercase tracking-[0.18em]">
          {item.date}
        </p>

        <h1 className="mt-4 text-4xl md:text-5xl font-black leading-tight">
          {item.title}
        </h1>

        <p className="mt-6 text-xl text-slate-300 leading-relaxed">
          {item.text}
        </p>

        <div className="mt-10 rounded-3xl border border-white/10 bg-[#0B1220] p-8 text-slate-300 leading-relaxed">
          <p>{item.content}</p>
        </div>
      </article>
    </main>
  );
}