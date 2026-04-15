import React from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { portfolioItems } from "../constant";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

type PageProjectProps = {
  /** wouter passes matched segments here, not top-level `id` */
  params?: { id?: string };
};

function resolveItem(raw: string | undefined) {
  if (raw === undefined || raw === "") return null;
  const byId = portfolioItems.find((p) => String(p.id) === raw);
  if (byId) return byId;
  const n = Number.parseInt(raw, 10);
  if (Number.isFinite(n) && n >= 0 && n < portfolioItems.length) {
    return portfolioItems[n];
  }
  return null;
}

export default function PageProject({ params }: PageProjectProps) {
  const item = resolveItem(params?.id);

  if (!item) {
    return (
      <div className="flex h-[100dvh] w-full flex-col items-center justify-center overflow-y-auto bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 px-4 text-center">
        <p className="mb-4 text-lg text-gray-300">Project not found.</p>
        <Link
          href="/"
          className="rounded-md border border-cyan-500/40 bg-cyan-950/30 px-4 py-2 text-sm font-medium text-cyan-100 transition-colors hover:border-cyan-400/60 hover:bg-cyan-900/40"
        >
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <SmoothScroll className="flex h-[100dvh] w-full flex-col overflow-y-auto overscroll-y-contain bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:py-12 md:px-6">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-cyan-200/90 transition-colors hover:text-cyan-100"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to portfolio
        </Link>

        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-cyan-400/90 sm:text-sm">
          {item.category}
        </p>
        <h1 className="mb-6 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
          {item.title}
        </h1>
        <p className="mb-10 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">
          {item.desc}
        </p>

        <div className="overflow-hidden rounded-lg border border-slate-700/80 bg-slate-900/40 shadow-xl shadow-black/20 md:rounded-xl">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${item.videoId}?rel=0`}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
      <Footer />
    </SmoothScroll>
  );
}
