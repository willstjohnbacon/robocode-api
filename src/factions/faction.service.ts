import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Faction, FactionDocument } from './schemas';
import { Model } from 'mongoose';

@Injectable()
export class FactionService {
  constructor(
    @InjectModel(Faction.name)
    private factionModel: Model<FactionDocument>,
  ) {}

  getFactions() {
    return this.factionModel.find({});
  }

  addFaction(faction: Faction) {
    return this.factionModel.create(faction);
  }

  updateFaction(id: string, faction: Faction) {
    return this.factionModel.findOneAndUpdate({ _id: id }, faction);
  }
}
