import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { journalEntries } from "../../data/journal";
import { useRetained } from "../../hooks/useRetained";
import { Button } from "../ui/Button";
import { Panel, PanelClose } from "../ui/Panel";
import { Plate } from "../ui/Plate";
import { Reveal } from "../ui/Reveal";

export function Journal() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const retainedId = useRetained(activeId);
  const active = journalEntries.find((entry) => entry.id === retainedId) ?? journalEntries[0];
  const [lead, ...rest] = journalEntries;
  const close = () => setActiveId(null);

  return (
    <section id="journal" className="section anchor-offset">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
          <h2 className="t-display t-h2 max-w-[16ch] text-balance">From the travel journal.</h2>
          <p className="t-small max-w-[40ch] text-ink/70">
            Notes on places we have spent real time in, written slowly and without a deadline.
          </p>
        </div>

        <Reveal className="mt-14 lg:mt-20">
          <article className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <button
                type="button"
                onClick={() => setActiveId(lead.id)}
                className="block w-full text-left"
                aria-label={`Read: ${lead.title}`}
              >
                <Plate {...lead.plate} zoom sizes="(min-width: 1024px) 58vw, 100vw" />
              </button>
            </div>
            <div className="lg:col-span-5 lg:self-center">
              <h3 className="t-display t-h3 max-w-[22ch] text-balance">{lead.title}</h3>
              <p className="t-body mt-5 max-w-[46ch] text-ink/80">{lead.dek}</p>
              <p className="t-label mt-7 text-ink/70">
                {lead.place}
                <span aria-hidden="true" className="px-2 text-ink/30">
                  /
                </span>
                {lead.readingTime}
              </p>
              <Button variant="ink" className="mt-7" onClick={() => setActiveId(lead.id)}>
                Read the piece
                <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.6} />
              </Button>
            </div>
          </article>
        </Reveal>

        <div className="mt-20 grid gap-14 border-t border-hairline pt-14 md:grid-cols-2 md:gap-16">
          {rest.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 0.08}>
              <article>
                <button
                  type="button"
                  onClick={() => setActiveId(entry.id)}
                  className="block w-full text-left"
                  aria-label={`Read: ${entry.title}`}
                >
                  <Plate {...entry.plate} zoom sizes="(min-width: 768px) 44vw, 100vw" />
                </button>
                <h3 className="t-display t-h4 mt-7 max-w-[26ch] font-normal">{entry.title}</h3>
                <p className="t-small mt-4 max-w-[42ch] text-ink/80">{entry.dek}</p>
                <p className="t-label mt-5 text-ink/70">
                  {entry.place}
                  <span aria-hidden="true" className="px-2 text-ink/30">
                    /
                  </span>
                  {entry.readingTime}
                </p>
                <Button
                  variant="ghost"
                  className="mt-6"
                  onClick={() => setActiveId(entry.id)}
                  aria-label={`Read the piece: ${entry.title}`}
                >
                  Read the piece
                  <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.6} />
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Panel
        open={Boolean(activeId)}
        onClose={close}
        labelledBy="journal-panel-title"
        className="w-[min(100%,880px)]"
      >
        {active && (
          <div className="flex max-h-[92svh] flex-col">
            <div className="flex items-start justify-between gap-6 px-6 pb-6 pt-6 sm:px-10 sm:pt-9">
              <div>
                <h2 id="journal-panel-title" className="t-display t-h3 max-w-[26ch] text-balance">
                  {active.title}
                </h2>
                <p className="t-label mt-4 text-ink/70">
                  {active.place}
                  <span aria-hidden="true" className="px-2 text-ink/30">
                    /
                  </span>
                  {active.readingTime}
                </p>
              </div>
              <PanelClose onClose={close} label={`Close ${active.title}`} />
            </div>

            <div className="overflow-y-auto px-6 pb-14 sm:px-10">
              <Plate {...active.plate} ratio="16 / 9" sizes="(min-width: 880px) 800px, 100vw" />
              <div className="mt-9 space-y-5">
                {active.body.map((paragraph) => (
                  <p key={paragraph} className="t-body t-measure text-ink/85">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </Panel>
    </section>
  );
}
