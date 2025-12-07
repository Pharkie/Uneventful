import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { analytics } from '../utils/analytics';
import { About } from './About';

export function LoginPage() {
  const { login } = useAuth();
  const [showAbout, setShowAbout] = useState(false);

  const handleLogin = () => {
    analytics.loginClicked();
    login();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <div className="flex items-center justify-center min-h-screen p-4 pb-20">
        <div className="max-w-md w-full">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 rounded-2xl mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 11l4 4m0-4l-4 4" />
              </svg>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-3">
              Uneventful
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Bulk delete Google Calendar events in seconds
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
            {/* Features */}
            <div className="mb-6 space-y-3">
              <Feature icon="🔍" title="View events by date or search" description="Filter down to exactly what you need" />
              <Feature icon="✨" title="Select up to 100 events" description="Checkboxes beat clicking one-by-one" />
              <Feature icon="⚡" title="Delete them all instantly" description="Reclaim your calendar in seconds" />
              <Feature icon="📚" title="Multiple calendars" description="Switch between your Google Calendars quickly" />
            </div>

            {/* Sign In Button */}
            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign in with Google
            </button>

            {/* Privacy Notice */}
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
              <p className="text-xs text-slate-500 dark:text-slate-400 text-center leading-relaxed">
                <span className="font-semibold">🔐 Privacy first:</span> We only request access to view and edit calendar events.
                Your data is never stored on our servers.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Free & open source •{' '}
              <a
                href="https://github.com/Pharkie/Uneventful"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                View on GitHub
              </a>
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              <button
                onClick={() => setShowAbout(true)}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                About
              </button>
              {' • '}
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
          </div>
        </div>
      </div>

      {/* About Modal */}
      {showAbout && <About onClose={() => setShowAbout(false)} />}
    </div>
  );
}

function Feature({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-2xl flex-shrink-0">{icon}</span>
      <div className="flex-1">
        <div className="text-sm font-semibold text-slate-800 dark:text-white">{title}</div>
        <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{description}</div>
      </div>
    </div>
  );
}
