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
import { AuthModule } from 'src/authentication/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Achievement.name, schema: AchievementSchema },
      { name: AchievementCompleted.name, schema: AchievementCompletedSchema },
    ]),
    AuthModule,
  ],
  controllers: [AchievementsController],
  providers: [AchievementsService],
})
export class AchievementsModule {}
