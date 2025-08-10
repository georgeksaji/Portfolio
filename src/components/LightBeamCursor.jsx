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
        filter: 'blur(0.5px)',
        transition: 'transform 0.08s cubic-bezier(.22,1,.36,1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '40%',
          height: '40%',
          borderRadius: '50%',
          background: 'conic-gradient(#f8f8f8 0deg, #bfc1c6c0 40deg, #e6e6e6be 90deg, #a7a9acb9 140deg, #f8f8f8a4 180deg, #bfc1c6c0 220deg, #e6e6e6 270deg, #a7a9acb9 320deg, #f8f8f8 360deg)',
          boxShadow: '0 0 4px 4px rgba(0, 0, 0, 0.33), 0 0 16px 4px rgba(0, 0, 0, 0.31)',
          filter: 'contrast(1.4) brightness(1.1) drop-shadow(0 0 8px #e0e0e0)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '18%',
            top: '18%',
            width: '20%',
            height: '20%',
            borderRadius: '50%',
            background: 'linear-gradient(120deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.05) 100%)',
            filter: 'blur(1.2px)',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  );

}
