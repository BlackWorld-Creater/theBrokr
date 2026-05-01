import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import {
  Building2,
  Cpu,
  PieChart,
  ShieldCheck,
  Coins,
  Plane,
  Apple,
  HeartPulse,
  Users,
  ShoppingBag,
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { StaticImageData } from 'next/image';

// Assets (Local imports for first 6, Unsplash for last 4)
import realEstateImg from './assets/real_estate.png';
import itSoftwareImg from './assets/it_software.png';
import LoanImg from './assets/Loan.png';
import insuranceImg from './assets/insurance.png';
import investmentImg from './assets/investment.png';
import travelImg from './assets/travel.png';

interface Industry {
  id: number;
  title: string;
  desc: string;
  image: string | StaticImageData;
  icon: React.ReactNode;
  color: string;
}

const industries: Industry[] = [
  {
    id: 1,
    title: 'Real Estate',
    desc: 'Luxury Skyscrapers. Golden Skies.',
    image: realEstateImg,
    icon: <Building2 className="w-12 h-12" />,
    color: '#D4AF37'
  },
  {
    id: 2,
    title: 'IT & Software',
    desc: 'Futuristic Holograms. Digital Evolution.',
    image: itSoftwareImg,
    icon: <Cpu className="w-12 h-12" />,
    color: '#00F3FF'
  },
  {
    id: 3,
    title: 'Loan',
    desc: 'Wealth Growth. Corporate Excellence.',
    image: LoanImg,
    icon: <PieChart className="w-12 h-12" />,
    color: '#D4AF37'
  },
  {
    id: 4,
    title: 'Insurance',
    desc: 'Unwavering Protection. Total Security.',
    image: insuranceImg,
    icon: <ShieldCheck className="w-12 h-12" />,
    color: '#FFA500'
  },
  {
    id: 5,
    title: 'Investment',
    desc: 'Strategic Growth. Premium Returns.',
    image: investmentImg,
    icon: <Coins className="w-12 h-12" />,
    color: '#FFD700'
  },
  {
    id: 6,
    title: 'Travel',
    desc: 'Dreamy Vistas. Cinematic Horizons.',
    image: travelImg,
    icon: <Plane className="w-12 h-12" />,
    color: '#87CEEB'
  },
  {
    id: 7,
    title: 'Grocery',
    desc: 'Unparalleled Freshness. Premium Quality.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1920',
    icon: <Apple className="w-12 h-12" />,
    color: '#32CD32'
  },
  {
    id: 8,
    title: 'Healthcare',
    desc: 'Sentient Wellness. Precise Care.',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1920',
    icon: <HeartPulse className="w-12 h-12" />,
    color: '#FF1493'
  },
  {
    id: 9,
    title: 'Manpower',
    desc: 'Global Teams. Elite Talent.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920',
    icon: <Users className="w-12 h-12" />,
    color: '#4169E1'
  },
  {
    id: 10,
    title: 'E-Commerce',
    desc: 'Direct Delivery. Luxury Logistics.',
    image: 'https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?auto=format&fit=crop&q=80&w=1920',
    icon: <ShoppingBag className="w-12 h-12" />,
    color: '#D4AF37'
  }
];

const App: React.FC = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [complete, setComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (complete) return;

    const timer = setInterval(() => {
      setCurrentScene((prev) => {
        if (prev === industries.length - 1) {
          clearInterval(timer);
          setComplete(true);
          return prev;
        }
        return prev + 1;
      });
    }, 3500); // Increased to 3.5s for a more cinematic, slower pace

    return () => clearInterval(timer);
  }, [complete]);

  useEffect(() => {
    if (complete) {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#FFFFFF', '#000000']
      });
    }
  }, [complete]);

  return (
    <div className="showcase-container" ref={containerRef}>
      <motion.div
        className="custom-cursor"
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
        style={{ borderColor: industries[currentScene].color }}
      />
      <div className="scanlines"></div>
      <div className="noise"></div>

      {/* Dynamic Background Glow */}
      <motion.div
        className="glow-orb"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        style={{ top: '20%', left: '20%', background: industries[currentScene].color + '33' }}
      />

      <AnimatePresence>
        {!complete ? (
          <motion.div
            key={currentScene}
            initial={{ opacity: 0, filter: 'blur(30px)', scale: 1.05 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            exit={{ opacity: 0, filter: 'blur(20px)', scale: 1.1 }}
            transition={{ duration: 2, ease: 'easeInOut' }} // Much slower 2s transition
            className="scene active"
          >
            <motion.img
              src={typeof industries[currentScene].image === 'string' ? industries[currentScene].image : industries[currentScene].image.src}
              alt={industries[currentScene].title}
              className="scene-image"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{
                scale: 1.25,
                opacity: 1,
                x: (mousePos.x - window.innerWidth / 2) / 40, // Subtle x parallax
                y: (mousePos.y - window.innerHeight / 2) / 40 // Subtle y parallax
              }}
              transition={{
                scale: { duration: 8, ease: 'linear' },
                opacity: { duration: 1.5 },
                x: { type: 'spring', damping: 20 },
                y: { type: 'spring', damping: 20 }
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />

            <div className="content-overlay">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: [1, 1.1, 1],
                  filter: ["drop-shadow(0 0 5px var(--gold-glow))", "drop-shadow(0 0 20px var(--gold-glow))", "drop-shadow(0 0 5px var(--gold-glow))"]
                }}
                transition={{
                  y: { delay: 0.4 },
                  opacity: { delay: 0.4 },
                  scale: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                  filter: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                }}
                style={{ color: 'var(--gold)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}
              >
                {industries[currentScene].icon}
              </motion.div>
              <h2 className="industries-title">
                {industries[currentScene].title.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 15, filter: 'blur(5px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{
                      duration: 1.2,
                      delay: 0.6 + index * 0.12,
                      ease: "easeOut"
                    }}
                    style={{
                      display: 'inline-block',
                      color: char === ' ' ? 'transparent' : 'var(--gold)',
                      whiteSpace: 'pre'
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                {industries[currentScene].desc}
              </motion.p>
            </div>
          </motion.div>
        ) : (
          <div className="final-screen" style={{ opacity: 1, zIndex: 100 }}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="flex flex-col items-center"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <div style={{ border: '2px solid var(--gold)', borderRadius: '50%', padding: '2.5rem', marginBottom: '2rem' }}>
                <Layers className="w-24 h-24" style={{ color: 'var(--gold)', width: '4rem', height: '4rem' }} />
              </div>
              {/* <h1 className="final-logo">ONE PLATFORM</h1>
                <p className="tagline">INFINITE POSSIBILITIES</p> */}

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '400px' }}
                transition={{ delay: 0.5, duration: 1.5 }}
                style={{ height: '1px', background: 'var(--gold)', margin: '3rem 0' }}
              />

              <motion.button
                whileHover={{ scale: 1.05, background: 'white' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'var(--gold)',
                  color: 'black',
                  border: 'none',
                  padding: '1rem 3rem',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  letterSpacing: '3px',
                  fontWeight: 700
                }}
                onClick={() => window.location.reload()}
              >
                REPLAY SHOWCASE
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '5px', background: 'rgba(255,255,255,0.05)' }}>
        <motion.div
          animate={{ width: `${((currentScene + 1) / industries.length) * 100}%` }}
          transition={{ duration: 0.5 }}
          style={{ height: '100%', background: 'var(--gold)', boxShadow: '0 0 20px var(--gold)' }}
        />
      </div>
    </div>
  );
};

export default App;
