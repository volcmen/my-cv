import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { experience, type ExperienceItem } from '@/config/experience';

type JobProps = ExperienceItem;

function Job({ company, location, title, duration, achievements }: JobProps) {
  return (
    <div className="mb-6 border-b border-dashed border-slate-200 pb-4 last:mb-0 last:border-0 last:pb-0">
      <div className="mb-2 flex flex-row items-baseline justify-between">
        <div>
          <div className="text-lg font-bold leading-tight tracking-tight text-indigo-500">
            {company}
            <span className="ml-2 text-sm font-medium text-muted-foreground">
              {location}
            </span>
          </div>
          <div className="mt-1 text-base font-semibold leading-tight text-slate-700">{title}</div>
        </div>
        <Badge variant="outline" className="rounded-xl border-violet-300 bg-gradient-to-br from-violet-50 to-violet-200 px-3 py-1 text-xs font-semibold text-violet-800 hover:border-violet-400 hover:text-violet-900">
          {duration}
        </Badge>
      </div>

      <div className="text-slate-700">
        <ul className="list-none pl-0">
          {achievements.map((achievement, index) => (
            <li key={index} className="relative mb-1.5 pl-5 text-sm text-slate-700">
              <span className="absolute left-0 top-0.5 text-lg font-bold leading-none text-indigo-500">•</span>
              <strong>
                {achievement.title}
                :
              </strong>
              {' '}
              {/* eslint-disable-next-line react/no-danger -- allow for experience description */}
              <span dangerouslySetInnerHTML={{ __html: achievement.description }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section className="mb-6">
      <div className="mb-4 flex items-center pb-1">
        <h2 className="text-lg font-bold uppercase tracking-wider text-indigo-500">
          Professional Experience
        </h2>
      </div>

      <Separator className="mb-4 bg-slate-200 h-0.5" />

      <div className="">
        {experience.map((item, index) => (
          <Job key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
