export interface EducationItem {
  institution: string;
  location: string;
  program: string;
  period: string;
  description?: string;
}

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'Tel-Ran College of Programming & Software Engineering',
    location: 'Israel',
    program: 'Full Stack Software Development Program',
    period: '2016 - 2017',
    description: 'Full stack engineering (backend + frontend), data structures, concurrency, design patterns (SOLID, MVC). Accredited by Israeli Ministry of Labor & Economy.',
  },
  {
    institution: 'Russian State Social University (RGSU)',
    location: 'Russia',
    program: 'Bachelor of Computer Science & Computing Technology',
    period: '2011 - 2015',
    description: 'Algorithms, data structures, system architecture, object-oriented design, discrete mathematics. State-accredited university. Faculty of Information Technologies.',
  },
];
