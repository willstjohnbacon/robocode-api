import {
  TeamAchievementsController,
  TeamsController,
} from './teams.controller';
import { Team, TeamSchema } from './schemas';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamsService } from './teams.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }]),
  ],
  controllers: [TeamsController, TeamAchievementsController],
  providers: [TeamsService],
})
export class TeamsModule {}
