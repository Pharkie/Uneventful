interface AboutProps {
  onClose: () => void;
}

const formatBuildDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

export function About({ onClose }: AboutProps) {
  const version = __APP_VERSION__;
  const buildDate = formatBuildDate(__BUILD_DATE__);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800 p-6 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 11l4 4m0-4l-4 4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                About Uneventful
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6 text-slate-600 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Problem Statement */}
          <section>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">The Problem</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Deleting multiple Google Calendar events is tedious and time-consuming. The native interface requires you to click through each event individually - there's no way to select and delete multiple events at once.
            </p>
          </section>

          {/* Solution */}
          <section>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">The Solution</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Uneventful provides a simple, visual interface where you can select multiple calendar events and delete them in bulk. It's designed to save you time when cleaning up your calendar.
            </p>
          </section>

          {/* Features */}
          <section>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Features</h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Bulk Event Deletion</strong> - Select and delete up to 100 events at once</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Multi-Calendar Support</strong> - Manage events across all your Google Calendars</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Date Range Filtering</strong> - Filter events by date with presets or custom ranges</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Search & Highlight</strong> - Find events quickly with real-time search and highlighting</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Dark Mode</strong> - Automatically follows your system preference</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Minimal Permissions</strong> - Only requests access to calendar events, not your entire account</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Mobile-First Design</strong> - Responsive interface that works beautifully on any device</span>
              </li>
            </ul>
          </section>

          {/* Privacy & Security */}
          <section>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Privacy & Security</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-2">
              Uneventful is designed with privacy in mind:
            </p>
            <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400 ml-4">
              <li>• Only requests minimal calendar.events permission</li>
              <li>• Does not store your calendar data</li>
              <li>• Tokens stored securely with httpOnly cookies</li>
              <li>• Open source - you can review the code</li>
            </ul>
          </section>

          {/* Tech Stack */}
          <section>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Built With</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              React, TypeScript, TailwindCSS, Vite, Vercel Serverless Functions, Google Calendar API
            </p>
          </section>

          {/* License */}
          <section className="pt-4 border-t border-slate-200 dark:border-slate-700">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
              <strong>It's totally free and open source!</strong> No pricing matrix, no upgrades, no marketing emails, no premium features. Free as in beer.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              <strong>License:</strong> CC BY-NC-SA 4.0 (Non-commercial use only)
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              <strong>Created by:</strong>{' '}
              <a
                href="https://github.com/Pharkie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Pharkie
              </a>
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/Pharkie/Uneventful"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                github.com/Pharkie/Uneventful
              </a>
              {' • '}
              <a
                href="https://github.com/Pharkie/Uneventful/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Report an issue
              </a>
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              <a
                href="/privacy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Privacy Policy
              </a>
              {' • '}
              <a
                href="/terms.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Terms of Service
              </a>
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-4">
              v{version} • Built {buildDate}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
