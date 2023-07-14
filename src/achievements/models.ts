export interface Achievement {
  _id: string;
  name: string;
  description: string;
  points: number;
  requiresVerification: boolean;
  achievementType: string;
  completed: boolean;
}

export interface AchievementCompleted {
  _id: string;
  teamId: string;
  achievementId: string;
}

export type AchievementType = [
  'Mentor Rating',
  'Trailblazer Challenge',
  'Team Target',
  'Bonus Award',
  'Mid-Day Military Exersise',
];
