import { ArrowRight } from "lucide-react";
import { closingCta } from "../../data/site";
import { ButtonLink } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function ClosingCTA() {
  return (
    <section className="shell pb-[var(--y-section)]">
      <Reveal>
        <div className="rounded-[var(--r-panel)] bg-ink px-6 py-16 text-ivory sm:px-12 lg:px-20 lg:py-24">
          <h2 className="t-display t-h2 max-w-[16ch] text-balance">Somewhere is calling.</h2>
          <p className="t-body mt-7 max-w-[48ch] text-ivory/80">
            Three places we know properly, and a journal about what makes them worth the journey.
            Start with the destinations; the rest tends to follow.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <ButtonLink href={closingCta.href} variant="terracotta">
              {closingCta.label}
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

          <p className="t-label mt-14 max-w-[52ch] text-ivory/65">
            A fictional brand, built as a front-end design study. Nothing here is bookable.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
