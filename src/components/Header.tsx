import { GitHub } from './icons/github';
import { LinkedIn } from './icons/linkedin';
import { Gmail } from './icons/gmail';
import { WhatsApp } from './icons/whatsapp';
import { GoogleMaps } from './icons/google-maps';
import { Firefox } from './icons/firefox';
import { Separator } from '@/components/ui/separator';

export function Header() {
  return (
    <header className="bg-gradient-to-br from-indigo-500 to-purple-700 p-6 pb-0 text-white">
      <div className="mb-4 flex flex-col items-center gap-1.5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          David David
        </h1>
        <div className="flex items-center gap-2 text-base font-medium tracking-wide text-indigo-100 uppercase">
          <span>Senior Software Engineer</span>
        </div>

      </div>

      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 items-start gap-y-4 gap-x-8">
          <div className="flex flex-wrap gap-3 justify-end text-right">
            <a
              href="https://volcmen.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 transition-colors hover:text-white"
              aria-label="Website"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-indigo-100 transition-colors group-hover:bg-white/20 group-hover:text-white">
                <Firefox className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium text-indigo-50 group-hover:text-white">volcmen.github.io</span>
            </a>

            <a
              href="https://linkedin.com/in/volcmen"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 transition-colors hover:text-white"
              aria-label="LinkedIn"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-indigo-100 transition-colors group-hover:bg-white/20 group-hover:text-white">
                <LinkedIn className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium text-indigo-50 group-hover:text-white">/in/volcmen</span>
            </a>

            <a
              href="https://github.com/volcmen"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 transition-colors hover:text-white"
              aria-label="GitHub"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-indigo-100 transition-colors group-hover:bg-white/20 group-hover:text-white">
                <GitHub className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium text-indigo-50 group-hover:text-white">/volcmen</span>
            </a>
          </div>

          <div className="flex flex-col gap-2 items-start">
            <div className="flex flex-wrap gap-4 justify-start">
              <a
                href="mailto:volcmen@gmail.com"
                className="group flex items-center gap-1.5 transition-colors hover:text-white"
                aria-label="Email"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-indigo-100 transition-colors group-hover:bg-white/20 group-hover:text-white">
                  <Gmail className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-indigo-50 group-hover:text-white">volcmen@gmail.com</span>
              </a>

              <div className="group flex items-center gap-1.5" aria-label="Phone">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-indigo-100 transition-colors group-hover:bg-white/20 group-hover:text-white">
                  <WhatsApp className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-indigo-50 group-hover:text-white">+972-50-583-5712</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center justify-center flex-row gap-6">
        <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-0.5 text-xs font-semibold text-indigo-100 ring-1 ring-inset ring-white/20 backdrop-blur-sm hover:bg-white/20 hover:text-white transition-colors">
          <GoogleMaps className="h-4 w-4" />
          <span>Tel-Aviv, Israel</span>
        </div>

        <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-0.5 text-xs font-semibold text-emerald-300 ring-1 ring-inset ring-white/20 backdrop-blur-sm">
          <div className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </div>
          Available for Remote Work
        </div>
      </div>

      <div className="mt-4">
        <Separator className="bg-white/10" />
      </div>
    </header>
  );
}
