import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, GitBranch, Award } from "lucide-react";

export default function Achievements() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  const achievements = [
    {
      icon: Trophy,
      title: "Microsoft Learn Student Ambassador",
      year: "2021",
      description: "Student ambassador at Microsoft, promoting technology education and community engagement.",
      color: "text-blue-600",
      bgColor: "from-blue-50 to-white"
    },
    {
      icon: GitBranch,
      title: "Hacktoberfest Contributor",
      year: "2020, 2022, 2023",
      description: "Successfully completed 4+ pull requests each year, contributing to open source projects by Digital Ocean.",
      color: "text-green-600",
      bgColor: "from-green-50 to-white"
    },
    {
      icon: Award,
      title: "Multiple Cloud Certifications",
      year: "2021-2022",
      description: "Earned 5+ professional certifications across Microsoft Azure, Oracle Cloud, and Power Platform technologies.",
      color: "text-orange-600",
      bgColor: "from-orange-50 to-white"
    }
  ];

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Achievements & Recognition</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition for contributions to technology community and professional excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className={`text-center bg-gradient-to-br ${achievement.bgColor} p-8 shadow-lg card-3d hover:shadow-xl transition-all duration-300 h-full`}>
                <CardContent className="p-0">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isIntersecting ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    className={`w-16 h-16 ${achievement.color} bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <achievement.icon className="h-8 w-8" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                  <p className={`font-medium ${achievement.color} mb-4 text-sm`}>{achievement.year}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Interests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Interests & Hobbies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Podcast", "Football", "Books", "Stock Market", "Open Source", "Cloud Innovation"].map((interest, index) => (
              <motion.span
                key={interest}
                initial={{ opacity: 0, scale: 0 }}
                animate={isIntersecting ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-100 via-green-100 to-orange-100 rounded-full text-sm font-medium text-gray-700 shadow-md hover:shadow-lg transition-shadow cursor-default"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
