import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { brand, primaryCta, worldClocks } from "../../data/site";
import { useLocalClocks } from "../../hooks/useLocalClocks";
import { ButtonLink } from "../ui/Button";
import { Plate } from "../ui/Plate";

function ScrollCue() {
  return (
    <span className="t-label hidden shrink-0 items-center gap-3 text-ivory/70 sm:inline-flex">
      <span
        aria-hidden="true"
        className="relative block h-9 w-px overflow-hidden bg-hairline-light"
      >
        <span className="scroll-dot" />
      </span>
      Scroll
    </span>
  );
}

export function Hero() {
  const clocks = useLocalClocks(worldClocks);
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={
          reduceMotion
            ? false
            : { clipPath: "inset(6% 6% 6% 6%)", scale: 1.06, opacity: 0.5 }
        }
        animate={
          reduceMotion ? undefined : { clipPath: "inset(0% 0% 0% 0%)", scale: 1, opacity: 1 }
        }
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Plate
          src="/images/hero.jpg"
          alt="The Amalfi Coast at dusk: a headland of lit houses above a dark sea, seen from the water."
          width={2560}
          height={1440}
          ratio="auto"
          priority
          className="size-full rounded-none plate--on-dark"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(18,22,18,0.84)_0%,rgba(18,22,18,0.44)_34%,rgba(18,22,18,0.10)_62%,rgba(18,22,18,0.36)_100%)]"
        />
      </motion.div>

      <div className="shell relative z-10 mt-auto pt-32 text-ivory">
        <h1 className="t-display t-hero max-w-[15ch] text-balance">{brand.tagline}</h1>
        <p className="t-body mt-6 max-w-[38ch] text-ivory/85">{brand.statement}</p>
        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
          <ButtonLink href={primaryCta.href} variant="ivory">
            {primaryCta.label}
            <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.6} />
          </ButtonLink>
          <a
            href="#journal"
            className="link-arrow border-b border-hairline-light text-ivory hover:border-terracotta"
          >
            Read the journal
            <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.6} />
          </a>
        </div>
      </div>

      <div className="shell relative z-10 mt-16">
        <div className="flex items-end justify-between gap-6 border-t border-hairline-light py-5">
          <p className="t-label text-ivory/60">
            Local time
            {clocks.map((clock) => (
              <span key={clock.place} className="whitespace-nowrap">
                <span aria-hidden="true" className="px-2 text-ivory/35">
                  /
                </span>
                {clock.place} <span className="t-numeric text-ivory/90">{clock.time}</span>
              </span>
            ))}
          </p>
          <ScrollCue />
        </div>
      </div>
    </section>
  );
}
