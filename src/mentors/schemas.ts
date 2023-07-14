import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AssignedTeam } from '../mentor-team/models';

@Schema({ collection: 'mentors' })
export class Mentor {
  @Prop()
  name: string;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  role: string;

  @Prop({ type: {} })
  assignedTeam: AssignedTeam;
}

export type MentorDocument = Document & Mentor;

export const MentorSchema = SchemaFactory.createForClass(Mentor);
