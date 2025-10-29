import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skills = [
    'FALE ', 'SOBRE ', 'SUAS','SKILLS',
    'TANTO', 'SOFTS', 'QUANTO ', 'HARD','COMO:','Nmap','Wireshark ',' Metasploit','Power BI','Excel','SQL',
  ]

  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-medium mx-2 mx-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700 animate-wave py-10"> Hard-Skills</h2>
      <div className="flex flex-wrap gap-7 mt--10 mx-4 mx-10">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="text-base py- px-4 border-4 border-gray-200">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  )
  
}


