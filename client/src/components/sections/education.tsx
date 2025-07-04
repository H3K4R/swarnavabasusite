import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpen, Award, Calendar } from "lucide-react";

export default function Education() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  const education = [
    {
      icon: GraduationCap,
      degree: "Master of Business Administration (MBA)",
      institution: "Sikkim Manipal University",
      period: "2025 - 2027",
      description: "Currently pursuing advanced business administration degree to complement technical expertise with business acumen.",
      color: "text-blue-600",
      bgColor: "from-blue-50 to-white",
      status: "In Progress"
    },
    {
      icon: BookOpen,
      degree: "Master of Computer Application (MCA)",
      institution: "Calcutta Institute of Technology",
      period: "Aug 2019 - Jun 2022",
      grade: "DGPA: 8.77",
      description: "Advanced computer science curriculum with focus on software development, system architecture, and emerging technologies.",
      color: "text-green-600",
      bgColor: "from-green-50 to-white",
      status: "Completed"
    },
    {
      icon: BookOpen,
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Meghnad Saha Institute of Technology",
      period: "Jun 2016 - Jul 2019",
      grade: "DGPA: 7.22",
      description: "Foundation in computer applications, programming languages, and software development methodologies.",
      color: "text-orange-600",
      bgColor: "from-orange-50 to-white",
      status: "Completed"
    }
  ];

  const certifications = [
    "Microsoft Azure Fundamentals (AZ-900)",
    "Microsoft Azure AI Fundamentals (AI-900)",
    "Microsoft Azure Data Fundamentals (DP-900)",
    "Microsoft Power Platform Fundamentals (PL-900)",
    "Microsoft Security, Compliance, and Identity Fundamentals (SC-900)",
    "OCI Foundations Associate [1Z0-1085-21]"
  ];

  return (
    <section id="education" className="section-padding bg-gradient-to-br from-orange-50 to-yellow-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development in technology and business
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <Card className={`bg-gradient-to-br ${edu.bgColor} p-8 shadow-lg card-3d hover:shadow-xl transition-all duration-300 h-full`}>
                <CardContent className="p-0">
                  <div className="flex items-start mb-6">
                    <div className={`w-12 h-12 ${edu.color} bg-white rounded-full flex items-center justify-center mr-4 shadow-md`}>
                      <edu.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === 'In Progress' 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'bg-green-100 text-green-700'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                      <p className={`font-medium ${edu.color} mb-2`}>{edu.institution}</p>
                      <div className="flex items-center text-gray-600 text-sm mb-4">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{edu.period}</span>
                        {edu.grade && <span className="ml-4 font-medium">{edu.grade}</span>}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-purple-50 to-white p-8 shadow-lg card-3d hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 text-purple-600 bg-white rounded-full flex items-center justify-center mr-4 shadow-md">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Professional Certifications</h3>
                  <p className="text-purple-600 font-medium">Microsoft & Oracle Cloud Technologies</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
