import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AchievementsController } from './achievements.controller';
import { AchievementsService } from './achievements.service';
import {
  Achievement,
  AchievementCompleted,
  AchievementCompletedSchema,
  AchievementSchema,
} from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Achievement.name, schema: AchievementSchema },
      { name: AchievementCompleted.name, schema: AchievementCompletedSchema },
    ]),
  ],
  controllers: [AchievementsController],
  providers: [AchievementsService],
})
export class AchievementsModule {}
