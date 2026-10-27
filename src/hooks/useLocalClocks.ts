import { useEffect, useState } from "react";
import type { WorldClock } from "../data/types";

type Reading = WorldClock & { time: string };

function formatTime(date: Date, timeZone: string): string {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone,
    }).format(date);
  } catch {
    return "--:--";
  }
}

/**
 * Live local times for the places on the page. The tagline says the world is
 * a little closer; this is that sentence, made literal and honest.
 */
export function useLocalClocks(clocks: readonly WorldClock[]): Reading[] {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 20_000);
    return () => window.clearInterval(id);
  }, []);

  return clocks.map((clock) => ({ ...clock, time: formatTime(now, clock.timeZone) }));
}
