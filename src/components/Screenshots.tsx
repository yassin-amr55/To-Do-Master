import { useState } from 'react';
import { X } from 'lucide-react';

const screenshots = [
  {
    title: 'Multiple lists',
    description: 'Track all your lists easly',
    image: '/assets/screenshot1.png'
  },
  {
    title: 'Daily View',
    description: 'Track your daily routines with progress indicators',
    image: '/assets/Screenshot2.png'
  },
  {
    title: 'Scheduled Tasks',
    description: 'Manage time-specific reminders',
    image: '/assets/Screenshot5.png'
  },
  {
    title: 'Voice Recording',
    description: 'Quick capture with voice notes',
    image: '/assets/Screenshot4.png'
  }
];

export default function Screenshots() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <section id="screenshots" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              See it in action
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Explore the clean, intuitive interface designed for focus
            </p>
          </div>

          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 snap-center cursor-pointer group"
                  onClick={() => setSelectedIndex(index)}
                >
                  <div className="w-[280px] h-[560px] bg-gray-900 rounded-[2.5rem] p-2.5 shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:scale-105 dark:shadow-orange-500/10 dark:ring-1 dark:ring-orange-500/20">
                    <div className="w-full h-full bg-white dark:bg-slate-800 rounded-[2rem] overflow-hidden">
                      <img src={screenshot.image} alt={screenshot.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <p className="text-center mt-4 text-gray-600 dark:text-gray-400 text-sm">
                    {screenshot.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="w-[320px] h-[640px] bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
            <div className="w-full h-full bg-white dark:bg-slate-800 rounded-[2rem] overflow-hidden">
              <img src={screenshots[selectedIndex].image} alt={screenshots[selectedIndex].title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
