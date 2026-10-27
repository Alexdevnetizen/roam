import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { escapes } from "../../data/escapes";
import { useRetained } from "../../hooks/useRetained";
import { Panel, PanelClose } from "../ui/Panel";
import { Plate } from "../ui/Plate";
import { Reveal } from "../ui/Reveal";

export function Experiences() {
  const trackRef = useRef<HTMLUListElement>(null);
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState<string | null>(null);
  const retainedId = useRetained(activeId);
  const active = escapes.find((item) => item.id === retainedId) ?? escapes[0];
  const [position, setPosition] = useState({ atStart: true, atEnd: false, progress: 0 });

  const readPosition = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    const progress = max > 0 ? track.scrollLeft / max : 0;
    setPosition({
      atStart: track.scrollLeft <= 4,
      atEnd: max <= 4 || track.scrollLeft >= max - 4,
      progress,
    });
  }, []);

  useEffect(() => {
    readPosition();
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", readPosition, { passive: true });
    window.addEventListener("resize", readPosition);
    return () => {
      track.removeEventListener("scroll", readPosition);
      window.removeEventListener("resize", readPosition);
    };
  }, [readPosition]);

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("li");
    const distance = card ? card.getBoundingClientRect().width + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * distance, behavior: reduceMotion ? "auto" : "smooth" });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
    } else if (event.key === "Home") {
      event.preventDefault();
      trackRef.current?.scrollTo({ left: 0, behavior: reduceMotion ? "auto" : "smooth" });
    } else if (event.key === "End") {
      event.preventDefault();
      const track = trackRef.current;
      if (track)
        track.scrollTo({
          left: track.scrollWidth,
          behavior: reduceMotion ? "auto" : "smooth",
        });
    }
  };

  return (
    <section id="escapes" className="section anchor-offset overflow-hidden">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
          <h2 className="t-display t-h2 max-w-[16ch] text-balance">Curated escapes.</h2>
          <p className="t-small max-w-[40ch] text-ink/70">
            Three ways we like to spend a day. Most of our trips are some combination of all of
            them.
          </p>
        </div>
      </div>

      {/* Horizontal shelf: native scroll + snap, so touch swipe is free and
          the arrow keys work on the focused track. */}
      <Reveal className="mt-14 lg:mt-20">
        <ul
          ref={trackRef}
          tabIndex={0}
          role="group"
          aria-label="Curated escapes — scroll or use the arrow keys"
          onKeyDown={handleKeyDown}
          className="track flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-[var(--gutter)] pb-6 [scroll-padding-inline:var(--gutter)] focus-visible:outline-2"
        >
          {escapes.map((escape, index) => (
            <li
              key={escape.id}
              className="w-[78vw] shrink-0 snap-start sm:w-[58vw] lg:w-[34rem]"
            >
              <button
                type="button"
                onClick={() => setActiveId(escape.id)}
                className="group block w-full text-left"
                aria-label={`More about ${escape.title}`}
              >
                <Plate {...escape.plate} zoom sizes="(min-width: 1024px) 34rem, 78vw" />
                <div className="mt-6 flex items-baseline justify-between gap-4">
                  <h3 className="t-display t-h3 transition-colors duration-300 group-hover:text-terracotta">
                    {escape.title}
                  </h3>
                  <span className="t-label shrink-0 text-ink/70">
                    {String(index + 1).padStart(2, "0")} / {String(escapes.length).padStart(2, "0")}
                  </span>
                </div>
                <p className="t-body mt-4 max-w-[42ch] text-ink/80">{escape.tagline}</p>
                <p className="t-label mt-5 text-ink/70">{escape.meta}</p>
              </button>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="shell mt-6 flex items-center gap-6">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-disabled={position.atStart}
            aria-label="Previous escape"
            className="inline-flex size-11 items-center justify-center rounded-full border border-hairline transition-colors duration-300 hover:border-ink aria-disabled:pointer-events-none aria-disabled:opacity-35"
          >
            <ChevronLeft aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-disabled={position.atEnd}
            aria-label="Next escape"
            className="inline-flex size-11 items-center justify-center rounded-full border border-hairline transition-colors duration-300 hover:border-ink aria-disabled:pointer-events-none aria-disabled:opacity-35"
          >
            <ChevronRight aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="relative h-px flex-1 overflow-hidden bg-hairline" aria-hidden="true">
          <motion.span
            className="absolute inset-0 origin-left bg-terracotta"
            animate={{ scaleX: Math.max(0.08, position.progress) }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>

      <Panel
        open={Boolean(activeId)}
        onClose={() => setActiveId(null)}
        labelledBy="escape-panel-title"
        className="w-[min(100%,860px)]"
      >
        {active && (
          <div className="flex max-h-[92svh] flex-col">
            <div className="flex items-start justify-between gap-6 px-6 pb-5 pt-6 sm:px-10 sm:pt-8">
              <div>
                <h2 id="escape-panel-title" className="t-display t-h3">
                  {active.title}
                </h2>
                <p className="t-label mt-4 text-ink/70">{active.meta}</p>
              </div>
              <PanelClose onClose={() => setActiveId(null)} label={`Close ${active.title}`} />
            </div>
            <div className="overflow-y-auto px-6 pb-12 sm:px-10">
              <Plate {...active.plate} ratio="16 / 9" sizes="(min-width: 860px) 780px, 100vw" />
              <p className="t-display t-h4 mt-8 max-w-[38ch] font-normal text-ink/90">
                {active.description}
              </p>
              <dl className="mt-8 border-t border-hairline">
                {active.practice.map((note) => (
                  <div key={note.label} className="flex gap-5 border-b border-hairline py-3.5">
                    <dt className="t-label w-[4.5rem] shrink-0 pt-0.5 text-ink/70">{note.label}</dt>
                    <dd className="t-small text-ink/85">{note.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        )}
      </Panel>
    </section>
  );
}
