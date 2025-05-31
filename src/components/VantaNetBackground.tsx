// src/components/VantaNetBackground.tsx
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type VantaEffect = {
  destroy: () => void;
};

export default function VantaNetBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);

  useEffect(() => {
    let isMounted = true;

    if (!vantaEffect) {
      import("vanta/dist/vanta.net.min").then((VANTA) => {
        if (isMounted && vantaRef.current) {
          const effect = VANTA.default({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x3fa7ff,
            backgroundColor: 0xffffff,
          });
          setVantaEffect(effect);
        }
      });
    }

    return () => {
      isMounted = false;
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="fixed top-0 left-0 w-full h-full -z-10" />
  );
}
