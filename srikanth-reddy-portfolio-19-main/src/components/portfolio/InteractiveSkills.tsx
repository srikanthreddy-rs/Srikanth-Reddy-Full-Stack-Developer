
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const InteractiveSkills = () => {
  const [visibleSkills, setVisibleSkills] = useState<string[]>([]);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = {
    frontend: { 
      items: ["HTML", "CSS", "JavaScript", "React.js"], 
      color: "from-blue-500 to-cyan-500",
      proficiency: [95, 90, 85, 88]
    },
    backend: { 
      items: ["Node.js"], 
      color: "from-green-500 to-emerald-500",
      proficiency: [80]
    },
    database: { 
      items: ["SQLite"], 
      color: "from-purple-500 to-violet-500",
      proficiency: [75]
    },
    programming: { 
      items: ["Python"], 
      color: "from-yellow-500 to-orange-500",
      proficiency: [85]
    },
    tools: { 
      items: ["Git", "CI/CD"], 
      color: "from-red-500 to-pink-500",
      proficiency: [90, 70]
    },
    others: { 
      items: ["Machine Learning Basics", "OpenCV"], 
      color: "from-indigo-500 to-purple-500",
      proficiency: [70, 65]
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const category = entry.target.getAttribute('data-category');
            if (category && !visibleSkills.includes(category)) {
              setTimeout(() => {
                setVisibleSkills(prev => [...prev, category]);
              }, Math.random() * 500);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillCards = skillsRef.current?.querySelectorAll('[data-category]');
    skillCards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [visibleSkills]);

  return (
    <section ref={skillsRef}>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
          Hover over each category to see my proficiency levels and explore my technical skills
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {Object.entries(skills).map(([category, { items, color, proficiency }], index) => (
          <Card 
            key={category} 
            data-category={category}
            className={`border-0 shadow-xl bg-white/80 backdrop-blur-sm transition-all duration-500 cursor-pointer transform ${
              visibleSkills.includes(category) 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            } ${hoveredCategory === category ? 'scale-105 shadow-2xl' : 'hover:shadow-2xl hover:-translate-y-1'}`}
            onMouseEnter={() => setHoveredCategory(category)}
            onMouseLeave={() => setHoveredCategory(null)}
            style={{ 
              transitionDelay: `${index * 100}ms`,
              animationDelay: `${index * 200}ms`
            }}
          >
            <CardHeader className="relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-10 transition-opacity duration-300 ${
                hoveredCategory === category ? 'opacity-20' : ''
              }`}></div>
              <CardTitle className="text-xl text-slate-900 flex items-center gap-3 relative z-10">
                <div className={`w-4 h-4 bg-gradient-to-r ${color} rounded-full animate-pulse`}></div>
                {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {items.map((skill, skillIndex) => (
                <div key={skill} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Badge 
                      variant="secondary" 
                      className={`text-sm px-3 py-1 transition-all duration-300 ${
                        hoveredCategory === category 
                          ? `bg-gradient-to-r ${color} text-white shadow-lg` 
                          : 'bg-slate-100 hover:bg-slate-200'
                      }`}
                    >
                      {skill}
                    </Badge>
                    {hoveredCategory === category && (
                      <span className="text-xs font-medium text-slate-600">
                        {proficiency[skillIndex]}%
                      </span>
                    )}
                  </div>
                  {hoveredCategory === category && (
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${proficiency[skillIndex]}%`,
                          transform: hoveredCategory === category ? 'translateX(0)' : 'translateX(-100%)'
                        }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default InteractiveSkills;
