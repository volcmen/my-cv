import { Header } from './components/Header';
import { Summary } from './components/Summary';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Languages } from './components/Languages';

export function App() {
  return (
    <div className="min-h-screen bg-background px-4 py-8 font-sans text-foreground">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-lg bg-card shadow-lg ring-1 ring-border border-0">
          <Header />

          <main className="p-6 space-y-6">
            <Summary />

            <div>
              <Skills />
              <Experience />

              <Education />
              <Languages />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
