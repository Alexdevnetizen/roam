import { Plate } from "../ui/Plate";
import { Reveal } from "../ui/Reveal";

export function HorizonBand() {
  return (
    <Reveal className="pb-[var(--y-section)]">
      <div className="shell">
        <Plate
          src="/images/horizon-band.jpg"
          alt="Alpe di Siusi: a wide alpine meadow with a single walker facing the peaks of the Dolomites."
          width={2560}
          height={1080}
          ratio="none"
          zoom
          sizes="100vw"
          className="aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[21/9]"
        />
        <p className="t-label mt-4 text-ink/70">
          Alpe di Siusi, Dolomites
          <span aria-hidden="true" className="px-2 text-ink/30">
            /
          </span>
          1,840 m
        </p>
      </div>
    </Reveal>
  );
}
