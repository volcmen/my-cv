import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { EDUCATION_DATA } from '@/config/education';

export function Education() {
  return (
    <section className="mb-4">
      <div className="mb-4 flex items-center pb-1">
        <h2 className="text-xl font-bold uppercase tracking-wider text-primary">
          Education
        </h2>
      </div>

      <Separator className="mb-4 bg-border h-0.5" />

      <div>
        {EDUCATION_DATA.map(item => (
          <div
            key={item.institution}
            className="mb-5 last:mb-0"
          >
            <div className="mb-2 flex flex-row items-baseline justify-between">
              <div>
                <div className="text-lg font-bold leading-tight tracking-tight text-primary">
                  {item.institution}
                  ,
                  {' '}
                  {item.location}
                </div>

                <div className="mt-1 text-base font-semibold leading-tight text-foreground">
                  {item.program}
                </div>
              </div>
              <Badge
                variant="outline"
                className="shrink-0 rounded-lg border-primary/20 bg-accent px-3 py-1 text-xs font-semibold text-primary"
              >
                {item.period}
              </Badge>
            </div>

            {item.description && (
              <p className="text-sm leading-relaxed text-secondary-foreground">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
