import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Guide, GuideDocument } from './schemas';
import { Model } from 'mongoose';

@Injectable()
export class GuideService {
  constructor(
    @InjectModel(Guide.name)
    private guideModel: Model<GuideDocument>,
  ) {}

  getGuide() {
    return this.guideModel.find({});
  }
}
