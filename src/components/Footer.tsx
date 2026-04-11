import React from "react";

export default function Footer() {
  return (
    <footer className=" bg-gradient-to-b from-slate-900 via-blue-950/30 to-slate-800 px-4 py-10 text-white sm:px-6 sm:py-12 md:px-10 lg:px-14">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-3">
        <div className="min-w-0 sm:col-span-2 lg:col-span-1">
          <h2 className="mb-3 text-xl font-bold tracking-tight sm:text-2xl">
            CV. KREASI RUMAH HITAM
          </h2>
          <p className="max-w-prose text-sm leading-relaxed text-white/85 sm:text-[0.9375rem]">
            A creative hub based in Batu City, East Java, specializing in video
            production, motion graphics, photography, and design. We transform
            imaginative ideas into stunning reality.
          </p>
        </div>

        <div className="min-w-0">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/90">
            Contact
          </h3>
          <p className="mb-3 text-sm leading-relaxed text-white/80">
            <span className="font-medium text-white/95">Email</span>
            <br />
            <a
              className="break-all underline-offset-2 hover:underline"
              href="mailto:admin@blackstudio.id"
            >
              admin@blackstudio.id
            </a>
          </p>
          <p className="text-sm leading-relaxed text-white/80">
            <span className="font-medium text-white/95">Phone</span>
            <br />
            <a className="hover:underline" href="tel:+628113577793">
              (+62) 81-1357-7793
            </a>
          </p>
        </div>

        <div className="min-w-0 sm:col-span-2 lg:col-span-1">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/90">
            Address
          </h3>
          <p className="max-w-md text-sm leading-relaxed text-white/80">
            Jl. Suropati Gg.9 No.20,
            <br />
            RT.001/RW.008, Pesanggrahan,
            <br />
            Batu, Jawa Timur 65313
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-8 text-center">
        <p className="text-xs font-medium text-white/45">
          BLACKSTUDIO.ID © {new Date().getFullYear()} — Creative production
          house
        </p>
      </div>
    </footer>
  );
}
