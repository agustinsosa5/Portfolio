import React, { useEffect } from 'react';

const Particles = () => {
  useEffect(() => {
    particlesJS('particles-js', {
        particles: {
            number: {
              value: 50, // Número de partículas
            },
            color: {
              value: '#000', // Color de las partículas (negro en este caso)
            },
            shape: {
              type: 'circle', // Tipo de partícula (círculo)
            },            
            size: {
              value: 3, // Tamaño de las partículas
            },
            line_linked: {
              enable: false, // Desactivar líneas entre partículas
            },
           
          },
          interactivity: {
            events: {
              onhover: {
                enable: false, // Desactivar eventos al pasar el mouse sobre las partículas
              },
            },
          },
    });
  }, []);

  return <div id="particles-js" style={{ position: 'absolute', width: '100vw', height: '100%', zIndex: -1 }}></div>;
};

export default Particles;
