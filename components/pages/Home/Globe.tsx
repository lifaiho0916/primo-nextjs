import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Globe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let globeMesh: THREE.Mesh;

  useEffect(() => {
    const init = () => {
      // Create a new Three.js scene
      scene = new THREE.Scene();

      // Create camera and set its position
      camera = new THREE.PerspectiveCamera(
        45,
        containerRef.current!.clientWidth / containerRef.current!.clientHeight,
        0.3,
        1000
      );
      camera.position.z = 5;

      // Create a new WebGL renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
      renderer.setSize(containerRef.current!.clientWidth, containerRef.current!.clientHeight);
      renderer.setClearColor(0xffffff, 0); // Set clearColor to transparent (alpha = 0)

      containerRef.current!.appendChild(renderer.domElement);

      // Create the globe geometry
      const geometry = new THREE.SphereGeometry(2, 32, 32);
      const texture = new THREE.TextureLoader().load('/assets/glo.png');
      const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, alphaTest: 0.0 })

      // Create a mesh and add it to the scene
      globeMesh = new THREE.Mesh(geometry, material);
      scene.add(globeMesh);

      // Start animation loop
      animate();
    };

    const animate = () => {
      // Rotate the globe
      if (globeMesh) {
        globeMesh.rotation.y += 0.002;
      }

      // Render the scene with the camera
      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }

      // Call animate again on the next frame
      requestAnimationFrame(animate);
    };

    // Initialize the 3D scene
    init();

    // Clean up the scene when the component unmounts
    return () => {
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      if (scene && globeMesh) {
        scene.remove(globeMesh);
      }
    };
  }, []);

  return (
    <>
      <div className='globe_section' ref={containerRef} style={{ width: '700px', height: '700px', background: 'transparent' }} />
    </>
  )
};

export default Globe;
