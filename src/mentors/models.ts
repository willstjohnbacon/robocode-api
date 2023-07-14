import { AssignedTeam } from 'src/mentor-team/models';

export interface Mentor {
  _id: string;
  name: string;
  username: string;
  password: string;
  role: string;
  assignedTeam: AssignedTeam;
  isHidden: boolean;
}
