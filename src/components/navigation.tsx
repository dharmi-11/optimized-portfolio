import Link from "next/link";

type NavigationItem = {
  href: string;
  label: string;
};

type NavigationProps = {
  items: ReadonlyArray<NavigationItem>;
};

export function Navigation({ items }: NavigationProps) {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand-mark" aria-label="Portfolio home">
          <span className="brand-glyph">P</span>
          <span className="brand-copy">
            <span>Portfolio</span>
            <span>Week 20 production build</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {items.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
