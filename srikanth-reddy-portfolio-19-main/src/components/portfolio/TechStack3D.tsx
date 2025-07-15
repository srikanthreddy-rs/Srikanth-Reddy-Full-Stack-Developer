import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

interface TechSphereProps {
  position: [number, number, number];
  technology: string;
  category: string;
  color: string;
  scale: number;
}

const TechSphere: React.FC<TechSphereProps> = ({
  position,
  technology,
  category,
  color,
  scale,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.scale.setScalar(hovered ? scale * 1.15 : scale);
    }
  });

  return (
    <Float speed={2} floatIntensity={2}>
      <group position={position}>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <sphereGeometry args={[1, 32, 32]} />
          <meshPhysicalMaterial
            color={color}
            roughness={0.2}
            metalness={0.7}
            clearcoat={1}
            transmission={0.4}
            thickness={1}
            emissive={new THREE.Color(color).multiplyScalar(hovered ? 0.3 : 0.1)}
          />
        </mesh>

        <Text
          position={[0, 0, 1.3]}
          fontSize={0.2}
          color="#f8fafc"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Bold.woff"
        >
          {technology}
        </Text>

        <Text
          position={[0, -1.6, 0]}
          fontSize={0.14}
          color="#cbd5e1"
          anchorX="center"
          anchorY="middle"
        >
          {category}
        </Text>
      </group>
    </Float>
  );
};

const TechStack3D = () => {
  const techStack: TechSphereProps[] = [
    { technology: 'React', category: 'Frontend', color: '#61dafb', position: [-3.5, 2, 0], scale: 0.9 },
    { technology: 'Node.js', category: 'Backend', color: '#3c873a', position: [0, 2.5, 0], scale: 1 },
    { technology: 'Python', category: 'AI/ML', color: '#3776ab', position: [3.5, 2, 0], scale: 0.85 },
    { technology: 'TypeScript', category: 'Language', color: '#007acc', position: [-2.5, -1.2, 0], scale: 0.75 },
    { technology: 'SQLite', category: 'Database', color: '#003b57', position: [2.5, -1.2, 0], scale: 0.75 },
    { technology: 'Git', category: 'DevOps', color: '#f05032', position: [0, -2.5, 0], scale: 0.65 },
  ];

  return (
    <div className="relative h-[500px] w-full rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 shadow-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
        <Suspense
          fallback={
            <Html center>
              <span className="text-white text-sm">Loading Tech Stack...</span>
            </Html>
          }
        >
          {/* Lights */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-5, -5, -5]} intensity={0.6} color="#22d3ee" />
          <pointLight position={[5, 5, 5]} intensity={0.6} color="#a855f7" />

          {/* Spheres */}
          {techStack.map((tech, idx) => (
            <TechSphere key={idx} {...tech} />
          ))}

          {/* Controls */}
          <OrbitControls
            autoRotate
            autoRotateSpeed={1}
            enableZoom
            enablePan={false}
            maxDistance={15}
            minDistance={7}
          />
        </Suspense>
      </Canvas>

      {/* Overlay Labels */}
      <div className="absolute top-5 left-6 text-white/90 text-base font-semibold tracking-wide">
        💻 Professional Tech Stack
      </div>
      <div className="absolute bottom-4 right-6 text-white/60 text-xs">
        ↔️ Drag • 🔍 Zoom
      </div>
    </div>
  );
};

export default TechStack3D;
