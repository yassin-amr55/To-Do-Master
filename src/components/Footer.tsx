import { Download, Github, Twitter, Mail } from 'lucide-react';
import logo from '/assets/icon.png';

export default function Footer() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/TodoMaster.apk';
    link.download = 'TodoMaster.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="To-Do Master Logo" className="w-12 h-12 rounded-full shadow-lg" />
              <div>
                <div className="text-xl font-bold text-gray-900 dark:text-white">To-Do Master</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Build habits that stick</div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Simple, focused task management with smart reminders and voice notes. Built for consistency.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <div className="space-y-2">
              <a href="#features" className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                Features
              </a>
              <a href="#screenshots" className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                Screenshots
              </a>
                          <a
              href="https://t-o-d-o-master.netlify.app/pp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Get the App</h3>
            <button
              onClick={handleDownload}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-orange-500 dark:to-red-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download APK
            </button>

            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="mailto:support@todomaster.app"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-700 text-center text-gray-600 dark:text-gray-400 text-sm">
          © 2025 To-Do Master. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
