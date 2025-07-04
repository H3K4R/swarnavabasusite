import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SkillBarProps {
  skill: string;
  percentage: number;
  color?: string;
  delay?: number;
}

export default function SkillBar({ 
  skill, 
  percentage, 
  color = "from-blue-500 to-green-500",
  delay = 0 
}: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium text-gray-800">{skill}</span>
        <span className="text-sm font-semibold text-blue-600">{percentage}%</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${color} rounded-full`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ 
            duration: 1.5, 
            delay: delay,
            ease: "easeOut"
          }}
        />
      </div>
    </div>
  );
}
