import { Document } from 'mongoose';

export interface ITeam extends Document {
    readonly name: string;
    readonly number: number;
    readonly color: string;
    readonly score: number;
}