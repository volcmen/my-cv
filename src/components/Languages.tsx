import { Separator } from '@/components/ui/separator';

export function Languages() {
  return (
    <section className="mb-6">
      <div className="mb-4 flex items-center pb-1">
        <h2 className="text-lg font-bold uppercase tracking-wider text-indigo-500">
          Languages
        </h2>
      </div>

      <Separator className="mb-4 bg-slate-200 h-0.5" />

      <div className="grid grid-cols-3 gap-4">
        <div className="m-0 border-l-2 border-slate-200 bg-transparent p-0 pl-4 text-left">
          <h4 className="mb-0.5 text-base font-bold text-slate-800">Russian</h4>
          <p className="text-base text-slate-700">Native</p>
        </div>

        <div className="m-0 border-l-2 border-slate-200 bg-transparent p-0 pl-4 text-left">
          <h4 className="mb-0.5 text-base font-bold text-slate-800">English</h4>
          <p className="text-base text-slate-700">Professional Proficiency</p>
        </div>

        <div className="m-0 border-l-2 border-slate-200 bg-transparent p-0 pl-4 text-left">
          <h4 className="mb-0.5 text-base font-bold text-slate-800">Hebrew</h4>
          <p className="text-base text-slate-700">Intermediate</p>
        </div>
      </div>
    </section>
  );
}
