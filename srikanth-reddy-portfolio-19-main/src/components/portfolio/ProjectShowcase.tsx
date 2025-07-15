import React, { useState } from 'react';
import {
  Card, CardContent, CardHeader, CardTitle, CardDescription
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play, Pause } from "lucide-react";

interface Project {
  title: string;
  tech: string;
  description: string[];
  icon: string;
  category: string;
  gradient: string;
  demoSteps: string[];
  stats: Record<string, string>;
  links?: {
    github?: string;
    live?: string;
  };
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    tech: "React.js, Node.js, SQLite",
    description: [
      "Developed a full-stack shopping site with user authentication and payments.",
      "Optimized DB queries, improving load time by 40%.",
      "Mobile-first design with responsive UI."
    ],
    icon: "🛒",
    category: "Full Stack",
    gradient: "from-blue-500 to-purple-600",
    demoSteps: [
      "User Registration", "Browse Catalog", "Cart Management", "Secure Checkout"
    ],
    stats: { Users: "500+", Uptime: "99.9%", Performance: "40% faster" },
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    title: "Sign Language Detection",
    tech: "Python, OpenCV, MediaPipe",
    description: [
      "Real-time gesture detection using CV + AI.",
      "Translated hand gestures to text/speech.",
      "Achieved 92% accuracy in field testing."
    ],
    icon: "🤖",
    category: "Machine Learning",
    gradient: "from-green-500 to-teal-600",
    demoSteps: [
      "Camera Init", "Hand Detection", "Gesture Match", "Speech Output"
    ],
    stats: { Accuracy: "92%", FPS: "30", Languages: "5+" },
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    title: "Store Rating System",
    tech: "React.js, Node.js, MongoDB",
    description: [
      "Local store review app with real-time updates.",
      "Role-based auth and secure access.",
      "Clean UX for ratings & feedback."
    ],
    icon: "⭐",
    category: "Full Stack",
    gradient: "from-yellow-400 to-orange-500",
    demoSteps: ["Login", "Browse Stores", "Add Review", "Rate & Comment"],
    stats: { Stores: "1K+", Reviews: "5K+", Rating: "4.8★" },
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    title: "Portfolio Website",
    tech: "React.js, Three.js",
    description: [
      "Modern developer portfolio with 3D animations.",
      "Smooth transitions, gallery & resume download.",
      "Built for responsiveness & performance."
    ],
    icon: "🎨",
    category: "Frontend",
    gradient: "from-purple-500 to-pink-500",
    demoSteps: ["Intro", "Projects View", "Resume Download", "Contact Form"],
    stats: { Views: "10K+", Interactions: "2K+", Feedback: "5★" },
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    title: "BookMyShow Clone",
    tech: "React.js, Node.js, MongoDB",
    description: [
      "Ticket booking system with admin controls.",
      "Real-time seat selection & JWT auth.",
      "Fully functional movie app clone."
    ],
    icon: "🎬",
    category: "Full Stack",
    gradient: "from-red-500 to-pink-600",
    demoSteps: ["Browse Movies", "Select Seats", "Pay", "Download Ticket"],
    stats: { Bookings: "3K+", Uptime: "99.9%", Movies: "150+" },
    links: {
      github: "#",
      live: "#"
    }
  }
];

const ProjectShowcase = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [playingDemo, setPlayingDemo] = useState<number | null>(null);

  const handlePlayDemo = (index: number) => {
    if (playingDemo === index) {
      setPlayingDemo(null);
    } else {
      setPlayingDemo(index);
      setTimeout(() => setPlayingDemo(null), 4000);
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-2">🚀 Featured Projects</h2>
        <p className="text-slate-600 max-w-xl mx-auto">
          Explore my best work in full-stack, machine learning, and frontend development. Click to expand.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Card
            key={index}
            onClick={() => setActiveProject(activeProject === index ? null : index)}
            className={`transition-all duration-300 cursor-pointer group hover:-translate-y-2 ${
              activeProject === index ? "scale-105 shadow-2xl" : "shadow-md"
            }`}
          >
            <CardHeader className="relative overflow-hidden">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-10 group-hover:opacity-20 transition-all duration-500`}
              />
              <div className="flex items-center gap-4 z-10 relative">
                <div className="text-4xl">{project.icon}</div>
                <div>
                  <Badge variant="secondary" className="mb-1 text-xs">
                    {project.category}
                  </Badge>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePlayDemo(index);
                      }}
                      className={`p-2 rounded-full text-white transition ${
                        playingDemo === index ? "bg-red-500" : "bg-green-500"
                      } hover:scale-110`}
                    >
                      {playingDemo === index ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-white hover:scale-110"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.links?.live && (
                      <a
                        href={project.links.live}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white hover:scale-110"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900 mt-4 z-10 relative">{project.title}</CardTitle>
              <CardDescription className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent text-sm z-10 relative`}>
                {project.tech}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Description */}
              <ul className="list-none space-y-2 text-slate-700 text-sm">
                {project.description.map((point, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <div className={`mt-1 w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Demo Steps */}
              {playingDemo === index && (
                <div className="bg-slate-50 rounded-md border-l-4 border-green-500 p-4">
                  <h4 className="text-slate-900 font-semibold mb-2">Live Demo</h4>
                  <ul className="text-sm space-y-1">
                    {project.demoSteps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex gap-2 items-center">
                        <div className={`w-2 h-2 rounded-full ${
                          stepIndex <= 3 ? "bg-green-500 animate-pulse" : "bg-slate-300"
                        }`} />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Stats */}
              {activeProject === index && (
                <div className="grid grid-cols-3 text-center bg-slate-50 rounded-lg p-4">
                  {Object.entries(project.stats).map(([key, val]) => (
                    <div key={key}>
                      <div className={`text-lg font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {val}
                      </div>
                      <div className="text-xs text-slate-500">{key}</div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
