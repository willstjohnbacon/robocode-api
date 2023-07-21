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
import { AuthService } from 'src/authentication/auth.service';
import { AuthModule } from 'src/authentication/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Team.name, schema: TeamSchema },
      { name: Mentor.name, schema: MentorSchema },
    ]),
    AuthModule,
  ],
  controllers: [TeamsController, TeamAchievementsController],
  providers: [TeamsService, MentorTeamService, AuthService],
})
export class TeamsModule {}
