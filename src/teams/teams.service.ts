import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Team, TeamDocument } from './schemas';
import { Model, Types } from 'mongoose';

@Injectable()
export class TeamsService {
  constructor(
    @InjectModel(Team.name)
    private teamModel: Model<TeamDocument>,
  ) {}

  getTeams() {
    return this.teamModel.find({});
  }

  async addTeam(team: Team) {
    if (await this.teamModel.find({ name: team.name })) {
      return new BadRequestException('Team name is already taken');
    } else if (await this.teamModel.find({ tableNumber: team.tableNumber })) {
      return new BadRequestException('Table Number is already registered');
    }
    await this.teamModel.create(team);
    return this.teamModel.findOne({ name: team.name });
  }

  removeTeam(id: string) {
    return this.teamModel.findOneAndDelete({ _id: id });
  }

  updateTeam(id: string, team: Team) {
    return this.teamModel.findOneAndUpdate({ _id: id }, team);
  }

  async updateTeamScore(id: string, score: number) {
    console.log(`Updating team with ID: ${id}, with score of: ${score}`);
    return await this.teamModel.findOneAndUpdate({ _id: id }, { score: score });
  }

  getTeamDetails(id: string) {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid Activity ID');
    }
    return this.teamModel.findOne({ _id: id });
  }

  async updateTeamAchievements(
    teamId: string,
    achievementId: string,
    achievementCompleted: boolean,
  ) {
    return await this.teamModel.findOneAndUpdate(
      { _id: teamId, 'achievements._id': achievementId },
      {
        $set: {
          'achievements.$.completed': achievementCompleted,
        },
      },
    );
  }
}
