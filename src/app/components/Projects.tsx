import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Personal Blog',
    description: 'A blog built with Next.js and MDX',
    image: `${process.env.NODE_ENV === 'production' ? '/chinedum-portfolio' : ''}/Screenshot-MyBlog.png`,
    tech: ['Next.js', 'MDX', 'Tailwind CSS'],
    github: 'https://github.com/ceedev23/My-Blog',
    live: 'https://ceedev23.github.io/My-Blog'
  },
  {
    title: 'Weather App',
    description: 'Real-time weather app using React and OpenWeather API',
    image: `${process.env.NODE_ENV === 'production' ? '/chinedum-portfolio' : ''}/weather-preview.png`,
    tech: ['React', 'OpenWeather API', 'CSS'],
    github: 'https://github.com/yourusername/weather-app',
    live: 'https://weather-qyaypn1xc-cees-projects-eabc4959.vercel.app/'
  },
  {
    title: 'Task Manager',
    description: 'A full-stack task management application',
    image: '/task-preview.jpg',
    tech: ['Next.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/task-manager',
    live: 'https://your-task-manager-url.com'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={project.title === 'Personal Blog'}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                    <span>Code</span>
                  </Link>
                  <Link
                    href={project.live}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>Live Demo</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 