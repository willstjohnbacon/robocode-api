import { Achievement } from 'src/achievements/schemas';
import { AssignedMentor } from 'src/mentor-team/models';

export interface Team {
  _id: string;
  name: string;
  tableNumber: string;
  color: string;
  faction: string;
  score: number;
  assignedMentor: string;
  achievements: Achievement[];
}

export interface AchievementUpdate {
  achievementId: string;
  completed: boolean;
  points: number;
}
