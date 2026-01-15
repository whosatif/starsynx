'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    particlesJS?: (id: string, config: object) => void;
  }
}

interface ParticlesBackgroundProps {
  id?: string;
}

export default function ParticlesBackground({ id = 'particles-js' }: ParticlesBackgroundProps) {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadParticles = () => {
      if (typeof window !== 'undefined' && window.particlesJS) {
        window.particlesJS(id, {
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 5
              }
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        });
      }
    };

    // Load particles.js script if not already loaded
    if (typeof window !== 'undefined' && !window.particlesJS) {
      const script = document.createElement('script');
      script.src = '/particles.js';
      script.onload = loadParticles;
      document.head.appendChild(script);
    } else {
      loadParticles();
    }

    // Cleanup function
    return () => {
      if (typeof window !== 'undefined' && window.particlesJS) {
        const canvas = document.querySelector(`#${id} canvas`);
        if (canvas) {
          canvas.remove();
        }
      }
    };
  }, [id]);

  return (
    <div
      id={id}
      ref={particlesRef}
      className="absolute inset-0 z-0"
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
}
