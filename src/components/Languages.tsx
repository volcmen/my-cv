import { Separator } from '@/components/ui/separator';
import { LANGUAGES_DATA } from '@/config/languages';

export function Languages() {
  return (
    <section className="mb-3">
      <div className="mb-4 flex items-center pb-1">
        <h2 className="text-xl font-bold uppercase tracking-wider text-primary">
          Languages
        </h2>
      </div>

      <Separator className="mb-4 h-0.5 bg-border" />

      <div className="grid grid-cols-3 gap-5">
        {LANGUAGES_DATA.map(lang => (
          <div key={lang.name}>
            <h4 className="text-base font-semibold tracking-tight text-foreground">
              {lang.name}
            </h4>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {lang.level}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
