import { Plate } from "../ui/Plate";
import { Reveal } from "../ui/Reveal";

const plate = {
  src: "/images/philosophy.jpg",
  alt: "Rolling hills of the Val d'Orcia: ploughed fields, cypress lines and a farmhouse on a ridge.",
  width: 1500,
  height: 1875,
};

const commitments = [
  "Fewer places, better understood.",
  "Time built in, not filled up.",
  "Local people, first names.",
];

export function Philosophy() {
  return (
    <section id="story" className="section anchor-offset">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <Plate {...plate} zoom sizes="(min-width: 1024px) 40vw, 100vw" />
          <p className="t-label mt-4 text-ink/70">Val d&rsquo;Orcia, Tuscany</p>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <h2 className="t-display t-h2 max-w-[17ch] text-balance">
              Not just places. Ways to feel somewhere.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="t-body mt-8 max-w-[60ch] text-ink/80">
              ROAM exists for the part of travel that happens after the photographs: the long lunch,
              the unplanned turn, the hour spent watching a harbour do nothing at all. Each year we
              choose a handful of places and get to know them properly — the hours worth having, the
              tables worth waiting for, the walks that earn their view.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="t-body mt-5 max-w-[60ch] text-ink/80">
              Nothing here is a checklist. We would rather tell you when to go, and where to be at six
              in the evening, than hand you a week of bookings you did not ask for.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <ul className="mt-12 border-t border-hairline">
              {commitments.map((line) => (
                <li
                  key={line}
                  className="flex items-baseline gap-4 border-b border-hairline py-4"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-terracotta"
                  />
                  <span className="t-display t-h4 font-normal">{line}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
