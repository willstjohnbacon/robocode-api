import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MentorDocument, Mentor } from 'src/mentors/schemas';
import { TeamDocument, Team } from 'src/teams/schemas';
import { AssignedMentor, AssignedTeam } from './models';

@Injectable()
export class MentorTeamService {
  constructor(
    @InjectModel(Mentor.name)
    private mentorModel: Model<MentorDocument>,

    @InjectModel(Team.name)
    private teamModel: Model<TeamDocument>,
  ) {}

  updateMentorsAssignedTeam(team: Team) {
    return this.mentorModel.findOneAndUpdate(
      { name: team.assignedMentor },
      { assignedTeam: team.name },
      {
        new: true,
      },
    );
  }

  removeMentorsAssignedTeam(id: string) {
    return this.mentorModel.findOneAndUpdate(
      {
        _id: id,
      },
      { assignedTeam: '' },
      {
        new: true,
      },
    );
  }

  // async removeMentorsAssignedTeam(mentorId: string) {
  //   return await this.mentorModel.findOneAndUpdate(
  //     { _id: mentorId },
  //     {
  //       assignedTeam: {
  //         id: '',
  //         name: '',
  //       },
  //     },
  //   );
  // }

  updateTeamsAssignedMentor(teamId: string, assignedTeam: AssignedMentor) {
    return this.teamModel.findOneAndUpdate(
      { _id: teamId },
      { assignedTeam: assignedTeam },
    );
  }
}
