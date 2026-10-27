import { principles } from "../../data/site";
import { Reveal } from "../ui/Reveal";

export function Difference() {
  return (
    <section className="bg-sage text-ink">
      <div className="shell section grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <h2 className="t-display t-h2 max-w-[16ch] text-balance">
            The difference is mostly in what we leave out.
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-8">
          <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {principles.map((principle) => (
              <li
                key={principle.id}
                className="border-t border-[color-mix(in_srgb,var(--color-ink)_24%,transparent)] pt-5"
              >
                <h3 className="t-display t-h4 font-normal">{principle.title}</h3>
                <p className="t-small mt-3 max-w-[38ch] text-ink/90">{principle.body}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
