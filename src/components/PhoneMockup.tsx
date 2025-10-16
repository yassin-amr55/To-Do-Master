import { useEffect, useState, useRef } from 'react';

const screenshots = [
  {
    title: 'Daily Tasks',
    image: '/assets/screenshot1.png'
  },
  {
    title: 'Scheduled',
    image: '/assets/Screenshot2.png'
  },
  {
    title: 'Voice Recorder',
    image: '/assets/Screenshot4.png'
  }
];

export default function PhoneMockup() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!phoneRef.current) return;

      const rect = phoneRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;

      const progress = Math.max(0, Math.min(1, 1 - (elementTop / windowHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translateY = scrollProgress * -50;
  const rotate = (scrollProgress - 0.5) * 8;

  return (
    <div
      ref={phoneRef}
      className="relative"
      style={{
        transform: `translateY(${translateY}px) rotate(${rotate}deg)`,
        transition: 'transform 0.1s cubic-bezier(0.22, 0.9, 0.2, 1)',
      }}
    >
      <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl dark:shadow-orange-500/20 dark:ring-1 dark:ring-orange-500/30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />

        <div className="relative w-full h-full bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-all duration-700 ease-in-out"
              style={{
                opacity: currentIndex === index ? 1 : 0,
                transform: `scale(${currentIndex === index ? 1 : 0.95})`,
              }}
            >
              <div className="h-full w-full bg-white dark:bg-slate-800 overflow-hidden">
                <img src={screenshot.image} alt={screenshot.title} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {screenshots.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'bg-blue-600 dark:bg-orange-500 w-6'
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to screenshot ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
