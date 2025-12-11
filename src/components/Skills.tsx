import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { TECHNICAL_SKILLS } from '@/config/skills';

export function Skills() {
  return (
    <section className="mb-6">
      <div className="mb-4 flex items-center pb-1">
        <h2 className="text-lg font-bold uppercase tracking-widest text-indigo-500">
          Skills & Expertise
        </h2>
      </div>

      <Separator className="mb-4 bg-slate-200 h-0.5" />

      <div className="flex flex-col gap-3">
        {TECHNICAL_SKILLS.map(category => (
          <div key={category.label} className="flex items-start gap-4">
            <h4 className="w-52 shrink-0 text-sm font-bold uppercase tracking-wider text-slate-500">
              {category.label}
            </h4>

            <div className="flex flex-wrap gap-1.5">
              {category.skills.map(skill => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="cursor-default rounded bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-800 border-slate-200 transition-all duration-200 hover:-translate-y-px hover:border-indigo-500 hover:bg-white hover:text-indigo-500 hover:shadow-sm"
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
