import { brand, copyright, elsewhere, fictionNote, navItems, photoCredits } from "../../data/site";
import { Newsletter } from "../ui/Newsletter";

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="shell py-[72px] lg:py-[88px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <p className="font-display text-[1.3rem] font-medium uppercase leading-none tracking-[0.26em]">
              {brand.name}
            </p>
            <p className="t-body mt-5 max-w-[34ch] text-ink/75">{brand.statement}</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2">
            <h2 className="t-label text-ink/70">Visit</h2>
            <ul className="mt-5 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-block py-1 -my-1 t-small decoration-1 underline-offset-[6px] text-ink/80 hover:text-ink hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#journal"
                  className="t-small decoration-1 underline-offset-[6px] text-ink/80 hover:text-ink hover:underline"
                >
                  Journal
                </a>
              </li>
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="t-label text-ink/70">Elsewhere</h2>
            <ul className="mt-5 space-y-2.5">
              {elsewhere.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-block py-1 -my-1 t-small decoration-1 underline-offset-[6px] text-ink/80 hover:text-ink hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h2 className="t-label text-ink/70">Notes by email</h2>
            <Newsletter />
          </div>
        </div>

        <div className="mt-16 border-t border-hairline pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="t-small t-numeric text-ink/70">{copyright}</p>
            <a
              href="#top"
              className="inline-block py-2 -my-2 t-small text-ink/70 underline-offset-[6px] hover:text-ink hover:underline"
            >
              Back to top
            </a>
          </div>

          <p className="t-small mt-6 max-w-[86ch] text-ink/70">{fictionNote}</p>

          <details className="mt-5">
            <summary className="inline-block py-2 -my-2 t-label cursor-pointer list-none text-ink/70 hover:text-ink">
              Photography credits
            </summary>
            <ul className="mt-4 grid gap-x-10 gap-y-1.5 sm:grid-cols-2">
              {photoCredits.map((credit) => (
                <li key={credit.file} className="t-small text-ink/70">
                  {credit.file} — {credit.author} ({credit.license})
                </li>
              ))}
            </ul>
            <p className="t-small mt-4 max-w-[86ch] text-ink/70">
              Sourced from Wikimedia Commons and used under the licences above. Each file is a
              cropped, colour-graded derivative of the named original; CC BY-SA derivatives remain
              under the same licence.
            </p>
          </details>
        </div>
      </div>
    </footer>
  );
}
