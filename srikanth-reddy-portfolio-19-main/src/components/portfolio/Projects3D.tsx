import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, OrbitControls, Box, Html } from '@react-three/drei';
import * as THREE from 'three';

interface Project3DProps {
  position: [number, number, number];
  title: string;
  color: string;
  isActive: boolean;
  onClick: () => void;
}

const ProjectBox: React.FC<Project3DProps> = ({ position, title, color, isActive, onClick }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += hovered ? 0.02 : 0.005;
      meshRef.current.scale.setScalar(isActive ? 1.2 : hovered ? 1.1 : 1);
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.5}>
      <group position={position}>
        <Box
          ref={meshRef}
          args={[1.5, 1.5, 1.5]}
          onClick={onClick}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <meshStandardMaterial 
            color={color}
            transparent
            opacity={isActive ? 0.9 : 0.7}
            emissive={hovered ? new THREE.Color(color).multiplyScalar(0.1) : new THREE.Color(0x000000)}
          />
        </Box>
        {hovered && (
          <Html distanceFactor={10} position={[0, 1.8, 0]}>
            <div className="bg-white text-xs px-2 py-1 rounded shadow text-slate-700">
              Click to Explore
            </div>
          </Html>
        )}
        <Text
          position={[0, -1.5, 0]}
          fontSize={0.3}
          color="#1e293b"
          anchorX="center"
          anchorY="middle"
        >
          {title}
        </Text>
      </group>
    </Float>
  );
};

const Projects3D = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    { title: 'E-commerce Platform', color: '#3b82f6', position: [-3, 0, 0] },
    { title: 'Sign Language Detection', color: '#10b981', position: [0, 0, 0] },
    { title: 'Store Rating System', color: '#f59e0b', position: [3, 0, 0] },
    { title: 'Portfolio Website', color: '#8b5cf6', position: [0, 2, 0] },
    { title: 'BookMyShow Clone', color: '#ef4444', position: [0, -2, 0] },
  ];

  const projectDetails = [
    {
      title: 'E-commerce Platform',
      tech: 'React.js, Node.js, SQLite',
      description: 'Full-stack shopping platform with user authentication and payment integration.',
    },
    {
      title: 'Sign Language Detection',
      tech: 'Python, OpenCV, MediaPipe',
      description: 'Real-time hand gesture recognition using computer vision techniques.',
    },
    {
      title: 'Store Rating System',
      tech: 'React.js, Node.js, MongoDB',
      description: 'Web application for users to rate and review local stores with a user-friendly interface.',
    },
    {
      title: 'Portfolio Website',
      tech: 'React.js, Three.js',
      description: 'Interactive portfolio showcasing projects with 3D animations and effects.',
    },
    {
      title: 'BookMyShow Clone',
      tech: 'React.js, Node.js, MongoDB',
      description: 'Clone of BookMyShow with movie listings, booking system, and user reviews.',
    },
  ];

  return (
    <div className="relative">
      <div className="h-96 w-full bg-gradient-to-b from-slate-900 to-slate-800 rounded-lg">
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
          <Suspense fallback={
            <Html center>
              <span className="text-white text-lg">Loading 3D View...</span>
            </Html>
          }>
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={0.8} />
            <pointLight position={[0, 0, 5]} intensity={0.5} />

            {projects.map((project, index) => (
              <ProjectBox
                key={project.title}
                position={project.position as [number, number, number]}
                title={project.title}
                color={project.color}
                isActive={activeProject === index}
                onClick={() => setActiveProject(activeProject === index ? null : index)}
              />
            ))}

            <OrbitControls
              enableZoom={true}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
              maxDistance={10}
              minDistance={4}
            />
          </Suspense>
        </Canvas>

        <div className="absolute top-4 left-4 text-white/80 text-sm">
          Click on projects to learn more • 3D Interactive
        </div>
      </div>

      {activeProject !== null && (
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-xl bg-white rounded-t-xl shadow-xl border-t border-slate-200 p-6 z-50">
          <button 
            onClick={() => setActiveProject(null)}
            className="absolute top-2 right-3 text-slate-400 hover:text-slate-700 text-xl"
          >×</button>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            {projectDetails[activeProject].title}
          </h3>
          <p className="text-blue-600 font-semibold mb-3">
            {projectDetails[activeProject].tech}
          </p>
          <p className="text-slate-700">
            {projectDetails[activeProject].description}
          </p>
        </div>
      )}
    </div>
  );
};

export default Projects3D;
