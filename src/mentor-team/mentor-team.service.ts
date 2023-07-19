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

  updateMentorsAssignedTeam(mentorId: string, assignedTeamObj: AssignedTeam) {
    console.log(`Updating mentor with ID: ${mentorId} with`, assignedTeamObj);

    return this.mentorModel.findOneAndUpdate(
      { _id: mentorId },
      { assignedTeam: assignedTeamObj },
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
