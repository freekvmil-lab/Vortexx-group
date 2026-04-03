"use client";

import { useState } from "react";

interface FlipServiceCardProps {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
}

export default function FlipServiceCard({
  title,
  text,
  imageSrc,
  imageAlt,
  imageClassName = "h-full w-full object-cover",
}: FlipServiceCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop: CSS hover flip */}
      <div className="hidden md:block group [perspective:1000px] h-[280px]">
        <div className="relative h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <article className="absolute inset-0 [backface-visibility:hidden] rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm flex flex-col">
            <div className="flex items-start justify-between">
              <h3 className="text-2xl font-black tracking-tight text-slate-950">{title}</h3>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-lg font-black text-orange-600 ml-3">+</div>
            </div>
            <p className="mt-4 text-base leading-7 text-slate-600">{text}</p>
            <div className="mt-auto pt-4 text-sm font-bold text-orange-500">Meer weten →</div>
          </article>
          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[1.75rem] overflow-hidden border border-slate-200 shadow-sm bg-white">
            <img src={imageSrc} alt={imageAlt} className={imageClassName} />
          </div>
        </div>
      </div>

      {/* Mobiel: tik op knop om afbeelding te tonen/verbergen */}
      <article className="md:hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm flex flex-col overflow-hidden">
        <div className="p-7">
          <div className="flex items-start justify-between">
            <h3 className="text-2xl font-black tracking-tight text-slate-950">{title}</h3>
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-lg font-black text-orange-600 ml-3">
              {open ? "−" : "+"}
            </div>
          </div>
          <p className="mt-4 text-base leading-7 text-slate-600">{text}</p>
          <button
            type="button"
            className="mt-4 text-sm font-bold text-orange-500"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? "Sluiten ↑" : "Tik voor meer →"}
          </button>
        </div>
        {open && (
          <img src={imageSrc} alt={imageAlt} className="w-full h-48 object-cover" />
        )}
      </article>
    </>
  );
}

