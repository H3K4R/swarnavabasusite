import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Target } from "lucide-react";

export default function About() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  const stats = [
    { icon: Clock, value: "4+", label: "Years Experience", color: "text-blue-600" },
    { icon: Target, value: "50+", label: "Projects Completed", color: "text-green-600" },
    { icon: Users, value: "10K+", label: "Users Served", color: "text-orange-600" },
    { icon: Award, value: "5+", label: "Certifications", color: "text-purple-600" },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-blue-50 to-green-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate Cloud Architect & DevOps Expert
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-800">
              Passionate Cloud Architect & DevOps Expert
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              With over 4 years of hands-on experience in cloud infrastructure and DevOps practices, 
              I specialize in designing and implementing scalable, secure, and efficient cloud solutions. 
              My expertise spans across major cloud platforms including AWS, Azure, and GCP.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              I have a proven track record of building HIPAA-compliant systems, handling high-traffic 
              applications with 10,000+ concurrent users, and implementing microservices architectures 
              that drive business success.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Cloud Architecture", "DevOps", "Microservices", "HIPAA Compliance", "Auto Scaling"].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isIntersecting ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="px-4 py-2 bg-white rounded-full text-sm font-medium text-blue-600 shadow-md hover:shadow-lg transition-shadow"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Modern workspace with multiple monitors showing cloud infrastructure"
                className="rounded-xl shadow-2xl w-full card-3d"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-blue-600 rounded-full animate-pulse-slow opacity-80" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-purple-600 rounded-full animate-bounce-slow opacity-60" />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <Card className="text-center p-6 card-3d hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className={`w-12 h-12 ${stat.color} mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
