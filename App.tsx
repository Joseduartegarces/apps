

import React, { useEffect } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from './constants';
import useLocalStorage from './hooks/useLocalStorage';
import TaskFunnel from './components/features/TaskFunnel';
import FocusTimer from './components/features/FocusTimer';
import MentalDump from './components/features/MentalDump';
import SaturationDetector from './components/features/SaturationDetector';
import QuickStartChecklist from './components/features/QuickStartChecklist';
import HealthyStimulationMap from './components/features/HealthyStimulationMap';
import VisibleProgressCorner from './components/features/VisibleProgressCorner';
import DoubleCheckReminders from './components/features/DoubleCheckReminders';
import FinancialLandingZone from './components/features/FinancialLandingZone';
import ConversationGuides from './components/features/ConversationGuides';
import SelfCareCalendar from './components/features/SelfCareCalendar';
import MotivationalPhrases from './components/features/MotivationalPhrases';
import AmbientNoiseGenerator from './components/features/AmbientNoiseGenerator';

type Theme = 'light' | 'dark';

const SunIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591M12 12a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5z" />
  </svg>
);

const MoonIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);


const App: React.FC = () => {
  const location = useLocation();
  const [theme, setTheme] = useLocalStorage<Theme>('adhd-toolkit-theme', 'dark'); // Default to dark mode
  const currentTitle = NAV_ITEMS.find(item => item.path === location.pathname)?.name || "ADHD Focus Toolkit";

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const auroraSidebarStyleLight: React.CSSProperties = {
    backgroundImage: `
      radial-gradient(ellipse at 20% 25%, hsla(190, 100%, 75%, 0.7) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 30%, hsla(170, 100%, 65%, 0.6) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 80%, hsla(220, 100%, 80%, 0.5) 0%, transparent 50%),
      radial-gradient(ellipse at 90% 95%, hsla(200, 100%, 70%, 0.6) 0%, transparent 50%),
      linear-gradient(160deg, hsla(180, 80%, 60%, 0.8) 0%, hsla(210, 80%, 70%, 0.8) 100%)
    `,
    backgroundBlendMode: 'screen',
  };

  const auroraSidebarStyleDark: React.CSSProperties = {
    backgroundImage: `
      radial-gradient(ellipse at 20% 25%, hsla(220, 70%, 35%, 0.6) 0%, transparent 60%),
      radial-gradient(ellipse at 80% 30%, hsla(260, 60%, 40%, 0.5) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 80%, hsla(200, 70%, 45%, 0.4) 0%, transparent 50%),
      radial-gradient(ellipse at 90% 95%, hsla(280, 60%, 30%, 0.5) 0%, transparent 60%),
      linear-gradient(160deg, hsla(230, 50%, 25%, 0.9) 0%, hsla(270, 50%, 30%, 0.9) 100%)
    `,
    backgroundBlendMode: 'multiply', // Darker blend for aurora
  };
  
  const sidebarStyle = theme === 'light' ? auroraSidebarStyleLight : auroraSidebarStyleDark;

  return (
    <div className="flex h-screen font-sans antialiased">
      <nav 
        className="w-72 border-r border-white/20 dark:border-neutral-darker/50 text-white p-4 space-y-1.5 flex flex-col shadow-xl dark:shadow-soft-lg-dark z-10"
        style={sidebarStyle}
      >
        <div className="px-3 pt-2 pb-4">
          <h1 className="text-3xl font-bold text-white dark:text-neutral-lightest_DARK" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.4), 0 0 5px rgba(255,255,255,0.3)' }}>
            ADHD Toolkit
          </h1>
          <div className="mt-1 h-0.5 w-1/2 bg-white bg-opacity-40 dark:bg-opacity-30 rounded-full"></div>
        </div>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 p-2.5 rounded-glass hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-200 ease-in-out group ${
                isActive ? 'bg-white/30 dark:bg-white/15 shadow-md font-semibold scale-[1.02]' : 'hover:shadow hover:bg-white/10 dark:hover:bg-white/5'
              }`
            }
          >
            {React.cloneElement(item.icon, { className: "w-5 h-5 flex-shrink-0 text-white dark:text-neutral-lightest_DARK group-hover:scale-110 transition-transform" })}
            <span className="text-sm text-white text-opacity-85 dark:text-neutral-lightest_DARK dark:text-opacity-80 group-hover:text-opacity-100" style={{ textShadow: '0 1px 1px rgba(0,0,0,0.2)' }}>{item.name}</span>
          </NavLink>
        ))}
        <div className="mt-auto pt-4 text-xs text-white/80 dark:text-neutral-light_DARK/70 px-2" style={{ textShadow: '0 1px 1px rgba(0,0,0,0.3)' }}>
          <button 
            onClick={toggleTheme} 
            className="w-full flex items-center justify-center p-2.5 mb-2 rounded-glass bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/30 transition-colors"
            aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
          >
            {theme === 'light' ? <MoonIcon className="w-5 h-5 text-white" /> : <SunIcon className="w-5 h-5 text-yellow-300" />}
            <span className="ml-2 text-sm text-white dark:text-neutral-lightest_DARK">{theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}</span>
          </button>
          <p>Recuerda ser amable contigo mismo.</p>
          <p>&copy; {new Date().getFullYear()}</p>
        </div>
      </nav>

      <main className="flex-1 p-6 md:p-8 overflow-y-auto bg-neutral-lightest/80 dark:bg-neutral-darkest/90 backdrop-blur-sm dark:backdrop-blur-md">
        <header className="mb-6 md:mb-8 pb-3 border-b-2 border-primary-light/50 dark:border-primary-light_DARK/30">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark dark:text-primary-light_DARK">
            {currentTitle}
          </h2>
        </header>
        <Routes>
          <Route path="/" element={<TaskFunnel />} />
          <Route path="/focus-timer" element={<FocusTimer />} />
          <Route path="/mental-dump" element={<MentalDump />} />
          <Route path="/saturation-detector" element={<SaturationDetector />} />
          <Route path="/quick-start-checklist" element={<QuickStartChecklist />} />
          <Route path="/healthy-stimulation" element={<HealthyStimulationMap />} />
          <Route path="/progress-corner" element={<VisibleProgressCorner />} />
          <Route path="/double-check-reminders" element={<DoubleCheckReminders />} />
          <Route path="/financial-landing-zone" element={<FinancialLandingZone />} />
          <Route path="/conversation-guides" element={<ConversationGuides />} />
          <Route path="/self-care-calendar" element={<SelfCareCalendar />} />
          <Route path="/motivational-phrases" element={<MotivationalPhrases />} />
          <Route path="/ambient-noise" element={<AmbientNoiseGenerator />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;