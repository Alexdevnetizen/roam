import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { brand, navItems, primaryCta } from "../../data/site";
import { cn } from "../../lib/cn";
import { ButtonLink } from "../ui/Button";
import { Panel, PanelClose } from "../ui/Panel";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 14);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
        scrolled
          ? "border-b border-hairline bg-ivory text-ink"
          : "border-b border-transparent text-ivory",
      )}
    >
      <div className="shell flex h-[72px] items-center justify-between gap-6">
        <a
          href="#top"
          className="inline-block py-2 -my-2 font-display text-[1.3rem] font-medium uppercase leading-none tracking-[0.26em]"
        >
          {brand.name}
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-block py-2 -my-2 t-small decoration-1 underline-offset-[7px] hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <ButtonLink
            href={primaryCta.href}
            variant={scrolled ? "ink" : "ivory"}
            className="min-h-[42px] px-5 text-[0.85rem]"
          >
            {primaryCta.label}
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          className="inline-flex size-11 items-center justify-center rounded-full border border-current/30 md:hidden"
        >
          <Menu aria-hidden="true" className="size-5" strokeWidth={1.5} />
          <span className="sr-only">Open menu</span>
        </button>
      </div>

      <Panel
        variant="menu"
        id="site-menu"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        labelledBy="site-menu-title"
      >
        <div className="flex h-full flex-col">
          <div className="shell flex h-[72px] shrink-0 items-center justify-between gap-6">
            <p
              id="site-menu-title"
              className="font-display text-[1.3rem] font-medium uppercase leading-none tracking-[0.26em] text-ivory"
            >
              {brand.name}
            </p>
            <PanelClose
              onClose={() => setMenuOpen(false)}
              label="Close menu"
              className="border-hairline-light text-ivory hover:border-ivory"
            />
          </div>

          <nav aria-label="Primary" className="shell flex-1 pt-10">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="t-display t-h3 block text-ivory/90 transition-colors duration-300 hover:text-terracotta"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="shell shrink-0 pb-10">
            <ButtonLink
              href={primaryCta.href}
              variant="terracotta"
              onClick={() => setMenuOpen(false)}
              className="w-full"
            >
              {primaryCta.label}
            </ButtonLink>
            <p className="t-label mt-6 text-ivory/65">{brand.tagline}</p>
          </div>
        </div>
      </Panel>
    </header>
  );
}
