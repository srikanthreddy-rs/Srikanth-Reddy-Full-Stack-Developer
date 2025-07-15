import React, { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Building, Linkedin, Github } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const roles = [
  "Designing Intelligent Interfaces",
  "Crafting Human-Centered Code",
  "Elevating Experiences Through Engineering",
  "Solving Real-World Problems with Tech"
];

const AnimatedHeader = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 75;
    const pause = isDeleting ? 300 : 1800;

    const handler = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setText((prev) =>
          isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(handler);
  }, [text, roleIndex, isDeleting]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <header
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen flex items-center justify-center relative px-6 py-16 overflow-hidden text-white"
      aria-label="Intro section"
    >
      <canvas
        id="particles-canvas"
        className="absolute inset-0 w-full h-full z-0 opacity-30 blur-sm"
        aria-hidden="true"
      ></canvas>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16"
      >
        <motion.div variants={fadeUp} className="relative group">
          <Avatar className="w-48 h-48 border-4 border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-105">
            <AvatarImage
              src="/lovable-uploads/32e8ab8b-d1a5-4dff-9636-abf2667fbced.png"
              alt="Srikanth Reddy"
              className="object-cover object-center"
            />
            <AvatarFallback className="text-4xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
              SR
            </AvatarFallback>
          </Avatar>
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-slate-900 rounded-full animate-ping" />
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-slate-900 rounded-full" />
        </motion.div>

        <motion.div variants={fadeUp} className="text-center lg:text-left flex-1">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-purple-500 bg-clip-text text-transparent animate-text-glow">
              Tallapureddy Srikanth Reddy
            </span>
          </h1>

          <p
            className="text-2xl lg:text-3xl h-12 mb-6 text-slate-300 font-semibold italic"
            aria-live="polite"
          >
            {text}
            <span className="inline-block w-[10px] h-[1.3em] bg-blue-400 ml-1 animate-blink" />
          </p>

          <p className="text-lg text-slate-400 max-w-2xl mb-8 leading-relaxed">
            I’m a full-stack developer passionate about human-centric design and
            engineering elegant, maintainable code. My work blends design thinking,
            scalable systems, and cutting-edge tools to create digital solutions
            that deliver value and elevate user engagement.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300 mb-8">
            {[
              { icon: Mail, text: "sr2936521@gmail.com", label: "Email" },
              { icon: Phone, text: "+91 8074670478", label: "Phone" },
              { icon: MapPin, text: "Hyderabad, India", label: "Location" },
              { icon: Building, text: "Open to Opportunities", label: "Status" },
            ].map((item, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-3">
                    <item.icon className="w-4 h-4 text-blue-400" />
                    <span>{item.text}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  {item.label}
                </TooltipContent>
              </Tooltip>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="https://linkedin.com/in/tallapureddy-srikanth-reddy-841561213"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 transition-all text-white font-medium shadow"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/srikanthreddy-sr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-slate-700 hover:bg-slate-600 transition-all text-white font-medium shadow"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-purple-600 hover:bg-purple-700 transition-all text-white font-medium shadow"
              aria-label="Download Resume"
            >
              Resume
            </a>
          </div>
        </motion.div>
      </motion.div>

      <a
        href="#projects"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-50"
        aria-label="Scroll to projects"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </a>
    </header>
  );
};

export default AnimatedHeader;
