import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { experience, type ExperienceItem } from '@/config/experience';

type JobProps = ExperienceItem;

function Job({ company, location, title, duration, tagline, achievements }: JobProps) {
  return (
    <div className="mb-7 last:mb-0">
      <div className="mb-2 flex flex-row items-baseline justify-between">
        <div>
          <div className="text-lg font-bold leading-tight tracking-tight text-primary">
            {company}
            <span className="ml-2 text-sm font-medium text-muted-foreground">
              {location}
            </span>
          </div>
          <div className="mt-1 text-base font-semibold leading-tight text-foreground">{title}</div>
          {tagline && (
            <div className="mt-0.5 text-sm italic text-muted-foreground">{tagline}</div>
          )}
        </div>
        <Badge variant="outline" className="shrink-0 rounded-lg border-primary/20 bg-accent px-3 py-1 text-xs font-semibold text-primary">
          {duration}
        </Badge>
      </div>

      <div>
        <ul className="list-none pl-0">
          {achievements.map((achievement, index) => (
            <li key={index} className="relative mb-3 pl-5 text-base leading-relaxed text-secondary-foreground">
              <span className="absolute left-0 top-1 text-base leading-none text-primary">•</span>
              <strong className="font-semibold text-foreground">
                {achievement.title}
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
        <h2 className="text-xl font-bold uppercase tracking-wider text-primary">
          Professional Experience
        </h2>
      </div>

      <Separator className="mb-4 bg-border h-0.5" />

      <div>
        {experience.map((item, index) => (
          <Job key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
