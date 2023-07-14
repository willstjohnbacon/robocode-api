import {
  TeamAchievementsController,
  TeamsController,
} from './teams.controller';
import { Team, TeamSchema } from './schemas';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamsService } from './teams.service';
import { Module } from '@nestjs/common';
import { MentorTeamService } from 'src/mentor-team/mentor-team.service';
import { Mentor, MentorSchema } from 'src/mentors/schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Team.name, schema: TeamSchema },
      { name: Mentor.name, schema: MentorSchema },
    ]),
  ],
  controllers: [TeamsController, TeamAchievementsController],
  providers: [TeamsService, MentorTeamService],
})
export class TeamsModule {}
