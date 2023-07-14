import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'achievements' })
export class Achievement {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  points: number;

  @Prop()
  requiresVerification: boolean;

  @Prop()
  achievementType: string;

  @Prop()
  completed: boolean;
}

@Schema({ collection: 'achievements-completed' })
export class AchievementCompleted {
  @Prop()
  _id: string;

  @Prop()
  teamId: string;

  @Prop()
  achievementId: string;
}

export type AchievementDocument = Document & Achievement;
export type AchievementCompletedDocument = Document & AchievementCompleted;

export const AchievementSchema = SchemaFactory.createForClass(Achievement);
export const AchievementCompletedSchema =
  SchemaFactory.createForClass(AchievementCompleted);
