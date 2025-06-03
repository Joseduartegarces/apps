import React from 'react';

export interface Task {
  id: string;
  text: string;
  category: TaskCategory; // 'inbox', 'today', 'nextWeek', 'someday'
  createdAt: number;
}

export enum TaskCategory {
  INBOX = 'inbox',
  TODAY = 'today',
  NEXT_WEEK = 'nextWeek',
  SOMEDAY = 'someday'
}

export interface MentalDumpNote {
  id: string;
  text: string;
  createdAt: number;
}

export interface SaturationLevel {
  id: string;
  level: number; // 1-5
  notes?: string;
  timestamp: number;
}

export interface CopingStrategy {
  id: string;
  text: string;
}

export interface NavItem {
  path: string;
  name: string;
  icon: React.ReactElement<{ className?: string }>;
}

// QuickStartChecklist types
export interface QuickStartItem {
  id: string;
  text: string;
  completed: boolean;
}

export interface QuickStartList {
  id: string;
  name: string;
  items: QuickStartItem[];
  createdAt: number;
}

// HealthyStimulationMap types
export interface StimulationIdea {
  id: string;
  text: string;
  category?: string; // Optional category
  createdAt: number;
}

// VisibleProgressCorner types
export interface ProgressMilestone {
  id: string;
  description: string;
  completedAt: number;
}

export interface ProgressProject {
  id: string;
  name: string;
  description?: string;
  milestones: ProgressMilestone[];
  targetMilestones?: number; // Optional target for progress calculation
  createdAt: number;
}

// DoubleCheckReminders types
export interface Reminder {
  id: string;
  text: string;
  dateTime: string; // ISO string for date and time
  requiresConfirmation: boolean;
  isConfirmed: boolean; // If confirmation was successful
  snoozeCount: number;
  lastSnooze?: number; // Timestamp of last snooze
  triggered: boolean; // Has the reminder time passed and shown to user
  completed: boolean; // User marked as done
  createdAt: number;
}

// FinancialLandingZone types
export enum FinancialItemType {
  PAYMENT = 'payment',       // Pagos
  INVOICE = 'invoice',       // Boletas/Facturas
  BALANCE = 'balance'        // Saldos de Cuentas
}

export enum FinancialItemStatus {
  PENDING = 'pending',
  PAID = 'paid',
  CREATED = 'created', // for invoices
  OVERDUE = 'overdue',
  TRACKED = 'tracked' // for balances
}
export interface FinancialItem {
  id: string;
  type: FinancialItemType;
  description: string;
  amount?: number;
  dueDate?: string; // ISO string for date
  accountName?: string;
  currentBalance?: number;
  lastUpdated?: string; // ISO string for date
  status: FinancialItemStatus;
  notes?: string;
  createdAt: number;
}

// ConversationGuides types
export interface GuidePoint {
  id: string;
  text: string;
}
export interface ConversationGuide {
  id: string;
  title: string;
  description?: string;
  points: GuidePoint[];
  createdAt: number;
}

// SelfCareCalendar types
export interface SelfCareEvent {
  id: string;
  title: string;
  date: string; // ISO string for date
  time: string; // HH:MM
  durationMinutes: number;
  notes?: string;
  createdAt: number;
}

// MotivationalPhrases types
export interface MotivationalPhrase {
  id: string;
  text: string;
  isCustom: boolean; // To distinguish between predefined and user-added
}

// AmbientNoiseGenerator types
export interface AmbientSound {
  id: string;
  name: string;
  filePath: string; // Path to the audio file (e.g., '/sounds/rain.mp3')
}