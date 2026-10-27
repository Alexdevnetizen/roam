import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { destinations } from "../../data/destinations";
import { useRetained } from "../../hooks/useRetained";
import { Button } from "../ui/Button";
import { Panel, PanelClose } from "../ui/Panel";
import { Plate } from "../ui/Plate";
import { Reveal } from "../ui/Reveal";

export function Destinations() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const retainedId = useRetained(activeId);
  // Falls back to the first entry with nothing open so the heading that
  // labels the dialog always resolves (aria-labelledby), as the dialog itself
  // is display:none until opened.
  const active = destinations.find((item) => item.id === retainedId) ?? destinations[0];

  const [amalfi, marrakech, dolomites] = destinations;
  const close = () => setActiveId(null);

  return (
    <section id="destinations" className="section anchor-offset">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
          <h2 className="t-display t-h2 max-w-[18ch] text-balance">
            Three places we know by heart.
          </h2>
          <p className="t-small max-w-[40ch] text-ink/70">
            Chosen slowly, revisited often. Open the notes for the hours worth having — and when to
            be there to have them.
          </p>
        </div>

        {/* 01 — a wide plate with its notes set alongside */}
        <Reveal className="mt-16 lg:mt-24">
          <article className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Plate {...amalfi.plate} zoom sizes="(min-width: 1024px) 58vw, 100vw" />
            </div>
            <div className="lg:col-span-5 lg:self-end">
              <h3 className="t-display t-h3">{amalfi.name}</h3>
              <p className="t-body mt-5 max-w-[44ch] text-ink/80">{amalfi.summary}</p>
              <p className="t-label mt-7 text-ink/70">
                {amalfi.coordinates}
                <span aria-hidden="true" className="px-2 text-ink/30">
                  /
                </span>
                {amalfi.region}
              </p>
              <Button variant="ghost" className="mt-7" onClick={() => setActiveId(amalfi.id)}>
                Open the notes
                <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.6} />
              </Button>
            </div>
          </article>
        </Reveal>

        {/* 02 — mirrored: notes on the left, a tall plate on the right */}
        <Reveal className="mt-24 lg:mt-32">
          <article className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5 lg:self-center">
              <h3 className="t-display t-h3">{marrakech.name}</h3>
              <p className="t-body mt-5 max-w-[44ch] text-ink/80">{marrakech.summary}</p>
              <p className="t-label mt-7 text-ink/70">
                {marrakech.coordinates}
                <span aria-hidden="true" className="px-2 text-ink/30">
                  /
                </span>
                {marrakech.region}
              </p>
              <Button variant="ghost" className="mt-7" onClick={() => setActiveId(marrakech.id)}>
                Open the notes
                <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.6} />
              </Button>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Plate {...marrakech.plate} zoom sizes="(min-width: 1024px) 46vw, 100vw" />
            </div>
          </article>
        </Reveal>

        {/* 03 — a full-width plate with the notes set into its lower corner */}
        <Reveal className="mt-24 lg:mt-32">
          <article className="relative lg:pb-14">
            <div className="lg:ml-[9%]">
              <Plate
                {...dolomites.plate}
                ratio="none"
                zoom
                sizes="(min-width: 1024px) 85vw, 100vw"
                className="aspect-[4/3] w-full sm:aspect-[16/9]"
              />
            </div>
            <div className="panel-card relative z-10 mx-5 -mt-12 p-6 sm:p-7 lg:absolute lg:bottom-0 lg:left-0 lg:mx-0 lg:mt-0 lg:max-w-[27rem] lg:p-9">
              <h3 className="t-display t-h3">{dolomites.name}</h3>
              <p className="t-body mt-4 text-ink/80">{dolomites.summary}</p>
              <p className="t-label mt-6 text-ink/70">
                {dolomites.coordinates}
                <span aria-hidden="true" className="px-2 text-ink/30">
                  /
                </span>
                {dolomites.region}
              </p>
              <Button variant="ink" className="mt-7" onClick={() => setActiveId(dolomites.id)}>
                Open the notes
                <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.6} />
              </Button>
            </div>
            <div aria-hidden="true" className="hidden lg:block lg:h-16" />
          </article>
        </Reveal>
      </div>

      <Panel
        open={Boolean(activeId)}
        onClose={close}
        labelledBy="destination-notes-title"
        className="w-[min(100%,1040px)]"
      >
        {active && (
          <div className="flex max-h-[92svh] flex-col">
            <div className="flex items-start justify-between gap-6 px-6 pb-5 pt-6 sm:px-10 sm:pt-8">
              <div>
                <h2 id="destination-notes-title" className="t-display t-h3">
                  {active.name}
                </h2>
                <p className="t-label mt-4 text-ink/70">
                  {active.coordinates}
                  <span aria-hidden="true" className="px-2 text-ink/30">
                    /
                  </span>
                  {active.region}
                </p>
              </div>
              <PanelClose onClose={close} label={`Close ${active.name} notes`} />
            </div>

            <div className="overflow-y-auto px-6 pb-12 sm:px-10">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
                <div className="lg:col-span-7">
                  <p className="t-display t-h4 max-w-[34ch] font-normal text-ink/90">
                    {active.intro}
                  </p>
                  <div className="mt-7 space-y-5">
                    {active.notes.map((paragraph) => (
                      <p key={paragraph} className="t-body max-w-[62ch] text-ink/80">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <Plate {...active.detailPlate} sizes="(min-width: 1024px) 40vw, 100vw" />
                  <dl className="mt-7 border-t border-hairline">
                    {active.fieldNotes.map((note) => (
                      <div key={note.label} className="flex gap-5 border-b border-hairline py-3.5">
                        <dt className="t-label w-[4.5rem] shrink-0 pt-0.5 text-ink/70">
                          {note.label}
                        </dt>
                        <dd className="t-small text-ink/85">{note.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        )}
      </Panel>
    </section>
  );
}
