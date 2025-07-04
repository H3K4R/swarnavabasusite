import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Calendar } from "lucide-react";

export default function Experience() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Techno Exponent",
      period: "Dec 2022 - Present",
      location: "Kolkata, India",
      achievements: [
        "Server administration and troubleshooting on Linux/Unix systems",
        "Building development pipelines and deployment automation",
        "Managing infrastructure using Terraform and Ansible",
        "Docker and ECS container orchestration",
        "NodeJs, NextJs, Python, Laravel application deployment"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "DevOps Engineer",
      company: "Codelogicx Technologies",
      period: "Oct 2021 - Dec 2022",
      location: "Kolkata, India",
      achievements: [
        "Deep working knowledge of AWS, Azure, and GCP",
        "Built scalable applications using Docker and Kubernetes",
        "Developed monitoring and alerting tools",
        "Web services installation, configuration, and maintenance",
        "Working closely with developers for CI/CD pipeline development"
      ],
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Work Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            4+ years of progressive experience in cloud infrastructure and DevOps engineering
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-green-500 rounded-full" />
            
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 50 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className={`relative flex items-center justify-between mb-16 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className={`bg-gradient-to-br ${index % 2 === 0 ? 'from-blue-50 to-white' : 'from-green-50 to-white'} p-6 shadow-lg card-3d hover:shadow-xl transition-all duration-300`}>
                    <CardContent className="p-0">
                      <div className="flex items-center mb-4">
                        <Building className={`h-6 w-6 ${index % 2 === 0 ? 'text-blue-600' : 'text-green-600'} mr-3`} />
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                          <p className={`font-medium ${index % 2 === 0 ? 'text-blue-600' : 'text-green-600'}`}>
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-gray-600 text-sm mb-4">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{exp.period} | {exp.location}</span>
                      </div>
                      
                      <ul className="text-gray-600 text-sm space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            transition={{ duration: 0.6, delay: index * 0.3 + achievementIndex * 0.1 }}
                            className="flex items-start"
                          >
                            <span className={`w-2 h-2 ${exp.color} bg-gradient-to-r rounded-full mr-3 mt-2 flex-shrink-0`} />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isIntersecting ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.3 + 0.2 }}
                  className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white shadow-lg z-10`}
                />

                {/* Empty space for alternating layout */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
