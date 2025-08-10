import React, { useEffect, useRef } from "react";

export default function LightBeamCursor() {
  const beamRef = useRef(null);

  useEffect(() => {
    const moveBeam = (e) => {
      if (beamRef.current) {
        beamRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    document.body.style.cursor = 'none';
    window.addEventListener('mousemove', moveBeam);
    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', moveBeam);
    };
  }, []);

  return (
    <div
      ref={beamRef}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate3d(-100px, -100px, 0)',
        filter: 'blur(1px)',
        transition: 'transform 0.08s cubic-bezier(.22,1,.36,1)',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.24) 0%, rgba(9, 4, 22, 0.76) 60%, rgba(255,255,200,0) 100%)',
          boxShadow: '0 0 16px 4px rgba(11, 11, 11, 0.5)',
        }}
      />
    </div>
  );
}
