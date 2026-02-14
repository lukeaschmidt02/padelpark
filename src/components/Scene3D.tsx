import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Cylinder, Sphere, RoundedBox } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function PadelRacket({ position, color, rotation }: { position: [number, number, number], color: string, rotation: [number, number, number] }) {
    const groupRef = useRef<THREE.Group>(null!);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.2 + rotation[1];
        groupRef.current.position.y = position[1] + Math.sin(t * 1) * 0.2;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <group ref={groupRef} position={position} rotation={rotation} scale={0.5}>
                {/* Handle */}
                <Cylinder args={[0.3, 0.3, 2, 32]} position={[0, -2.5, 0]} material-color="#111" />

                {/* Face */}
                <RoundedBox args={[3.5, 4.5, 0.4]} radius={0.5} position={[0, 1, 0]}>
                    <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} />
                </RoundedBox>

                {/* Holes (represented as dark spots for simplicity/performance) */}
                <group position={[0, 1, 0.21]}>
                    <Sphere args={[0.15]} position={[0.5, 0.5, 0]} material-color="#000" />
                    <Sphere args={[0.15]} position={[-0.5, 0.5, 0]} material-color="#000" />
                    <Sphere args={[0.15]} position={[0.5, -0.5, 0]} material-color="#000" />
                    <Sphere args={[0.15]} position={[-0.5, -0.5, 0]} material-color="#000" />
                    <Sphere args={[0.15]} position={[0, 0, 0]} material-color="#000" />
                </group>
            </group>
        </Float>
    );
}

function PadelBall({ position }: { position: [number, number, number] }) {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame(() => {
        meshRef.current.rotation.x += 0.02;
        meshRef.current.rotation.y += 0.03;
    });

    return (
        <Float speed={4} rotationIntensity={2} floatIntensity={2}>
            <Sphere ref={meshRef} args={[0.4, 32, 32]} position={position}>
                {/* Fuzzy yellow material */}
                <meshStandardMaterial color="#ccff00" roughness={1} />
            </Sphere>
        </Float>
    );
}

export function Scene3D() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1 }}>
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={0.4} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#ccff00" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#00e5ff" />

                <PadelRacket position={[-2, 0, 0]} color="#1a1a1a" rotation={[0, 0.2, -0.2]} />
                <PadelRacket position={[2.5, 1, -2]} color="#1a1a1a" rotation={[0, -0.3, 0.2]} />

                <PadelBall position={[0.5, 0.5, 2]} />
                <PadelBall position={[-1.5, -1.5, -1]} />
                <PadelBall position={[2, -1, 1]} />

                {/* Particles/Dust for atmosphere */}
                {/* Neon Lines for atmosphere */}
                {Array.from({ length: 25 }).map((_, i) => {
                    const colors = ['#ccff00', '#00e5ff', '#ff00ff', '#ffffff'];
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    return (
                        <Float key={i} speed={1} rotationIntensity={1} floatIntensity={1}>
                            <Cylinder
                                args={[0.02, 0.02, 1 + Math.random(), 8]}
                                position={[
                                    (Math.random() - 0.5) * 15,
                                    (Math.random() - 0.5) * 15,
                                    (Math.random() - 0.5) * 10
                                ]}
                                rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
                            >
                                <meshBasicMaterial color={color} transparent opacity={0.6} />
                            </Cylinder>
                        </Float>
                    );
                })}

                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
            </Canvas>
        </div>
    );
}
