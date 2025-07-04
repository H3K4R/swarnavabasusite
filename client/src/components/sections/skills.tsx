import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import SkillBar from "@/components/ui/skill-bar";
import { Cloud, Settings, Code } from "lucide-react";

export default function Skills() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  const skillCategories = [
    {
      icon: Cloud,
      title: "Cloud Platforms",
      color: "from-blue-50 to-white",
      iconColor: "text-blue-600",
      skills: [
        { name: "Microsoft Azure", percentage: 90, color: "from-blue-500 to-blue-600" },
        { name: "AWS", percentage: 85, color: "from-orange-500 to-orange-600" },
        { name: "Google Cloud Platform", percentage: 80, color: "from-green-500 to-green-600" },
        { name: "Oracle Cloud Infrastructure", percentage: 75, color: "from-red-500 to-red-600" },
      ]
    },
    {
      icon: Settings,
      title: "DevOps & Containers",
      color: "from-green-50 to-white",
      iconColor: "text-green-600",
      skills: [
        { name: "Docker", percentage: 90, color: "from-blue-400 to-blue-600" },
        { name: "Kubernetes", percentage: 85, color: "from-purple-500 to-purple-600" },
        { name: "Terraform", percentage: 88, color: "from-indigo-500 to-indigo-600" },
        { name: "Ansible", percentage: 82, color: "from-red-500 to-red-600" },
      ]
    },
    {
      icon: Code,
      title: "Programming & Database",
      color: "from-orange-50 to-white",
      iconColor: "text-orange-600",
      skills: [
        { name: "Python", percentage: 85, color: "from-yellow-500 to-yellow-600" },
        { name: "Linux/Unix", percentage: 90, color: "from-gray-600 to-gray-700" },
        { name: "MySQL", percentage: 80, color: "from-blue-600 to-blue-700" },
        { name: "Git & GitHub", percentage: 88, color: "from-gray-800 to-black" },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expertise across cloud platforms, DevOps tools, and modern development practices
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <Card className={`bg-gradient-to-br ${category.color} p-8 shadow-lg card-3d hover:shadow-xl transition-all duration-300`}>
                <CardContent className="p-0">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 ${category.iconColor} mx-auto mb-4 rounded-full bg-white shadow-md flex items-center justify-center`}>
                      <category.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 
                        }}
                      >
                        <SkillBar
                          skill={skill.name}
                          percentage={skill.percentage}
                          color={skill.color}
                          delay={categoryIndex * 0.2 + skillIndex * 0.1}
                        />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "CI/CD", "ECS/EKS", "Node.js", "Next.js", "Laravel", "Monitoring & Alerting",
              "Load Balancing", "Auto Scaling", "Microservices", "API Gateway"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={isIntersecting ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.05 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
