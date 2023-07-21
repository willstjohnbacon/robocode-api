import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { MentorTeamService } from './mentor-team.service';
import {
  AssignedMentorController,
  AssignedTeamController,
} from './mentor-team.controller';
import { Mentor, MentorSchema } from '../mentors/schemas';
import { Team, TeamSchema } from '../teams/schemas';
import { AuthModule } from 'src/authentication/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Mentor.name, schema: MentorSchema },
      { name: Team.name, schema: TeamSchema },
    ]),
    AuthModule,
  ],
  controllers: [AssignedMentorController, AssignedTeamController],
  providers: [MentorTeamService],
})
export class MentorTeamModule {}
