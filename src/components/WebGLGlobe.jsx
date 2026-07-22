import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Globe as GlobeIcon, Activity, Sparkles, MapPin, Zap } from 'lucide-react';

export default function WebGLGlobe() {
  const containerRef = useRef(null);
  const [selectedNode, setSelectedNode] = useState(0);

  const deploymentNodes = [
    { location: 'Nadir Habib HQ (Pakistan)', ping: '12ms', status: 'Primary AI Command Core', region: 'Asia-South' },
    { location: 'North America Enterprise Core', ping: '420ms', status: 'Voice AI & Retell Gateway', region: 'us-east-1' },
    { location: 'Europe Cloud Cluster', ping: '510ms', status: 'N8N Webhook Relay', region: 'eu-central-1' },
    { location: 'Asia-Pacific Cluster', ping: '640ms', status: 'Hostinger Docker Host', region: 'ap-southeast-1' },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 220;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Globe Geometry
    const globeGeo = new THREE.SphereGeometry(70, 32, 32);
    const globeMat = new THREE.MeshBasicMaterial({
      color: 0x0A192F,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    scene.add(globe);

    // Glowing Inner Core
    const coreGeo = new THREE.SphereGeometry(62, 24, 24);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xFF5500,
      transparent: true,
      opacity: 0.15
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    // Orbit Ring
    const ringGeo = new THREE.RingGeometry(85, 87, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00D2FF,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    scene.add(ring);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      globe.rotation.y += 0.003;
      ring.rotation.z += 0.002;
      core.rotation.y -= 0.002;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D2FF]/15 border border-[#00D2FF]/30 text-[#00D2FF] text-xs font-semibold mb-2">
            <GlobeIcon className="w-3.5 h-3.5" /> 3D WebGL Global Agent Infrastructure
          </div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Global Low-Latency Deployment Network
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Real-time multi-region webhooks, Voice AI relays, and Hostinger cloud infrastructure monitoring.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* 3D WebGL Globe Viewport */}
        <div className="lg:col-span-6 h-[320px] relative flex items-center justify-center bg-[#030712]/90 rounded-2xl border border-white/10 overflow-hidden">
          <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
          
          <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-black/60 border border-white/10 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            LIVE GLOBE RENDER (THREE.JS)
          </div>
        </div>

        {/* Node Inspection Metrics */}
        <div className="lg:col-span-6 space-y-3">
          <label className="block text-xs font-semibold text-slate-300">Select Region Deployment Node:</label>
          <div className="space-y-2.5">
            {deploymentNodes.map((node, i) => {
              const isSelected = selectedNode === i;
              return (
                <div
                  key={i}
                  onClick={() => setSelectedNode(i)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#0A192F] border-[#FF5500] shadow-lg shadow-[#FF5500]/20 text-white'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin className={`w-4 h-4 ${isSelected ? 'text-[#FF5500]' : 'text-slate-500'}`} />
                    <div>
                      <h4 className="font-heading font-bold text-xs sm:text-sm">{node.location}</h4>
                      <p className="text-[10px] text-[#00D2FF]">{node.status}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      ⚡ {node.ping}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
