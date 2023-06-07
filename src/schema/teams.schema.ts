import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Team {
    @Prop()
    name: string;

    @Prop()
    number: number;

    @Prop()
    color: string;

    @Prop()
    score: number;
}

export const TeamSchema = SchemaFactory.createForClass(Team)