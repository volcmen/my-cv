import type { ComponentType, SVGProps } from 'react';
import { GitHub } from './icons/github';
import { LinkedIn } from './icons/linkedin';
import { Gmail } from './icons/gmail';
import { WhatsApp } from './icons/whatsapp';
import { GoogleMaps } from './icons/google-maps';
import { Firefox } from './icons/firefox';

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

const CONTACT_LINKS: {
  icon: Icon;
  label: string;
  text: string;
  href?: string;
}[] = [
  { icon: Firefox, label: 'Website', text: 'volcmen.github.io', href: 'https://volcmen.github.io' },
  { icon: LinkedIn, label: 'LinkedIn', text: '/in/volcmen', href: 'https://linkedin.com/in/volcmen' },
  { icon: GitHub, label: 'GitHub', text: '/volcmen', href: 'https://github.com/volcmen' },
  { icon: Gmail, label: 'Email', text: 'volcmen@gmail.com', href: 'mailto:volcmen@gmail.com' },
  { icon: WhatsApp, label: 'Phone', text: '+972-50-583-5712' },
];

export function Header() {
  return (
    <header className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-blue-800 via-blue-900 to-slate-900 px-6 pt-8 pb-0 text-white">
      {/* Subtle radial glow behind the name */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(30,64,175,0.18),transparent)]" />

      <div className="relative mb-5 flex flex-col items-center gap-2 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-sm">
          David David
        </h1>
        <p className="text-sm font-semibold tracking-[0.2em] text-blue-200/80 uppercase">
          Senior Software Engineer · Platform · AI · Distributed Systems
        </p>
      </div>

      {/* Thin decorative rule */}
      <div className="relative mx-auto mb-5 h-px w-32 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

      <nav className="relative mx-auto max-w-3xl" aria-label="Contact links">
        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {CONTACT_LINKS.map(({ icon: Icon, label, text, href }) => (
            <li key={label}>
              <ContactItem icon={Icon} href={href} label={label}>
                {text}
              </ContactItem>
            </li>
          ))}
        </ul>
      </nav>

      <div className="relative mt-5 flex items-center justify-center gap-3">
        <div className="flex items-center gap-1.5 rounded-full bg-white/[0.07] px-3.5 py-1 text-[13px] font-medium text-blue-100/90 ring-1 ring-inset ring-white/[0.12] backdrop-blur-sm">
          <GoogleMaps className="h-4 w-4 shrink-0" />
          <span>Tel-Aviv, Israel</span>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-1 text-[13px] font-semibold text-emerald-300 ring-1 ring-inset ring-emerald-400/20 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for Remote Work
        </div>
      </div>

      {/* Bottom fade-out edge */}
      <div className="mt-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </header>
  );
}

const itemClassName =
  'inline-flex items-center gap-1.5 text-sm font-medium text-blue-100/90 transition-colors hover:text-white';

function ContactItem({
  icon: Icon,
  href,
  label,
  children,
}: {
  icon: Icon;
  href?: string;
  label: string;
  children: React.ReactNode;
}) {
  const content = (
    <>
      <Icon className="h-4 w-4 shrink-0" aria-hidden />
      {children}
    </>
  );

  if (!href) {
    return (
      <span className={itemClassName} aria-label={label}>
        {content}
      </span>
    );
  }

  const isExternal = !href.startsWith('mailto:');

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={itemClassName}
      aria-label={label}
    >
      {content}
    </a>
  );
}
