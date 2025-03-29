import { Code2 } from 'lucide-react';

export default function Skills() {
  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "SQL", "MongoDB"] },
    { category: "Tools & Platforms", items: ["Git", "VS Code", "Framer", "Adobe Suite"] }
  ];

  return (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <Code2 className="text-[hsl(var(--blue))]" size={24} />
        <h3 className="text-2xl font-semibold text-white">Technical Skills</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="p-4 rounded-lg border border-gray-700 bg-gray-800/50">
            <h4 className="font-medium mb-2 text-white">{skillGroup.category}</h4>
            <ul className="space-y-1">
              {skillGroup.items.map((skill) => (
                <li key={skill} className="text-gray-400">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
} 