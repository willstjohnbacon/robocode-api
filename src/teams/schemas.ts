import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AssignedMentor } from '../mentor-team/models';
import { Achievement } from 'src/achievements/models';

@Schema({ collection: 'teams' })
export class Team {
  @Prop()
  name: string;

  @Prop()
  tableNumber: string;

  @Prop()
  color: string;

  @Prop()
  score: number;

  @Prop()
  faction: string;

  @Prop()
  assignedMentor: string;

  @Prop()
  achievements: Achievement[];
}

export type TeamDocument = Document & Team;

export const TeamSchema = SchemaFactory.createForClass(Team);
