export interface EducationItem {
  institution: string;
  location: string;
  program: string;
  period: string;
  description: string;
}

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'Tel-Ran Educational Center',
    location: 'Israel',
    program: 'Intensive Software Development Program',
    period: '2016 - 2017',
    description:
      'Completed intensive training program specializing in Java Ecosystems, Android SDK, and Backend Architectures. Acquired in-depth proficiency in Memory Management, Concurrency, and Design Patterns (SOLID, MVC), translating complex algorithmic theory into scalable, production-ready software solutions',
  },
  {
    institution: 'University of Technology',
    location: 'Russia',
    program: 'Bachelor of Computer Science (BCS)',
    period: '2011 - 2015',
    description:
      'Completed a comprehensive curriculum with a specialized focus on Software Engineering, Algorithms, and Data Structures. Acquired in-depth proficiency in Object-Oriented Design (OOD), System Architecture, and Discrete Mathematics, providing a robust technical baseline for scalable application development and complex problem-solving',
  },
];
