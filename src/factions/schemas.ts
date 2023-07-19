import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'factions' })
export class Faction {
  @Prop()
  name: string;

  @Prop()
  description: string;
}

export type FactionDocument = Document & Faction;

export const FactionSchema = SchemaFactory.createForClass(Faction);
