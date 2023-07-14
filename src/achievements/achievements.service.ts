import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import {
  Achievement,
  AchievementCompleted,
  AchievementCompletedDocument,
  AchievementDocument,
} from './schemas';

@Injectable()
export class AchievementsService {
  constructor(
    @InjectModel(Achievement.name)
    private achievementModel: Model<AchievementDocument>,

    @InjectModel(AchievementCompleted.name)
    private achievementCompletedModel: Model<AchievementCompletedDocument>,
  ) {}

  getAchievements() {
    return this.achievementModel.find({});
  }

  addAchievement(achievement: Achievement) {
    return this.achievementModel.create(achievement);
  }

  getAchievementDetails(id: string) {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid Achievement ID');
    }
    return this.achievementModel.findOne({ _id: id });
  }

  updateAchievement(id: string, achievement: Achievement) {
    return this.achievementModel.findOneAndUpdate({ _id: id }, achievement);
  }

  deleteAchievement(id: string) {
    return this.achievementModel.findOneAndDelete({ _id: id });
  }
}
