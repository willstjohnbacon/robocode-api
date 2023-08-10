export interface Guide {
  reminders: string;
  agenda: string;
  scoring: Scoring[];
}

export interface Scoring {
  criterion: string;
  examples: string;
  maxPoints: number;
  teamScore: number;
}
