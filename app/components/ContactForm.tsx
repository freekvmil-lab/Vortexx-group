"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xgopldrl");

  if (state.succeeded) {
    return (
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur flex flex-col items-center justify-center gap-4 text-center min-h-[300px]">
        <div className="text-4xl">✓</div>
        <p className="text-xl font-bold text-white">Bericht ontvangen!</p>
        <p className="text-slate-400">We nemen zo snel mogelijk contact met je op.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur"
    >
      <div className="grid gap-5">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-200">
            Naam
          </label>
          <input
            type="text"
            name="naam"
            placeholder="Je naam"
            required
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-white placeholder:text-slate-400 focus:border-orange-400 focus:outline-none"
          />
          <ValidationError field="naam" errors={state.errors} className="mt-1 text-sm text-red-400" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-200">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            placeholder="jij@voorbeeld.nl"
            required
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-white placeholder:text-slate-400 focus:border-orange-400 focus:outline-none"
          />
          <ValidationError field="email" errors={state.errors} className="mt-1 text-sm text-red-400" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-200">
            Waar kunnen we je mee helpen?
          </label>
          <textarea
            name="bericht"
            rows={5}
            placeholder="Vertel kort wat je zoekt"
            required
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-white placeholder:text-slate-400 focus:border-orange-400 focus:outline-none"
          />
          <ValidationError field="bericht" errors={state.errors} className="mt-1 text-sm text-red-400" />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="rounded-2xl bg-orange-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/20 transition hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {state.submitting ? "Versturen…" : "Offerte aanvragen"}
        </button>
      </div>
    </form>
  );
}
