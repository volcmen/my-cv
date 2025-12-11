import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { EDUCATION_DATA } from '@/config/education';

export function Education() {
  return (
    <section className="mb-6">
      <div className="mb-4 flex items-center pb-1">
        <h2 className="text-lg font-bold uppercase tracking-wider text-indigo-500">
          Education
        </h2>
      </div>

      <Separator className="mb-4 bg-slate-200 h-0.5" />
      <div className="">
        {EDUCATION_DATA.map(item => (
          <div
            key={item.institution}
            className="mb-6 border-b border-dashed border-slate-200 pb-4 last:mb-0 last:border-0 last:pb-0"
          >
            <div className="mb-2 flex flex-row items-baseline justify-between">
              <div>
                <div className="text-lg font-bold leading-tight tracking-tight text-indigo-500">
                  {item.institution}
                  ,
                  {' '}
                  {item.location}
                </div>

                <div className="mt-1 text-base font-semibold leading-tight text-slate-700">
                  {item.program}
                </div>
              </div>
              <Badge
                variant="outline"
                className="rounded-xl border-violet-300 bg-gradient-to-br from-violet-50 to-violet-200 px-3 py-1 text-xs font-semibold text-violet-800 hover:border-violet-400 hover:text-violet-900"
              >
                {item.period}
              </Badge>
            </div>

            <div className="text-slate-700">
              <p className="text-sm leading-relaxed text-slate-700">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
