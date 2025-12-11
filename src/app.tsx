import { Header } from './components/Header';
import { Summary } from './components/Summary';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Languages } from './components/Languages';

export function App() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 font-sans text-slate-800">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-slate-900/5 border-0">
          <Header />

          <main className="p-6 space-y-6">
            <Summary />

            <div>
              <Experience />

              <Skills />
              <Education />
              <Languages />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
