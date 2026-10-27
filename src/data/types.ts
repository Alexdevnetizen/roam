export type Plate = {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
};

export type FieldNote = {
  readonly label: string;
  readonly value: string;
};

export type Destination = {
  readonly id: string;
  readonly name: string;
  readonly region: string;
  readonly coordinates: string;
  /** One line used on the page. */
  readonly summary: string;
  /** Longer opening line inside the notes overlay. */
  readonly intro: string;
  readonly notes: readonly string[];
  readonly fieldNotes: readonly FieldNote[];
  readonly plate: Plate;
  readonly detailPlate: Plate;
};

export type Escape = {
  readonly id: string;
  readonly title: string;
  /** Short line under the title on the card. */
  readonly tagline: string;
  readonly meta: string;
  readonly description: string;
  readonly practice: readonly FieldNote[];
  readonly plate: Plate;
};

export type Principle = {
  readonly id: string;
  readonly title: string;
  readonly body: string;
};

export type JournalEntry = {
  readonly id: string;
  readonly title: string;
  readonly dek: string;
  readonly place: string;
  readonly readingTime: string;
  readonly body: readonly string[];
  readonly plate: Plate;
};

export type NavItem = {
  readonly label: string;
  readonly href: string;
};

export type WorldClock = {
  readonly place: string;
  readonly timeZone: string;
};

export type PhotoCredit = {
  readonly file: string;
  readonly author: string;
  readonly license: string;
};
