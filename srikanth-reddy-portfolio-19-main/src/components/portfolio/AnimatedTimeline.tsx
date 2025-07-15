
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, Building, GraduationCap } from "lucide-react";

const AnimatedTimeline = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

 const timelineData = [
  {
    type: 'experience',
    title: 'Machine Learning Intern',
    company: 'Indian Servers',
    period: 'Recent Internship',
    location: 'Remote',
    icon: Building,
    color: 'from-blue-500 to-purple-600',
    description: [
      'Developed and implemented machine learning models for real-world business applications',
      'Gained expertise in Python ML libraries and AI tool integration',
      'Collaborated with cross-functional teams to deliver data-driven solutions',
    ],
    skills: ['Python', 'Machine Learning', 'Data Analysis', 'Team Collaboration'],
  },
  {
    type: 'education',
    title: "Bachelor's in Computer Science",
    company: 'Sir Padampat Singhania University',
    period: 'Currently Pursuing',
    location: 'Udaipur, India',
    icon: GraduationCap,
    color: 'from-green-500 to-teal-600',
    description: [
      'Comprehensive study of computer science fundamentals',
      'Focus on software development and emerging technologies',
      'Active participation in coding competitions and tech events',
    ],
    skills: ['Data Structures', 'Algorithms', 'Software Engineering', 'System Design'],
  },
  {
    type: 'education',
    title: 'Intermediate (MPC)',
    company: 'M P R M Sri Viswasanthi Mahila Junior College',
    period: 'Board of Intermediate Education – 7.6 GPA',
    location: 'Vuyyuru, India',
    icon: GraduationCap,
    color: 'from-yellow-500 to-amber-600',
    description: [
      'Focused on Mathematics, Physics, and Chemistry',
      'Developed logical thinking and problem-solving skills',
      'Built strong academic foundation in science and mathematics',
    ],
    skills: ['Mathematics', 'Physics', 'Chemistry'],
  },
  {
    type: 'education',
    title: 'Secondary School (SSC)',
    company: 'Siddhartha Creative English Medium School',
    period: 'Board of Secondary Education – 9.2 GPA',
    location: 'Tiruvuru, India',
    icon: GraduationCap,
    color: 'from-pink-500 to-rose-600',
    description: [
      'Completed foundational academic education',
      'Strong focus on English, Science, and Mathematics',
      'Participated in extracurricular and school-level competitions',
    ],
    skills: ['English', 'Science', 'Mathematics'],
  },
];


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!visibleItems.includes(index)) {
              setTimeout(() => {
                setVisibleItems(prev => [...prev, index]);
              }, index * 300);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = timelineRef.current?.querySelectorAll('[data-index]');
    timelineItems?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, [visibleItems]);

  return (
    <section ref={timelineRef} className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Experience & Education</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 opacity-30"></div>
        
        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <div 
              key={index}
              data-index={index}
              className={`relative transition-all duration-1000 ${
                visibleItems.includes(index) 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-8 opacity-0'
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r ${item.color} border-4 border-white shadow-lg z-10 ${
                visibleItems.includes(index) ? 'animate-pulse' : ''
              }`}></div>

              <Card className="ml-16 border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="flex items-start justify-between relative z-10">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <item.icon className={`w-6 h-6 text-transparent bg-gradient-to-r ${item.color} bg-clip-text`} />
                        <Badge 
                          variant="outline" 
                          className={`border-0 bg-gradient-to-r ${item.color} text-white text-xs`}
                        >
                          {item.type === 'experience' ? 'Experience' : 'Education'}
                        </Badge>
                      </div>
                      
                      <CardTitle className="text-2xl text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {item.title}
                      </CardTitle>
                      
                      <CardDescription className={`text-lg font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.company}
                      </CardDescription>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-600 relative z-10">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-slate-700">
                    {item.description.map((desc, idx) => (
                      <li 
                        key={idx} 
                        className={`flex items-start gap-3 transition-all duration-500 ${
                          visibleItems.includes(index) ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                        }`}
                        style={{ transitionDelay: `${(idx + 1) * 200}ms` }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full mt-2 flex-shrink-0`}></div>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="pt-4 border-t border-slate-200">
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIdx) => (
                        <Badge 
                          key={skillIdx}
                          variant="secondary" 
                          className={`text-xs px-2 py-1 transition-all duration-300 hover:scale-105 ${
                            visibleItems.includes(index) 
                              ? 'opacity-100 translate-y-0' 
                              : 'opacity-0 translate-y-2'
                          }`}
                          style={{ transitionDelay: `${(skillIdx + 3) * 100}ms` }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedTimeline;
