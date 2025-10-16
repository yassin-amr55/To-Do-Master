import { Download, FileText, CheckCircle, Calendar, Mic } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

export default function Hero() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/TodoMaster.apk';
    link.download = 'TodoMaster.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="download" className="relative min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800 -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Build routines<br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-orange-500 dark:to-red-500 bg-clip-text text-transparent">
                  that stick
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl">
                Simple, focused to-dos with reminders and voice memos. Build healthy routines. Get reminded. Stay consistent.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 dark:from-orange-500 dark:to-red-500 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">Daily & Weekly routines with progress tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 dark:from-orange-500 dark:to-red-500 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">Scheduled tasks with smart reminders</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 dark:from-orange-500 dark:to-red-500 flex items-center justify-center">
                  <Mic className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">Voice notes for quick task capture</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleDownload}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-orange-500 dark:to-red-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download To-Do Master (.apk)
              </button>
              <a
                href="https://t-o-d-o-master.netlify.app/pp"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
