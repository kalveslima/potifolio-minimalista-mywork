import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  const experiences = [
    {
      company: "EXPERIENCIA PROFISSIONAL 1 ",
      role: "FALE SOBRE SEU PAPEL",
     
      responsibilities: [
       ,]
    },

    {
      company: "EXPERIENCIA PROFISSIONAL 2 ",
      role: "FALE SOBRE SEU PAPEL",
    
      responsibilities: [
        
      ],
    },

    {
      company: "EXPERIENCIA PROFISSIONAL 3 ",
      role: "FALE SOBRE SEU PAPEL",

      responsibilities: [
        
      ],
    },
  ]

  return (
    <section id="experience" className="py-13 pb-13 pt-2">
      <h2 className="text-3xl font-medium mx-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700"> Experiencia </h2>
      <div className="space-y-8 spacre-y-8  text-lg text-neutral-600 leading-relaxed ">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.company}</CardTitle>
              <p className="text-neutral-600">{exp.role} • </p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-neutral-600 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

