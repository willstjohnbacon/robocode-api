import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Scoring } from './models';

@Schema({ collection: 'guide' })
export class Guide {
  @Prop()
  reminders: string;

  @Prop()
  agenda: string;

  @Prop()
  scoring: Scoring[];
}

export type GuideDocument = Document & Guide;

export const GuideSchema = SchemaFactory.createForClass(Guide);
