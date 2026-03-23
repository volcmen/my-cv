import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { TECHNICAL_SKILLS } from '@/config/skills';

export function Skills() {
  return (
    <section className="mb-5">
      <div className="mb-4 flex items-center pb-1">
        <h2 className="text-xl font-bold uppercase tracking-wider text-primary">
          Skills & Expertise
        </h2>
      </div>

      <Separator className="mb-4 bg-border h-0.5" />

      <div className="flex flex-col">
        {TECHNICAL_SKILLS.map(category => (
          <div
            key={category.label}
            className="flex items-baseline gap-4 py-1.5"
          >
            <h4 className="w-44 shrink-0 text-[13px] font-semibold uppercase tracking-wider text-muted-foreground">
              {category.label}
            </h4>

            <div className="flex flex-wrap gap-1">
              {category.skills.map(skill => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="cursor-default rounded-md bg-secondary px-2.5 py-0.5 text-[13px] font-medium text-foreground border-0 transition-all duration-200 hover:-translate-y-px hover:bg-border hover:shadow-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
