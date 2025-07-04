import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Heart, GraduationCap, Users, Stethoscope } from "lucide-react";

export default function Projects() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const projects = [
    {
      icon: Heart,
      title: "PsychScribe Healthcare Platform",
      description: "Built HIPAA-compliant infrastructure on AWS for a mental health platform, ensuring data security and regulatory compliance while maintaining high performance.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["AWS", "HIPAA Compliance", "Security"],
      link: "https://frontend.psychscribe.com.au/",
      color: "text-blue-600"
    },
    {
      icon: GraduationCap,
      title: "ExamNinja Learning Platform",
      description: "Designed high-availability AWS infrastructure with load balancing and auto-scaling to handle 10,000+ concurrent users for an online examination platform.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["AWS", "Auto Scaling", "Load Balancing"],
      link: "https://examninja.co.in/",
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "ShareSamadhan Community",
      description: "Implemented Laravel-based AWS infrastructure with high-performance database optimization and efficient user load management for a community sharing platform.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["AWS", "Laravel", "Database Optimization"],
      link: "https://sharesamadhan.com/",
      color: "text-orange-600"
    },
    {
      icon: Stethoscope,
      title: "NextMed Training Platform",
      description: "Architected microservices-based infrastructure using AWS ECS for a medical training platform, ensuring scalability and modular architecture.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      tags: ["AWS ECS", "Microservices", "Scalability"],
      link: "https://nextmedtraining.com/",
      color: "text-purple-600"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world implementations showcasing scalable cloud infrastructure and DevOps excellence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="bg-white rounded-xl shadow-lg overflow-hidden card-3d hover:shadow-2xl transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} interface`}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 ${project.color} bg-gray-50 rounded-full flex items-center justify-center mr-3`}>
                      <project.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isIntersecting ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + tagIndex * 0.1 }}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          tagIndex === 0 ? 'bg-blue-100 text-blue-700' :
                          tagIndex === 1 ? 'bg-green-100 text-green-700' :
                          'bg-orange-100 text-orange-700'
                        }`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center"
                    >
                      <span>View Project</span>
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
