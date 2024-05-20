/* eslint-disable */
// @ts-nocheck
"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-expect-error
import * as random from "maath/random/dist/maath-random.esm";

/* MAIOR DESAFIO LER ARQUIVO QUE ESTA DENTRO DE NODE MODULES PARA RESOLVER O PROBLEMA POIS A FUNÇÃO ESPERA NUMERO MÚLTIPLO DE 3 */
function StarBackground(props: any) {
  const ref: any = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(props.value ?? 5001), { radius: 1.2 }),
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
type StarsCanvasProps = {
  className?: string;
  value?: number;
};
const StarsCanvas = ({ className, value }: StarsCanvasProps) => (
  <div className={`fixed inset-0 h-auto w-full ${className}`}>
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground value={value} />
      </Suspense>
    </Canvas>
  </div>
);
export default StarsCanvas;
