import React from 'react';
import { NavItem, MotivationalPhrase, AmbientSound } from './types';

const IconWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "w-6 h-6" }) => (
  <div className={className}>{children}</div>
);

export const FunnelIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconWrapper className={className}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.572a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
    </svg>
  </IconWrapper>
);

export const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconWrapper className={className}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </IconWrapper>
);

export const LightBulbIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconWrapper className={className}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      {/* Simplified Lightbulb Icon */}
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 15.25A.75.75 0 0110.5 14.5h3a.75.75 0 01.75.75v.038c0 .621-.258 1.206-.723 1.607a6.73 6.73 0 01-2.554 1.336 6.702 6.702 0 01-2.554-1.336C7.833 16.494 7.575 15.91 7.575 15.288V15.25a.75.75 0 01.75-.75h1.425M9.75 15.25a4.5 4.5 0 006 0M9.75 15.25v2.502c0 .495.18.967.509 1.334a4.504 4.504 0 005.982 0c.329-.367.509-.84.509-1.334V15.25M12 3v9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a6 6 0 016 6c0 1.908-.898 3.643-2.25 4.782" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3A6 6 0 006 9c0 1.908.898 3.643 2.25 4.782" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
    </svg>
  </IconWrapper>
);

export const ChartBarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconWrapper className={className}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  </IconWrapper>
);

export const ChecklistIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconWrapper className={className}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </IconWrapper>
);

export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconWrapper className={className}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 7.5l.813 2.846a4.5 4.5 0 012.094 2.094L24 13.5l-2.846.813a4.5 4.5 0 01-2.094 2.094L18.25 19.5l-.813-2.846a4.5 4.5 0 01-2.094-2.094L12.5 13.5l2.846-.813a4.5 4.5 0 012.094-2.094L18.25 7.5z" />
    </svg>
  </IconWrapper>
);

export const TrendingUpIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconWrapper className={className}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  </IconWrapper>
);

export const BellAlertIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconWrapper className={className}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.172 5.172a4.5 4.5 0 015.656 0L10 6.343l1.172-1.171a4.5 4.5 0 115.656 5.656L15.657 10l-1.171 1.172a4.5 4.5 0 11-5.656-5.656L10 8.657 8.828 7.485M15 3a3 3 0 100-6 3 3 0 000 6z" />
    </svg>
  </IconWrapper>
);

export const WalletIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconWrapper className={className}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12V7.5a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 7.5v9a2.25 2.25 0 002.25 2.25h9.617a2.25 2.25 0 001.795-.904l3.724-5.096a2.25 2.25 0 00-.006-3.096z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9.75a1.5 1.5 0 011.5-1.5H21a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-.563a1.5 1.5 0 01-1.5-1.5v-2.25a1.5 1.5 0 00-1.5-1.5h-.188a1.5 1.5 0 00-1.5 1.5v2.25A1.5 1.5 0 0114.25 15H12a1.5 1.5 0 01-1.5-1.5V9.75A1.5 1.5 0 0112 8.25h.188a1.5 1.5 0 001.5-1.5V6" />
    </svg>
  </IconWrapper>
);

export const ChatBubbleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconWrapper className={className}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3.697-3.697C12.626 16.09 10.075 16.5 7.5 16.5c-1.944 0-3.753-.346-5.286-.953A2.25 2.25 0 011.5 13.264V8.977c0-1.136.847-2.1 1.98-2.193.34-.027.68-.052 1.02-.072V3.754l3.697 3.697C12.626 7.91 15.175 7.5 17.75 7.5c.748 0 1.453.05 2.122.138zm-9.092 3.017a.75.75 0 011.184-.527l2.515 1.796a.75.75 0 01-.527 1.184l-3.515-2.496a.75.75 0 01-.142-.155z" />
    </svg>
  </IconWrapper>
);

export const HeartCalendarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconWrapper className={className}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-3.75h.008v.008H12v-.008zm0 0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12 12.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75H12z" />
       <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  </IconWrapper>
);

export const QuoteIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconWrapper className={className}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h2.25c.621 0 1.125-.504 1.125-1.125V15M3 10.06C3 6.074 6.074 3 10.06 3h3.88c3.986 0 7.06 3.074 7.06 7.06v3.88c0 3.986-3.074 7.06-7.06 7.06H6.75A3.75 3.75 0 013 17.25V10.06z" />
    </svg>
  </IconWrapper>
);

export const SpeakerWaveIcon: React.FC<{ className?: string }> = ({ className }) => (
  <IconWrapper className={className}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.399-.036.803-.036 1.204 0 1.13.094 1.976 1.057 1.976 2.192V7.5M8.25 7.5A2.25 2.25 0 006 9.75v.75a2.25 2.25 0 002.25 2.25h.75a2.25 2.25 0 002.25-2.25v-.75a2.25 2.25 0 00-2.25-2.25h-.75zm9 3.75c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-1.5c-.621 0-1.125-.504-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125h1.5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l6.256-6.256a1.5 1.5 0 012.122 0l6.256 6.256M3 13.5V1.5M3 13.5h18v7.5H3zM21 1.5v12M9 1.5v12m6-12v12" />
       <path strokeLinecap="round" strokeLinejoin="round" d="M19.115 14.845a.75.75 0 01-.022 1.06l-2.622 2.342a.75.75 0 01-1.038-.03L12 14.845M12 14.845l-3.433 3.372a.75.75 0 01-1.038.03l-2.622-2.342a.75.75 0 01.022-1.06" />
    </svg>
  </IconWrapper>
);


export const NAV_ITEMS: NavItem[] = [
  { path: "/", name: "Embudo de Tareas", icon: <FunnelIcon /> },
  { path: "/focus-timer", name: "Temporizador de Foco", icon: <ClockIcon /> },
  { path: "/mental-dump", name: "Descarga Mental", icon: <LightBulbIcon /> },
  { path: "/saturation-detector", name: "Detector de Saturación", icon: <ChartBarIcon /> },
  { path: "/quick-start-checklist", name: "Checklist Inicio Rápido", icon: <ChecklistIcon /> },
  { path: "/healthy-stimulation", name: "Estimulación Saludable", icon: <SparklesIcon /> },
  { path: "/progress-corner", name: "Rincón del Progreso", icon: <TrendingUpIcon /> },
  { path: "/double-check-reminders", name: "Recordatorios Doble Check", icon: <BellAlertIcon /> },
  { path: "/financial-landing-zone", name: "Zona Financiera", icon: <WalletIcon /> },
  { path: "/conversation-guides", name: "Guías de Conversación", icon: <ChatBubbleIcon /> },
  { path: "/self-care-calendar", name: "Calendario Autocuidado", icon: <HeartCalendarIcon /> },
  { path: "/motivational-phrases", name: "Frases Motivadoras", icon: <QuoteIcon /> },
  { path: "/ambient-noise", name: "Ruido Ambiental", icon: <SpeakerWaveIcon /> },
];

export const POMODORO_DEFAULT_WORK_MINUTES = 25;
export const POMODORO_DEFAULT_BREAK_MINUTES = 5;
export const REMINDER_SNOOZE_MINUTES = 10;

export const PREDEFINED_PHRASES: MotivationalPhrase[] = [
  { id: 'p1', text: "Un pequeño progreso cada día suma grandes resultados.", isCustom: false },
  { id: 'p2', text: "La disciplina es el puente entre metas y logros.", isCustom: false },
  { id: 'p3', text: "Cree en ti mismo, incluso cuando nadie más lo haga.", isCustom: false },
  { id: 'p4', text: "El único modo de hacer un gran trabajo es amar lo que haces.", isCustom: false },
  { id: 'p5', text: "Hoy es una nueva oportunidad para ser mejor.", isCustom: false },
  { id: 'p6', text: "La paciencia es amarga, pero su fruto es dulce.", isCustom: false },
  { id: 'p7', text: "No te compares con los demás. Compárate con la persona que eras ayer.", isCustom: false },
  { id: 'p8', text: "Hecho es mejor que perfecto.", isCustom: false },
  { id: 'p9', text: "Concéntrate en el progreso, no en la perfección.", isCustom: false },
  { id: 'p10', text: "Sé amable contigo mismo. Estás haciendo lo mejor que puedes.", isCustom: false },
];

export const AMBIENT_SOUNDS: AmbientSound[] = [
  { id: 's1', name: "Ruido Blanco", filePath: "/sounds/white_noise.mp3" },
  { id: 's5', name: "Olas del Mar", filePath: "/sounds/ocean_waves.mp3" },
  // IMPORTANT: These filePaths are placeholders.
  // You need to add actual audio files to a `public/sounds/` directory
  // or replace these with valid URLs to hosted audio files.
  // Ensure the audio files are loopable and you have the rights to use them.
];